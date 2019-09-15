import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as constants from '../constants';
import * as fs from 'fs-extra';
import * as path from 'path';
import HtmlHelper from '../helpers/Html';
import ChallengeService from '../services/ChallengeService';
import AuthService from '../services/AuthService';
import Notification from '../helpers/Notification';
import * as git from 'isomorphic-git';

/**
 * Controller for handling challenge commands.
 */
export default class ChallengeController {

  private challengeListingsWebviewPanel: vscode.WebviewPanel | undefined = undefined;
  private challengeDetailsWebviewPanel: vscode.WebviewPanel | undefined = undefined;
  private challengeSubmissionWebviewPanel: vscode.WebviewPanel | undefined = undefined;

  constructor(private context: vscode.ExtensionContext) { }

  /**
   * Load all open challenges and display in webview
   */
  public async viewOpenChallenges() {
    if (!this.isUserLoggedIn()) {
      Notification.showErrorNotification(constants.notLoggedInMessage);
      return;
    }
    // get challenges list from server
    Notification.showInfoNotification(constants.loadingOpenChallengesMessage);
    let newToken;
    let response;
    let challenges;
    try { // handle errors while retrieving information from the server
      newToken = await AuthService.updateTokenGlobalState(this.context);
      response = await ChallengeService.getActiveChallenges(newToken);
      challenges = _.get(response, 'result.content', []);
    } catch (err) {
      Notification.showErrorNotification(err.message);
      return;
    }

    try {// handle any other errors while generating the html or preparing the webview
      // ensure webview is available, then set content into it
      this.challengeListingsWebviewPanel = this.makeWebViewAvailable(constants.challengesPageTitle);
      // Set the content of the webview using the available challenges information
      this.setWebviewContent(this.challengeListingsWebviewPanel,
        HtmlHelper.generateHtmlFromChallenges(challenges));
      Notification.showInfoNotification(constants.openChallengesLoadedMessage);
    } catch (err) {
      Notification.showErrorNotification(constants.loadOpenChallengesFailedMessage);
    }
  }

  /**
   * Submit the current workspace to topcoder challenge
   */
  public async uploadSubmmission() {
    if (!this.isUserLoggedIn()) {
      Notification.showErrorNotification(constants.notLoggedInMessage);
      return;
    }
    Notification.showInfoNotification(constants.submittingChallenges);

    try {
      const newToken = await AuthService.updateTokenGlobalState(this.context);
      const workspacePath = vscode.workspace.rootPath || '';
      const response = await ChallengeService.uploadSubmmission(newToken, workspacePath);
      console.log('Submit challenge response: ' + JSON.stringify(response));
    } catch (err) {
      console.log(`Error occur when submit challenge (${err.toString()})`);
      Notification.showErrorNotification(err.toString());
      return;
    }
    Notification.showInfoNotification(constants.challengeSubmittedMessage);
  }

  /**
   * Loads the active challenges of the currently logged in user.
   */
  public async loadChallengesOfLoggedInUser() {// errors are handled by the caller
    const token = await AuthService.updateTokenGlobalState(this.context);
    return await ChallengeService.getActiveChallengesOfUser(token);
  }

  /**
   * Loads the active submissions of the currently logged in user.
   */
  public async loadActiveSubmissions() {
    const challenges = await this.loadChallengesOfLoggedInUser();
    return challenges.filter((t: any) => t.userDetails.hasUserSubmittedForReview)
      .map((ch: any) => ({ id: ch.id, name: ch.name }));
  }

