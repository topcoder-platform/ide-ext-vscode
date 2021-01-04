import * as vscode from 'vscode';
import HtmlHelper from '../helpers/Html';
import TelemetryService from '../services/TelemetryService';
import { getEnv } from '../config';
import AuthService from '../services/AuthService';
import Notification from '../helpers/Notification';
import * as constants from '../constants';
import ProofsService from '../services/secure-sessions/ProofsService';
import BioIdService from '../services/secure-sessions/BioIdService';
import GeoService from '../services/secure-sessions/GeoService';
import Html from '../helpers/Html';
import * as path from 'path';
import { IProofEvent } from '../interfaces';

// tslint:disable-next-line: no-var-requires
const NodeWebcam = require('node-webcam');

export default class SecureSessionController {

  private pairingWebviewPanel: vscode.WebviewPanel | undefined = undefined;
  private poolingInterval: any = undefined;
  private poolingTimeout: any = undefined;
  private verifyBioIdInterval: any = undefined;
  private hasPendingRefresh: boolean = false;
  private hasPendingCheck: boolean = false;
  private hasOnGoingSession: boolean = false;
  private capturingImage: boolean = false;
  private capturedVerificationImage: string = '';
  private opts = {
    width: 1280,
    height: 720,
    quality: 100,
    delay: 0,
    saveShots: false,
    output: 'jpeg',
    device: false,
    callbackReturn: 'base64',
    verbose: false
  };
  constructor(private context: vscode.ExtensionContext) { }
  /**
   * Create webview for secret session pairing, if there is't any
   */
  public async initializeSecretSession() {
    if (this.pairingWebviewPanel) {
      return;
    }
    if (this.hasOnGoingSession) {
      await this.displayOnGoingSession();
    } else {
      await this.startNewSession();
    }
  }
  /**
   * Start new pairing session
   */
  private async startNewSession() {
    try {
      // Make sure there is no interval nor timeout running in the background
      if (this.poolingInterval) { this.removeInterval(); }
      if (this.verifyBioIdInterval) {
        clearInterval(this.verifyBioIdInterval);
        this.verifyBioIdInterval = undefined;
      }
      if (this.poolingTimeout) { this.removeTimeout(); }
      const token = await AuthService.updateTokenGlobalState(this.context);
      if (!token) {
        throw new Error(constants.notLoggedInMessage);
      }
      // Start session and get its id
      const sessionId = await Notification.showProgressNotification(
        constants.generatingSecureSession,
        ProofsService.generateSecureSessionId(token)
      );
      this.context.globalState.update(constants.sessionIdKey, sessionId);
      if (!this.pairingWebviewPanel) {
        this.pairingWebviewPanel = this.makeWebViewAvailable(constants.secureSessionStartPageTitle);
      }
      this.hasOnGoingSession = true;
      await this.setWebviewContent(
        this.pairingWebviewPanel, await Html.generateSecureSessionFlowHtml(sessionId));
      this.hasPendingRefresh = false;
      this.poolingInterval = setInterval(async () => {
        await this.poolStatus(sessionId);
      }, constants.SECURE_SESSION_POOL_INTERVAL);
      this.poolingTimeout = setTimeout(async () => {
        await this.timeout(sessionId);
      }, constants.SECURE_SESSION_TIMEOUT);
    } catch (err) {
      Notification.showErrorNotification(err.message);
      this.hasPendingRefresh = false;
    }
  }
  /**
   * Display ongoing session
   */
  private async displayOnGoingSession() {
    const token = await AuthService.updateTokenGlobalState(this.context);
    if (!token) {
      throw new Error(constants.notLoggedInMessage);
    }

    if (!this.pairingWebviewPanel) {
      this.pairingWebviewPanel = this.makeWebViewAvailable(constants.secureSessionStartPageTitle);
    }
    await this.setWebviewContent(
      this.pairingWebviewPanel, await Html.generateEndSecureSessionHtml());
  }

  /**
   * Ends the secure session
   */
  private async endSession(throughWebView: boolean): void {
    const sessionId = this.context.globalState.get(constants.sessionIdKey);
    const token = await AuthService.updateTokenGlobalState(this.context);
    clearInterval(this.verifyBioIdInterval);
    ProofsService.closeSession(token, sessionId);
    this.hasOnGoingSession = false;
    if (throughWebView) {
      this.pairingWebviewPanel!.dispose();
    }
    this.context.globalState.update(constants.secureSessionsKey, false);
  }

