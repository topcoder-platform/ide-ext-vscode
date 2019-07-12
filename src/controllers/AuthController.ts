import * as vscode from 'vscode';
import AuthService from '../services/AuthService';
import * as constants from '../constants';

/**
 * Controller for handling authentication commands.
 */
export default class AuthController {
  constructor(private context: vscode.ExtensionContext) { }

  public async login() {
    const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
    const username = config.get(constants.usernameConfig);
    const password = config.get(constants.passwordConfig);

    if (!username) {
      vscode.window.showErrorMessage(constants.missingUsernameMessage);
      return;
    }

    if (!password) {
      vscode.window.showErrorMessage(constants.missingPasswordMessage);
      return;
    }

    vscode.window.showInformationMessage(constants.loggingInMessage);

    try {
      await AuthService.updateTokenGlobalState(this.context);

      vscode.window.showInformationMessage(constants.loggedInMessage);
    } catch (err) {
      vscode.window.showErrorMessage(err.toString());
    }
  }

  public async logout() {
    this.context.globalState.update(constants.tokenStateKey, '');
    vscode.window.showInformationMessage(constants.loggedOutMessage);
  }
}
