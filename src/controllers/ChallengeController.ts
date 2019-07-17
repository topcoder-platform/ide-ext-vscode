import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as constants from '../constants';
import ChallengeService from '../services/ChallengeService';
import AuthService from '../services/AuthService';

/**
 * Controller for handling challenge commands.
 */
export default class ChallengeController {
  private challengeListingsWebviewPanel: vscode.WebviewPanel | undefined = undefined;
  private challengeDetailsWebviewPanel: vscode.WebviewPanel | undefined = undefined;

  constructor(private context: vscode.ExtensionContext) { }

  /**
   * Load all open challenges and display in webview
   */
  public async viewOpenChallenges() {
    if (!this.isUserLoggedIn()) {
      vscode.window.showErrorMessage(constants.notLoggedInMessage);
      return;
    }
    // get challenges list from server
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
    // ensure webview is available, then set content into it
    this.makeChallengeListingsWebViewAvailable();
    this.setChallengeListingsContent(challenges);
    vscode.window.showInformationMessage(constants.openChallengesLoadedMessage);
  }

  /**
   * Submit the current workspace to topcoder challenge
   */
  public async uploadSubmmission() {
    if (!this.isUserLoggedIn()) {
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

  /**
   * Check if user has logged in.
   */
  private isUserLoggedIn(): boolean {
    const token = this.context.globalState.get(constants.tokenStateKey);
    return !!token;
  }

  /**
   * Load challenge details for the given challenge id.
   * @param challengeId The challenge Id
   */
  private async viewChallengeDetails(challengeId: string) {
    if (!this.isUserLoggedIn()) {
      vscode.window.showErrorMessage(constants.notLoggedInMessage);
      return;
    }

    // get challenge details
    vscode.window.showInformationMessage(constants.loadingChallengeDetails);
    let challengeDetails;
    try {
      const token = await AuthService.updateTokenGlobalState(this.context);
      const apiResponse = await ChallengeService.getChallengeDetails(challengeId, token);
      challengeDetails = _.get(apiResponse, 'result.content', {});
    } catch (err) {
      console.log(`Error occur when loading challenge details (${err.toString()})`);
      vscode.window.showErrorMessage(err.toString());
      return;
    }
    // ensure webview is available and then set content
    this.makeChallengeDetailsWebViewAvailable();
    this.setChallengeDetailsWebViewContent(challengeDetails);
    vscode.window.showInformationMessage(constants.challengeDetailsLoadedMessage);
  }

  /**
   * Returns a new webview panel.
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
        enableScripts: allowScripts
      }
    );
    return webviewPanel;
  }

  /**
   * Handle messages from the challenges page.
   * @param message The message from the webview of the format {action, data}
   */
  private handleMessagesFromChallengeListingsWebView = async (message: any) => {
    switch (message.action) {
      case constants.webviewMessageActions.DISPLAY_CHALLENGE_DETAILS: {
        await this.viewChallengeDetails(message.data.challengeId);
      }                                                               break;
    }
  }

  /**
   * Ensure that a valid and undisposed webview is available to load challenge listings
   */
  private makeChallengeListingsWebViewAvailable() {
    const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
    if (this.challengeListingsWebviewPanel) {
      this.challengeListingsWebviewPanel.reveal(columnToShowIn);
    } else {
      this.challengeListingsWebviewPanel = this.getNewWebViewPanel(constants.challengesPageTitle, true);
      // handle dispose of webview
      this.challengeListingsWebviewPanel.onDidDispose(
        () => {
          this.challengeListingsWebviewPanel = undefined;
        },
        null,
        this.context.subscriptions
      );

      // listen for messages from webview
      this.challengeListingsWebviewPanel.webview.onDidReceiveMessage(
        this.handleMessagesFromChallengeListingsWebView,
        undefined,
        this.context.subscriptions
      );
    }
  }

  /**
   * Make sure that a valid and undisposed webview is available to show challenge details
   */
  private makeChallengeDetailsWebViewAvailable() {
    const columnToShowIn = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;
    if (this.challengeDetailsWebviewPanel) {
      this.challengeDetailsWebviewPanel.reveal(columnToShowIn);
    } else {
      this.challengeDetailsWebviewPanel = this.getNewWebViewPanel(constants.challengeDetailsPageTitle);
      // handle webview dispose
      this.challengeDetailsWebviewPanel.onDidDispose(
        () => {
          this.challengeDetailsWebviewPanel = undefined;
        },
        null,
        this.context.subscriptions
      );
    }
  }

  /**
   * Set the content of the webview using the available challenges information
   * @param challenges The challenges collection
   */
  private setChallengeListingsContent(challenges: any) {
    if (this.challengeListingsWebviewPanel) {
      this.challengeListingsWebviewPanel.webview.html = ChallengeService.generateHtmlFromChallenges(challenges);
    }
  }

  /**
   * Set the content of the webview using the available details of a challenge
   * @param challengeDetails The details of a challenge
   */
  private setChallengeDetailsWebViewContent(challengeDetails: any) {
    if (this.challengeDetailsWebviewPanel && challengeDetails) {
      this.challengeDetailsWebviewPanel
        .webview.html = ChallengeService.generateHtmlFromChallengeDetails(challengeDetails);
    }
  }
}