  /**
   * Load user submission details - Reviews (with score and creation date)
   * and a list of artifacts (if exists)
   * @param challengeId challenge identifier
   */
  public async loadUserSubmission(challengeId: string) {
    let reviews;
    try {
      Notification.showInfoNotification(constants.loadSubmissionStarted);
      const token = await AuthService.updateTokenGlobalState(this.context);
      const result = await ChallengeService.getSubmissionDetails(challengeId, token);
      // need to get all artifacts for each review in a submission.
      reviews = await Promise.all(result.map(async (sub: any) => {
        const artifactsResult = await ChallengeService.getSubmissionArtifacts(sub.id, token);
        const artifacts = _.get(artifactsResult, 'artifacts', []);
        return {
          artifacts,
          id: sub.id,
          rev: sub.review.map((r: any) =>
            ({ score: r.score, created: new Date(r.created).toUTCString() }))
        };
      }));
    } catch (err) {
      Notification.showErrorNotification(constants.loadSubmissionFailed);
    }

    try { // handle any other errors while generating the html
      // ensure webview is available and then set content
      this.challengeSubmissionWebviewPanel = this.makeWebViewAvailable(constants.submissionDetailsPageTitle);

      // Set the content of the webview using the available submssion information
      this.setWebviewContent(this.challengeSubmissionWebviewPanel,
        HtmlHelper.generateReviewArtifactsHtml(reviews));

      Notification.showInfoNotification(constants.loadSubmissionSuccess);
    } catch (err) {
      Notification.showErrorNotification(constants.loadSubmissionFailed);
    }
  }

  /**
   * Load challenge details for the given challenge id.
   * @param challengeId The challenge Id
   */
  public async viewChallengeDetails(challengeId: string) {
    if (!this.isUserLoggedIn()) {
      Notification.showErrorNotification(constants.notLoggedInMessage);
      return;
    }

    // get challenge details
    Notification.showInfoNotification(constants.loadingChallengeDetails);
    let challengeDetails;
    let token;
    try { // handle errors while retreiving information from the server
      token = await AuthService.updateTokenGlobalState(this.context);
      const apiResponse = await ChallengeService.getChallengeDetails(challengeId, token);
      challengeDetails = _.get(apiResponse, 'result.content', {});
    } catch (err) {
      console.log(`Error occur when loading challenge details (${err.toString()})`);
      Notification.showErrorNotification(err.toString());
      return;
    }

    try { // handle any other errors while generating the html
      // ensure webview is available and then set content
      this.challengeDetailsWebviewPanel = this.makeWebViewAvailable(constants.challengeDetailsPageTitle);

      // Set the content of the webview using the available details of a challenge
      this.setWebviewContent(this.challengeDetailsWebviewPanel,
        HtmlHelper.generateHtmlFromChallengeDetails(challengeDetails, token));

      Notification.showInfoNotification(constants.challengeDetailsLoadedMessage);
    } catch (err) {
      Notification.showErrorNotification(constants.challengeDetailsLoadFailedMessage);
    }
  }

