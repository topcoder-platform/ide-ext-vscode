import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';
import * as vscode from 'vscode';
import * as constants from '../constants';
import { IListItem } from './interfaces';
import Notification from '../helpers/Notification';
import AuthController from '../controllers/AuthController';
import ChallengeController from '../controllers/ChallengeController';
import VSCode from '../helpers/VSCode';
import AuthService from '../services/AuthService';
import TelemetryService from '../services/TelemetryService';

export class HomeViewProvider implements vscode.TreeDataProvider<IListItem> {

  /**
   * Register this provider with vscode
   * @param {AuthController} authController An instance of AuthController
   * @param {ChallengeController} challengeController An instance of ChallengeController
   * @param {vscode.ExtensionContext} context
   */
  public static Register(
    authController: AuthController,
    challengeController: ChallengeController,
    context: vscode.ExtensionContext,
  ) {
    if (!this.provider) {
      this.provider = new HomeViewProvider(
        authController,
        challengeController,
        context,
      );
    }

    const view = vscode.window.createTreeView('home', {
      treeDataProvider: this.provider
    });
    view.onDidChangeVisibility((event) => {
      if (event.visible) {
        TelemetryService.share({
          event: 'Opened the Topcoder View',
        });
      }
    });

    vscode.workspace.registerTextDocumentContentProvider(constants.scheme, {
      provideTextDocumentContent: (uri: vscode.Uri): string => {
        return fs.readFileSync(path.join(context.extensionPath, uri.path)).toString();
      }
    });
  }
  private static provider: HomeViewProvider;

  public readonly onDidChangeTreeData: vscode.Event<IListItem | undefined>;
  private readonly loginItem: IListItem = {
    name: 'Login',
    id: 'login',
    iconPath: '09-icon-login.svg'
  };
  private readonly logoutItem: IListItem = {
    name: 'Logout',
    id: 'logout',
    iconPath: '10-icon-logout.svg'
  };
  private readonly draftChallengeItem: IListItem = {
    name: 'Draft a Challenge',
    id: 'draft-challenge',
    iconPath: '01-icon-challenge.svg'
  };
  private readonly activeChallengesItem: IListItem = {
    name: 'Active Challenges',
    id: 'active-challenges',
    iconPath: '05-icon-challenge-list.svg'
  };
  private readonly reportProblem: IListItem = {
    name: 'Report a Problem',
    id: 'report-problem',
    iconPath: '07-icon-report-problem.svg'
  };
  private readonly configureSettings: IListItem = {
    name: 'Configure Settings',
    id: 'configure-settings',
    iconPath: '06-icon-configure-settings.svg'
  };

  private onDidChangeTreeDataEmitter: vscode.EventEmitter<IListItem | undefined> =
    new vscode.EventEmitter<IListItem | undefined>();
  private extensionPath: string;
  private context: vscode.ExtensionContext;

  private constructor(
    private authController: AuthController,
    private challengeController: ChallengeController,
    context: vscode.ExtensionContext,
  ) {
    this.context = context;
    this.extensionPath = context.extensionPath;
    this.onDidChangeTreeData = this.onDidChangeTreeDataEmitter.event;
    const vs = new VSCode(context);
    vs.registerCommand(
      'homeView.showHomeTreeItem',
      async (id) => {
        switch (id) {
          case this.activeChallengesItem.id: {
            await this.challengeController.viewOpenChallenges(); // errors are handled internally
          }                                  break;
          case this.loginItem.id: {
            await this.authController.login();
          }                       break;
          case this.logoutItem.id: {
            await this.authController.logout();
          }                        break;
          case this.draftChallengeItem.id: {
            await this.challengeController.draftChallenge();
          }                                break;
          case this.reportProblem.id: {
            await this.createGithubIssue();
          }                           break;
          case this.configureSettings.id: {
            await this.openSettings();
          }                               break;
        }
      },
      undefined,
      (telemetry, item) => ({ ...telemetry, item }),
    );

    vs.registerCommand(
      'homeView.refresh',
      async () => {
        this.onDidChangeTreeDataEmitter.fire();
      }
    );
  }

  /**
   * Returns a TreeItem for display from the given element
   * @param element The element in the tree that must be mapped into a TreeItem for display
   */
  public getTreeItem(element: IListItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    let iconPath: any = {
      dark: '',
      light: ''
    };
    if (element.iconPath) {
      if (element.iconPath instanceof vscode.ThemeIcon) {
        iconPath = element.iconPath;
      } else {
        iconPath.dark = path.join(this.extensionPath, 'out/resources/icons/dark', element.iconPath);
        iconPath.light = path.join(this.extensionPath, 'out/resources/icons/light', element.iconPath);
      }
    }
    return {
      label: element.name,
      id: element.id,
      iconPath,
      command: {
        command: 'homeView.showHomeTreeItem',
        arguments: [element.id],
        title: 'Home'
      }
    };
  }

  /**
   * Returns the child nodes to display for a given node
   * @param element the node whose children should be returned
   */
  public getChildren(element?: IListItem | undefined): vscode.ProviderResult<IListItem[]> {
    if (element === undefined) {
      return new Promise((resolve) => {
        AuthService.updateTokenGlobalState(this.context).then((token) => {
          resolve([
            this.activeChallengesItem,
            ...(AuthService.canCreateChallenge(token) ? [this.draftChallengeItem] : []),
            this.reportProblem,
            this.configureSettings,
            token ? this.logoutItem : this.loginItem
          ]);
        });
      });
    }
    return []; // since we don't have nested elements
  }

  /**
   * Opens prefilled Github issue in the user's browser
   */
  private async createGithubIssue() {
    const GITHUB = 'https://github.com/topcoder-platform/ide-ext-vscode/issues/new';
    const extension = vscode.extensions.getExtension('Topcoder.topcoder-workflow');
    const extensionVersion = extension && extension.packageJSON.version;
    const system = os.type() + ' ' + os.release();
    const uri = vscode.Uri.parse(GITHUB + '?body=**Extension Version:** ' + extensionVersion
    + '%0A**VSCode Version:** ' + vscode.version + '%0A**Operating System:** ' + system);
    await vscode.commands.executeCommand('vscode.open', uri);
  }

  /**
   * Opens extension settings
   */
  private async openSettings() {
    await vscode.commands.executeCommand('workbench.action.openSettings', 'Topcoder');
  }
}
