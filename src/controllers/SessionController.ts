import * as vscode from 'vscode';
import HtmlHelper from '../helpers/Html';
import TelemetryService from '../services/TelemetryService';
import {getEnv} from '../config';
import AuthService from '../services/AuthService';
import Notification from '../helpers/Notification';
import * as constants from '../constants';
import SessionService from '../services/SessionService';
import Html from '../helpers/Html';

export default class SecretSessionController {

   private pairingWebviewPanel: vscode.WebviewPanel | undefined = undefined;
   private poolingInterval: any = undefined;
   private poolingTimeout: any = undefined;
   private hasPendingRefresh: boolean = false;
   private hasPendingCheck: boolean = false;
   constructor(private context: vscode.ExtensionContext) {}
   /**
    * Create webview for secret session pairing, if there is't any
    */
   public async initializeSecretSession() {
         if (this.pairingWebviewPanel) {
            return;
         }
         await this.startNewSession();
   }
   /**
    * Start new pairing session
    */
   private async startNewSession() {
      try {
         // Make sure there is no interval nor timeout running in the background
         if (this.poolingInterval) { this.removeInterval(); }
         if (this.poolingTimeout) { this.removeTimeout(); }
         const token = await AuthService.updateTokenGlobalState(this.context);
         if (!token) {
            throw new Error(constants.notLoggedInMessage);
         }
         Notification.showInfoNotification(constants.generatingSecureSession);
         // Start session and get its id
         const sessionId = await SessionService.generateSecureSessionId(token);
         if (!this.pairingWebviewPanel) {
            this.pairingWebviewPanel = this.makeWebViewAvailable(constants.secureSessionStartPageTitle);
         }
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
    * Handle messages received from webview page
    * @param message message object
    */
   private handleMessagesFromWebView = async (message: any) => {
      switch (message.action) {
         case constants.webviewMessageActions.SESSION_CREATION_REFRESH: {
            // Prevent multiple refresh button clicks
            if (this.hasPendingRefresh) { return; }
            this.hasPendingRefresh = true;
            await this.startNewSession();
            break;
         }
      }
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
            if (await SessionService.checkForStatusUpdate(token, sessionId)) {
                  command = constants.webviewMessageActions.SESSION_CREATED;
            } else {
                await SessionService.timeOutPairingSession(token, sessionId);
                command = constants.webviewMessageActions.SESSION_CREATION_TIMED_OUT;
               }
            await this.pairingWebviewPanel!.webview.postMessage({command});
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
         if (await SessionService.checkForStatusUpdate(token, sessionId)) {
            await this.pairingWebviewPanel!.webview
               .postMessage({command: constants.webviewMessageActions.SESSION_CREATED});
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
}