  /**
   * Handle messages received from webview page
   * @param message message object
   */
  private handleMessagesFromWebView = async (message: any) => {
    switch (message.action) {
      case constants.webviewMessageActions.PROCEED_TO_BIOMETERIC_VERIFICATION: {
        await this.setWebviewContent(this.pairingWebviewPanel, await Html.generateBiometricVerificationHtml());
        const cameraDetected = await this.detectCamera();
        // Check if a camera is detected or not
        if (cameraDetected) {
          this.pairingWebviewPanel!.webview.postMessage({
            command: constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAMERA_DETECTED
          });
        } else {
          this.pairingWebviewPanel!.webview.postMessage({
            command: constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAMERA_NOT_DETECTED
          });
        }
        break;
      }
      case constants.webviewMessageActions.BIOMETRIC_VERIFICATION_REDETECT_CAMERA: {
        const cameraDetected = await this.detectCamera();
        if (cameraDetected) {
          this.pairingWebviewPanel!.webview.postMessage({
            command: constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAMERA_DETECTED
          });
        } else {
          this.pairingWebviewPanel!.webview.postMessage({
            command: constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAMERA_NOT_DETECTED
          });
        }
        break;
      }
      case constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAPTURE_IMAGE: {
        if (this.capturingImage) {
          break;
        }
        this.capturingImage = true;
        const image = vscode.Uri.file(path.join(this.context.extensionPath, 'images', constants.BIOMETRIC_IMAGE_NAME));
        this.capturedVerificationImage = await this.takePhotoFromWebCam(image.fsPath);
        // If image is captured then proceed else display a notification
        if (this.capturedVerificationImage) {
          const imagePath = (this.pairingWebviewPanel!.webview as any).asWebviewUri(image);
          this.pairingWebviewPanel!.webview.html = await HtmlHelper.generateBiometricVerificationHtml(imagePath);
          this.pairingWebviewPanel!.webview.postMessage({
            command: constants.webviewMessageActions.BIOMETRIC_VERIFICATION_IMAGE_CAPTURED,
            path: imagePath
          });
        } else {
          Notification.showInfoNotification(constants.imageCapturedFailedMessage);
        }
        this.capturingImage = false;
        break;
      }
      case constants.webviewMessageActions.BIOMETRIC_COMPLETE_VERIFICATION: {
        const token = await AuthService.updateTokenGlobalState(this.context);
        const imagePath = path.join(this.context.extensionPath, 'images', constants.BIOMETRIC_IMAGE_NAME);
        if (this.capturedVerificationImage) {
          try {
            const deviceId = await Notification.showProgressNotification(
              constants.fetchDeviceId,
              ProofsService.getDeviceId(this.context, token)
            );
            const proof: IProofEvent = {
              sessionId: this.context.globalState.get(constants.sessionIdKey) as string,
              deviceId,
              proofType: ['Identity'],
              // TODO - figure out how to pass large payload to Proofs API without it complaining about the size
              // idProof: this.capturedVerificationImage
              idProof: JSON.stringify({ Success: true })
            };
            await Notification.showProgressNotification(
              constants.submitForVerification,
              BioIdService.verifyBioid(token, imagePath, proof)
            );
          } catch (error) {
            Notification.showErrorNotification(constants.biometricVerificationFailed);

            return;
          }
        } else {
          Notification.showInfoNotification(constants.imageCapturedFailedMessage);
        }
        await this.submitGeolocationProof();
        this.context.globalState.update(constants.secureSessionsKey, true);
        this.pairingWebviewPanel!.webview.postMessage({
          command: constants.webviewMessageActions.BIOMETRIC_VERIFICATION_COMPLETED
        });
        if (this.hasOnGoingSession) {
          this.takePhotoPeriodically(token);
        }
        break;
      }
      case constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CLOSE_WINDOW: {
        // Closes the WebView Panel
        this.pairingWebviewPanel!.dispose();
        break;
      }
      case constants.webviewMessageActions.SESSION_CREATION_REFRESH: {
        // Prevent multiple refresh button clicks
        if (this.hasPendingRefresh) { return; }
        this.hasPendingRefresh = true;
        await this.startNewSession();
        break;
      }
      case constants.webviewMessageActions.BIOMETRIC_VERIFICATION_END_SESSION: {
        // clear the session
        await this.endSession(true);
      }
    }
  }

  /**
   * This function will take the photos and send it to verify endpoint periodically
   * @param token Authorization token for api endpoints
   */
  private takePhotoPeriodically(token: string) {
    this.verifyBioIdInterval = setInterval(async () => {
      const photoPath = path.join(this.context.extensionPath, 'images',
        constants.BIOMETRIC_IMAGE_NAME);
      const image = await this.takePhotoFromWebCam(photoPath);
      const deviceId = await ProofsService.getDeviceId(this.context, token);
      const proof: IProofEvent = {
        sessionId: this.context.globalState.get(constants.sessionIdKey) as string,
        deviceId,
        proofType: ['Identity'],
        // TODO - figure out how to pass large payload to Proofs API without it complaining about the size
        // idProof: image
        idProof: JSON.stringify({ Success: true })
      };
      if (photoPath !== undefined) {
        try {
          await BioIdService.verifyBioid(token, photoPath, proof);
        } catch (error) {
          await this.endSession(false);
          Notification.showErrorNotification(constants.biometricVerificationFailedEndSession);
          return;
        }
      }
      await this.submitGeolocationProof();
    }, constants.BIOID_VERIFY_INTERVAL);
  }

  /**
   * This funtion will only return true if a camera is detected
   * @return boolean
   */
  private detectCamera = async (): Promise<boolean> => {
    const Webcam = NodeWebcam.create(this.opts);
    return new Promise((res, reject) => {
      Webcam.hasCamera(async (data: any) => {
        try {
          if (data) {
            res(data);
          } else {
            res(false);
          }
        } catch {
          reject();
        }
      });
    });
  }

