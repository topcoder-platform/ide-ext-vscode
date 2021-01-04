import * as path from 'path';
import * as vscode from 'vscode';
import AuthService from '../services/AuthService';
import * as constants from '../constants';
import HtmlHelper from '../helpers/Html';
import Notification from '../helpers/Notification';
import TelemetryService from '../services/TelemetryService';

/**
 * Controller for handling authentication commands.
 */
export default class AuthController {
  private deviceAuthorizationWebviewPanel: vscode.WebviewPanel | undefined = undefined;

  constructor(private context: vscode.ExtensionContext) {}

  public async login() {
    try {
      const deviceData = await AuthService.startDeviceAuthorization();
      this.deviceAuthorizationWebviewPanel = vscode.window.createWebviewPanel(
        constants.scheme,
        constants.deviceAuthorizationPageTitle,
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );
      const topcoderLogoPath = vscode.Uri.file(path.join(this.context.extensionPath, 'images', 'logo.png'));
      const topcoderLogo = (this.deviceAuthorizationWebviewPanel.webview as any).asWebviewUri(topcoderLogoPath);
      this.deviceAuthorizationWebviewPanel.webview.html = await HtmlHelper.generateDeviceAuthorizationHtml(deviceData,
        topcoderLogo);
      AuthService.pollDeviceAuthorization(this.context, deviceData).subscribe(
        null,
        (error) => {
          if (this.deviceAuthorizationWebviewPanel !== undefined && typeof error === 'string') {
            this.deviceAuthorizationWebviewPanel.webview.postMessage({
              command: constants.webviewMessageActions.DISPLAY_ERROR_MESSAGE,
              message: error
            });
          } else {
            throw error;
          }
        },
        () => {
          if (this.deviceAuthorizationWebviewPanel !== undefined) {
            this.deviceAuthorizationWebviewPanel.dispose();
          }
          vscode.commands.executeCommand('homeView.refresh');
          Notification.showInfoNotification(constants.loggedInMessage);
          TelemetryService.share({
            event: 'User Logged In',
          }, AuthService.getSavedToken(this.context));
        }
      );

    } catch (err) {
      Notification.showErrorNotification(err.toString());
    }
  }

  public async logout() {
    this.context.globalState.update(constants.tokenStateKey, '');
    this.context.globalState.update(constants.refreshTokenStateKey, '');
    this.context.globalState.update(constants.sessionIdKey, '');
    this.context.globalState.update(constants.secureSessionsKey, '');
    this.context.globalState.update(constants.deviceIdKey, '');
    vscode.commands.executeCommand('homeView.refresh');
    Notification.showInfoNotification(constants.loggedOutMessage);
  }
}
