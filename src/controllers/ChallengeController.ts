import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as constants from '../constants';
import ChallengeService from '../services/ChallengeService';
import AuthService from '../services/AuthService';

/**
 * Controller for handling challenge commands.
 */
export default class ChallengeController {
  private webviewPanel: vscode.WebviewPanel | undefined = undefined;

  constructor(private context: vscode.ExtensionContext) { }

  /**
   * Load all open challenges and display in webview
   */
  public async viewOpenChallenges() {
    const token = this.context.globalState.get(constants.tokenStateKey);

    if (!token) {
      vscode.window.showErrorMessage(constants.notLoggedInMessage);
      return;
    }

    vscode.window.showInformationMessage(constants.loadingOpenChallengesMessage);

    let newToken;
    let response;
    let challenges;
    try {
      newToken = await AuthService.updateTokenGlobalState(this.context);
      response = await ChallengeService.getActiveChallenges(newToken);
      challenges = _.get(response, 'result.content', []);
    } catch (err) {
      vscode.window.showErrorMessage(err.message);
      return;
    }

    const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
    if (this.webviewPanel) {
      // If already have a webview panel, show it in the target column
      this.webviewPanel.reveal(columnToShowIn);
    } else {
      // Otherwise, create a new panel
      this.webviewPanel = vscode.window.createWebviewPanel(
        constants.scheme,
        constants.challengesPageTitle,
        columnToShowIn || vscode.ViewColumn.One,
        {}
      );
    }
    // set the html content to webview
    this.webviewPanel.webview.html = ChallengeService.generateHtmlFromChallenges(challenges);

    // Reset when the current panel is closed
    this.webviewPanel.onDidDispose(
      () => {
        this.webviewPanel = undefined;
      },
      null,
      this.context.subscriptions
    );
  }

  /**
   * Submit the current workspace to topcoder challenge
   */
  public async uploadSubmmission() {
    const token = this.context.globalState.get(constants.tokenStateKey);
    if (!token) {
      vscode.window.showErrorMessage(constants.notLoggedInMessage);
      return;
    }

    vscode.window.showInformationMessage(constants.submittingChallenges);

    try {
      const newToken = await AuthService.updateTokenGlobalState(this.context);
      const workspacePath = vscode.workspace.rootPath || '';
      const response = await ChallengeService.uploadSubmmission(newToken, workspacePath);
      console.log('Submit challenge response: ' + JSON.stringify(response));
    } catch (err) {
      console.log(`Error occur when submit challenge (${err.toString()})`);
      vscode.window.showErrorMessage(err.toString());
      return;
    }
    vscode.window.showInformationMessage(constants.challengeSubmittedMessage);
  }
}
