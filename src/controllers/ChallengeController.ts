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
import TelemetryService from '../services/TelemetryService';
import { getEnv } from '../config';
import { Marked } from '@ts-stack/markdown';

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
        const reviewTypes = sub.review.map(async (r: any) => {
          let res;
          try {
            res = await ChallengeService.getReviewType(r.typeId, token);
          } catch (err) {
            Notification.showErrorNotification(constants.loadReviewTypeInfoError);
          }
          return { score: r.score, created: new Date(r.created).toUTCString(), review: res.name || '' };
        });
        return {
          artifacts,
          id: sub.id,
          rev: await Promise.all(reviewTypes)
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
    TelemetryService.share({
      event: 'Opening Challenge Details',
      challengeId,
    }, AuthService.getSavedToken(this.context));

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

    challengeDetails.detailedRequirements = Marked.parse(challengeDetails.detailedRequirements);

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

  public async cloneGitUrl() {
    try {
      const workspacePath = path.join(vscode.workspace.rootPath || '');
      const gitUrl = await vscode.window.showInputBox(
        {
          placeHolder: 'Set git url',
        }
      ) || '';

      if (!gitUrl.includes('https://github.com/') && !gitUrl.includes('https://gitlab.com/')) {
        Notification.showErrorNotification(constants.onlyRepositoryAccepted);
        return;
      }

      Notification.showInfoNotification(constants.cloningRepositoryStarted);

      TelemetryService.share({
        event: 'Clonning own git repository',
        repoUrl: gitUrl,
      }, AuthService.getSavedToken(this.context));

      git.plugins.set('fs', fs);
      // clone it to root
      await git.clone({
        dir: workspacePath,
        url: gitUrl as string,
        singleBranch: true,
      });
      // removing the git folder, since no need to get attached to that repository
      fs.removeSync(path.join(workspacePath, '.git'));

      Notification.showInfoNotification(constants.cloningRepositorySuccess);
    } catch (err) {
      Notification.showErrorNotification(constants.cloningRepositoryFailed);
    }

  }
  /**
   * Clone a repository/template available in organization
   */
  public async cloneTemplate() {
    Notification.showInfoNotification(constants.loadOrganizationReposStarted);
    // error is handled in service
    const result = await ChallengeService.getOrganizationRepositories();
    Notification.showInfoNotification(constants.loadOrganizationReposSuccess);
    const choice = await vscode.window.showQuickPick(
      result.map((r: any) => r.name),
      {
        canPickMany: false,
        placeHolder: 'Choose a template'
      }
    );
    if (!choice) {
      Notification.showInfoNotification(constants.templateNotCloned);
      return;
    }
    // get selected repository
    const repo = result.find((t: any) => t.name === choice);
    const workspacePath = path.join(vscode.workspace.rootPath || '', choice as string);
    Notification.showInfoNotification(constants.cloneTemplateStarted);

    TelemetryService.share({
      event: 'Clonning template repository',
      repoUrl: repo.clone_url,
      repoName: repo.name
    }, AuthService.getSavedToken(this.context));
    // start clone
    try {
      git.plugins.set('fs', fs);
      await git.clone({
        dir: workspacePath,
        url: repo.clone_url,
        singleBranch: true,
      });
      // removing the git folder, since no need to get attached to that repository
      fs.removeSync(path.join(workspacePath, '.git'));
      Notification.showInfoNotification(constants.cloneTemplateSuccess);
    } catch (err) {
      Notification.showErrorNotification(constants.cloneTemplateFailed);
    }
  }

  /**
   * Check if user has logged in.
   */
  private isUserLoggedIn(): boolean {
    return !!AuthService.getSavedToken(this.context);
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
      case constants.webviewMessageActions.CLONE_REPOSITORY: {
        await this.cloneRepositories(message.data.challengeId, message.data.repos);
        break;
      }
      case constants.webviewMessageActions.DOWNLOAD_ARTIFACT: {
        const { submissionId, artifactId } = message.data;
        await this.downloadArtifact(submissionId, artifactId);
        break;
      }
      case constants.webviewMessageActions.NAVIGATE_TO_CHALLENGE: {
        const { challengeId } = message.data;
        await this.navigateToChallenge(challengeId);
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
   * Clones challenge repositories
   * @param challengeId challenge identifier
   * @param repos list of git repositories
   *
   */
  private async cloneRepositories(challengeId: string, repos: string[]) {

    TelemetryService.share({
      event: 'Clonning challenge repositories',
      challengeId,
    }, AuthService.getSavedToken(this.context));
    try {
      const workspacePath = path.join(vscode.workspace.rootPath || '');
      git.plugins.set('fs', fs);
      Notification.showInfoNotification(constants.cloningChallengeRepositoriesStarted);
      repos.forEach(async (repo: string) => {
        // let's get the repo name by getting the last part of the url
        const temp = repo.split('/');
        const repoPath = path.join(workspacePath, temp[temp.length - 1]);
        // clone it to root
        await git.clone({
          dir: repoPath,
          url: repo,
          singleBranch: true,
        });
        // removing the git folder, since no need to get attached to that repository
        fs.removeSync(path.join(workspacePath, '.git'));

      });
      Notification.showInfoNotification(constants.cloningChallengeRepositoriesSuccess);
      // initialize the workspace with the challenge id
      await this.initializeWorkspaceForChallenge(challengeId);
    } catch (err) {
      Notification.showErrorNotification(constants.cloningChallengeRepositoriesFailed);
    }
  }

  /**
   * Opens the challenge page in the user's browser
   * @param challengeId challenge identifier
   *
   */
  private async navigateToChallenge(challengeId: string) {
    const uri = vscode.Uri.parse(getEnv().URLS.TOPCODER + '/challenges/' + challengeId);
    await vscode.commands.executeCommand('vscode.open', uri);
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
    TelemetryService.share({
      event: 'Challenge Registration Started',
      challengeId,
    }, AuthService.getSavedToken(this.context));
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
    TelemetryService.share({
      event: 'Workspace Initialization',
      challengeId,
    }, AuthService.getSavedToken(this.context));
    Notification.showInfoNotification(constants.initializingWorkspaceMessage);
    try {
      await ChallengeService.initializeWorkspace(vscode.workspace.rootPath || '', challengeId);
      Notification.showInfoNotification(constants.workspaceInitializationSuccessMessage);
    } catch (err) {
      Notification.showErrorNotification(constants.workspaceInitializationFailedMessage);
    }
  }
}