  /**
   * This function will take a new photo and returns the image path
   * @param imagePath accepts the image path where the image needs to be stored
   * @return imagePath or undefined
   */
  private takePhotoFromWebCam = async (imagePath: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      NodeWebcam.capture(imagePath, this.opts, (err: any, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  /**
   * Call with session checking timeout, show success message if status is now Available, otherwise expire
   * @param token user access token
   * @param sessionId id of the session
   */
  private timeout = async (sessionId: string) => {
    try {
      const token = await AuthService.updateTokenGlobalState(this.context);
      if (!token) {
        throw new Error(constants.notLoggedInMessage);
      }
      await clearInterval(this.poolingInterval);
      let command = '';
      if (await ProofsService.checkForStatusUpdate(token, sessionId)) {
        command = constants.webviewMessageActions.SESSION_CREATED;
      } else {
        await ProofsService.timeOutPairingSession(token, sessionId);
        command = constants.webviewMessageActions.SESSION_CREATION_TIMED_OUT;
      }
      await this.pairingWebviewPanel!.webview.postMessage({ command });
    } catch (err) {
      this.handleStatusCheckError();
    }
  }
  /**
   * Call with session checking interval, if status is now Available show success message and clean
   * @param token user access token
   * @param sessionId id of the session
   */
  private poolStatus = async (sessionId: string) => {
    try {
      const token = await AuthService.updateTokenGlobalState(this.context);
      if (!token) {
        throw new Error(constants.notLoggedInMessage);
      }
      if (this.hasPendingCheck) { return; }
      this.hasPendingCheck = true;
      if (await ProofsService.checkForStatusUpdate(token, sessionId)) {
        await this.pairingWebviewPanel!.webview
          .postMessage({ command: constants.webviewMessageActions.SESSION_CREATED });
        this.removeTimeout();
        this.removeInterval();
      }
      this.hasPendingCheck = false;
    } catch (err) {
      this.handleStatusCheckError();
    }
  }
  private webviewDisposal = () => {
    this.pairingWebviewPanel = undefined;
    this.removeInterval();
    this.removeTimeout();
  }
  /**
   * Ensure that a valid and undisposed webview is available to load
   * @param title webview title
   */
  private makeWebViewAvailable(title: string) {
    let webviewPanel: vscode.WebviewPanel | undefined;
    const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
    if (webviewPanel) {
      webviewPanel.reveal(columnToShowIn);
    } else {
      webviewPanel = this.getNewWebViewPanel(title, true);
      // handle dispose of webview
      webviewPanel.onDidDispose(
        this.webviewDisposal,
        null,
        this.context.subscriptions
      );

      // listen for messages from webview
      webviewPanel.webview.onDidReceiveMessage(
        this.handleMessagesFromWebView,
        undefined,
        this.context.subscriptions
      );
    }
    return webviewPanel;
  }
  private handleStatusCheckError() {
    Notification.showErrorNotification(constants.SECRET_SESSION_STATUS_POOL_ERROR);
    this.removeTimeout();
    this.removeInterval();
    this.hasPendingCheck = false;
    this.pairingWebviewPanel!.webview.postMessage({
      command: constants.webviewMessageActions.SESSION_CREATION_FAILED
    });
  }
  /** Returns a new webview panel which persists.
   * @param title The title of the webview panel
   * @param allowScripts Defaults to false. Set true to enable javascript inside the webview.
   */
  private getNewWebViewPanel(title: string, allowScripts = false): vscode.WebviewPanel {
    const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
    // create a new panel
    const webviewPanel: vscode.WebviewPanel | undefined = vscode.window.createWebviewPanel(
      constants.scheme,
      title,
      columnToShowIn || vscode.ViewColumn.One,
      {
        enableScripts: allowScripts,
        retainContextWhenHidden: true
      }
    );
    return webviewPanel;
  }
  /**
   * Set the content of the webview using the available information
   * @param webviewPanel webviewPanel to set the html content
   * @param content  content to show (challenges list, detail or submissions)
   */
  private setWebviewContent(webviewPanel: vscode.WebviewPanel | undefined, content: any) {
    if (webviewPanel) {
      webviewPanel.webview.html = content;
    }
  }
  private removeInterval() {
    clearInterval(this.poolingInterval);
    this.poolingInterval = undefined;
  }
  private removeTimeout() {
    clearTimeout(this.poolingTimeout);
    this.poolingTimeout = undefined;
  }

  private async submitGeolocationProof() {
    const token = await AuthService.updateTokenGlobalState(this.context);
    const [geolocation, deviceId] = await Promise.all([
      GeoService.getGeocoordinatesFromIP(token),
      ProofsService.getDeviceId(this.context, token)
    ]);
    const proof: IProofEvent = {
      sessionId: this.context.globalState.get(constants.sessionIdKey) as string,
      deviceId,
      proofType: ['Geolocation'],
      geolocation: JSON.stringify(geolocation)
    };
    await ProofsService.createProofEvent(token, proof);
  }
}
