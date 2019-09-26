import * as vscode from 'vscode';
import AuthService from '../services/AuthService';
import * as constants from '../constants';
import Notification from '../helpers/Notification';
import TelemetryService from '../services/TelemetryService';

/**
 * Controller for handling authentication commands.
 */
export default class AuthController {
  constructor(private context: vscode.ExtensionContext) {}

  public async login() {
    const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
    const username = config.get(constants.usernameConfig);
    const password = config.get(constants.passwordConfig);

    if (!username) {
      Notification.showErrorNotification(constants.missingUsernameMessage);
      return;
    }

    if (!password) {
      Notification.showErrorNotification(constants.missingPasswordMessage);
      return;
    }

    Notification.showInfoNotification(constants.loggingInMessage);

    try {
      await AuthService.updateTokenGlobalState(this.context);
      Notification.showInfoNotification(constants.loggedInMessage);
      TelemetryService.share({
        event: 'User Logged In',
      }, AuthService.getSavedToken(this.context));
    } catch (err) {
      Notification.showErrorNotification(err.toString());
    }
  }

  public async logout() {
    this.context.globalState.update(constants.tokenStateKey, '');
    Notification.showInfoNotification(constants.loggedOutMessage);
  }
}