  /**
   * Check if user has logged in.
   */
  private isUserLoggedIn(): boolean {
    const token = this.context.globalState.get(constants.tokenStateKey);
    return !!token;
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
  private handleMessagesFromWebView = async (message: any) => {
    switch (message.action) {
      case constants.webviewMessageActions.DISPLAY_CHALLENGE_DETAILS: {
        await this.viewChallengeDetails(message.data.challengeId);
        break;
      }
      case constants.webviewMessageActions.REGISTER_FOR_CHALLENGE: {
        await this.registerUserForChallenge(message.data.challengeId);
        break;
      }
      case constants.webviewMessageActions.INITIALIZE_WORKSPACE: {
        await this.initializeWorkspaceForChallenge(message.data.challengeId);
        break;
      }
      case constants.webviewMessageActions.CLONE_STARTER_PACK: {
        await this.showCloneStarterPack(message.data.filter, message.data.challengeId);
        break;
      }
      case constants.webviewMessageActions.DOWNLOAD_ARTIFACT: {
        const { submissionId, artifactId } = message.data;
        await this.downloadArtifact(submissionId, artifactId);
        break;
      }
    }
  }

  /**
   * Allows the logged in user to download an artifact of a specific submission
   * @param submissionId submission identifier
   * @param artifactId artifact identifier
   */
  private async downloadArtifact(submissionId: string, artifactId: string) {
    Notification.showInfoNotification(constants.artifactDownloadStart);
    try {
      const userToken = await AuthService.updateTokenGlobalState(this.context);

      const data = await ChallengeService.downloadArtifact(submissionId, artifactId, userToken);

      // file is saved at root path
      data.pipe(fs.createWriteStream(path.join(vscode.workspace.rootPath || '', this.getFilenameFromRequest(data))));
      Notification.showInfoNotification(constants.artifactDownloadSuccess);

    } catch (err) {
      Notification.showInfoNotification(constants.artifactDownloadFailed);
    }
  }
  /**
   * Gets a filename from a stream response
   * @param data response from an axios call for a response type of "stream"
   */
  private getFilenameFromRequest(data: any) {
    const headerLine = data.headers['content-disposition'];
    const startFileNameIndex = headerLine.indexOf('"') + 1;
    const endFileNameIndex = headerLine.lastIndexOf('"');
    return headerLine.substring(startFileNameIndex, endFileNameIndex);
  }

  /**
   * Show starter packs. This way a user can pick one, and clone a starter pack project
   * @param filteredTechs object containing the techs that exist in the challenge
   */
  private async showCloneStarterPack(filteredTechs: any, challengeId: string) {
    // get all the repos that exist in configuration
    const workspacePath = path.join(vscode.workspace.rootPath || '');
    const repos = _.flatten(filteredTechs.map((f: any) => f.repos.map((repo: any) => repo)));
    const choice = await vscode.window.showQuickPick(
      repos.map((r: any) => r.title),
      {
        canPickMany: false,
        placeHolder: 'Choose a starter pack'
      }
    );
    // if the user don't make a selection, warn him that nothing was downloaded.
    if (!choice) {
      Notification.showWarningNotification(constants.noStarterPackDownloaded);
      return;
    }
    // get the url for the selected repo
    const selection = repos.find((t: any) => t.title === choice) as any;
    try {
      // ensure that folder is empty and let the user decide if wants to clear or not the folder
      if (fs.readdirSync(workspacePath).length > 0) {
        const isEmptyChoice = await vscode.window.showQuickPick(
          ['Yes', 'No'],
          {
            canPickMany: false,
            placeHolder: 'Folder is not empty. If you continue, all files will be delete. Are you sure?'
          }
        );
        // in case user don't want to clear folder
        if (isEmptyChoice !== 'Yes') {
          Notification.showWarningNotification(constants.noStarterPackDownloaded);
          return;
        }
      }
      // delete all files
      fs.emptyDirSync(workspacePath);
      Notification.showInfoNotification(constants.cloningStarterPackStarted);

      git.plugins.set('fs', fs);
      // clone it to root
      await git.clone({
        dir: workspacePath,
        url: selection.url,
        singleBranch: true,
      });
      // removing the git folder, since no need to get attached to that repository
      fs.removeSync(path.join(workspacePath, '.git'));

      // initialize the workspace with the challenge id
      await this.initializeWorkspaceForChallenge(challengeId);
      Notification.showInfoNotification(constants.cloningStarterPackSuccess);
    } catch (err) {
      Notification.showErrorNotification(constants.errorCloningStarterPack);
    }
  }

  /**
   * Ensure that a valid and undisposed webview is available to load
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
        () => {
          webviewPanel = undefined;
        },
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

  /**
   * Attempt to register the person to the challenge selected
   * @param challengeId The challenge id to register to
   */
  private async registerUserForChallenge(challengeId: string) {
    Notification.showInfoNotification(constants.registeringMessage);
    try {
      const userToken = await AuthService.updateTokenGlobalState(this.context);
      const { data } = await ChallengeService.registerUserForChallenge(challengeId, userToken);
      const status = _.get(data, 'result.status', 500);
      if (status === 200) {
        Notification.showInfoNotification(constants.registeredSuccessfullyMessage);
        if (this.challengeDetailsWebviewPanel !== undefined) {
          this.challengeDetailsWebviewPanel.webview.postMessage(
            {
              command: constants.webviewMessageActions.REGISTERED_FOR_CHALLENGE
            }
          );
        }
      } else {
        Notification.showErrorNotification(_.get(data, 'result.content', constants.registrationFailedMessage));
      }
    } catch (err) {
      Notification.showErrorNotification(err.toString());
    }
  }

  /**
   * Initialize the current workspace for the registered challenge
   * @param challengeId The challenge id to initiazlie with
   */
  private async initializeWorkspaceForChallenge(challengeId: string) {
    Notification.showInfoNotification(constants.initializingWorkspaceMessage);
    try {
      await ChallengeService.initializeWorkspace(vscode.workspace.rootPath || '', challengeId);
      Notification.showInfoNotification(constants.workspaceInitializationSuccessMessage);
    } catch (err) {
      Notification.showErrorNotification(constants.workspaceInitializationFailedMessage);
    }
  }
}
