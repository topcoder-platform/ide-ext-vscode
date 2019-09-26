import * as vscode from 'vscode';
import AuthService from '../services/AuthService';
import * as constants from '../constants';
import Notification from '../helpers/Notification';
import Telemetry from '../services/TelemeteryService';

/**
 * Controller for handling authentication commands.
 */
export default class AuthController {
  constructor(private context: vscode.ExtensionContext) {
    Telemetry.getToken = AuthService.updateTokenGlobalState.bind(AuthService, this.context);
  }

  public async login(isCommand: boolean = false) {
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
      if (isCommand) { await Telemetry.command('login'); }

      Notification.showInfoNotification(constants.loggedInMessage);
    } catch (err) {
      Notification.showErrorNotification(err.toString());
    }
  }

  public async logout() {
    await Telemetry.command('logout');
    this.context.globalState.update(constants.tokenStateKey, '');
    Notification.showInfoNotification(constants.loggedOutMessage);
  }
}
