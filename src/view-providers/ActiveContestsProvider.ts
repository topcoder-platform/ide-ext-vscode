import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as path from 'path';
import { IListItem } from './interfaces';
import ChallengeController from '../controllers/ChallengeController';
import VSCode from '../helpers/VSCode';

export class ActiveContestsProvider implements vscode.TreeDataProvider<IListItem> {

    /**
     * Register this provider with vscode and set it up
     * @param {ChallengeController} challengeController A ChallengeController instance
     * @param {vscode.ExtensionContext} context
     */
    public static Register(
        challengeController: ChallengeController,
        context: vscode.ExtensionContext,
    ) {
        if (!this.provider) {
            this.provider = new ActiveContestsProvider(
                challengeController,
                context,
            );
        }
        vscode.window.createTreeView('user-active-contests', {
            treeDataProvider: this.provider
        });
    }

    private static provider: ActiveContestsProvider;
    public readonly onDidChangeTreeData: vscode.Event<IListItem | undefined>;
    private onDidChangeTreeDataEmitter: vscode.EventEmitter<IListItem | undefined> =
      new vscode.EventEmitter<IListItem | undefined>();
    private data: IListItem[] | null = null;
    private extensionPath: string;
    private constructor(
        private challengeController: ChallengeController,
        context: vscode.ExtensionContext,
    ) {
        this.extensionPath = context.extensionPath;
        const vs = new VSCode(context);
        this.onDidChangeTreeData = this.onDidChangeTreeDataEmitter.event;
        vs.registerCommand(
            'activeContests.openSelectedChallenge',
            async (id) => {
                await this.challengeController.viewChallengeDetails(id); // errors are handled internally
            },
            undefined,
            (telemetry, challengeId) => ({ ...telemetry, challengeId }),
        );
        vs.registerCommand(
            'activeContests.reload',
            async () => {
                this.data = null;
                this.onDidChangeTreeDataEmitter.fire();
            }
        );
    }

    /**
     * Returns a TreeItem for display from the given element
     * @param element The element in the tree that must be mapped into a TreeItem for display
     */
    public getTreeItem(element: IListItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return undefined ? {label: 'Loading' } : {
            label: element.name,
            id: element.id,
            description: element.description,
            iconPath: {
                light: path.join(this.extensionPath, 'out/resources/icons/light', '01-icon-challenge.svg'),
                dark: path.join(this.extensionPath, 'out/resources/icons/dark', '01-icon-challenge.svg'),
            },
            command: element.id === '' ? void 0 : {
                command: 'activeContests.openSelectedChallenge',
                arguments: [element.id],
                title: 'Open'
            }
        };
    }

    /**
     * Returns the child nodes to display for a given node
     * @param element the node whose children should be returned
     */
    public getChildren(element?: IListItem | undefined): vscode.ProviderResult<IListItem[]> {
      if (element === undefined) {
        if (this.data === null) {
          this.challengeController.loadChallengesOfLoggedInUser().then((challenges) => {
            if (!_.isEmpty(challenges)) {
              this.data = _.map(challenges, (challenge) => ({ name: challenge.name, id: challenge.id }));
            } else {
              this.data = [{ name: '', id: '', description: 'Successfully connected, but no items found' }];
            }
            this.onDidChangeTreeDataEmitter.fire();
          }).catch((err) => {
            this.data = [{ name: '', id: '', description: err.message }];
            this.onDidChangeTreeDataEmitter.fire();
          });
          return this.data || [{name: '', id: '', description: 'Loading...'}];
        } else {
          return this.data;
        }
      }
      return []; // since we don't have nested elements
    }
}
