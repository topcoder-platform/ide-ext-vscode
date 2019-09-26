import * as vscode from 'vscode';
import * as _ from 'lodash';
import { IListItem } from './interfaces';
import ChallengeController from '../controllers/ChallengeController';

export class ActiveContestsProvider implements vscode.TreeDataProvider<IListItem> {

    /**
     * Register this provider with vscode and set it up
     * @param challengeController A ChallengeController instance
     */
    public static Register(challengeController: ChallengeController) {
        if (!this.provider) {
            this.provider = new ActiveContestsProvider(challengeController);
        }
        vscode.window.createTreeView('user-active-contests', {
            treeDataProvider: this.provider
        });
    }

    private static provider: ActiveContestsProvider;
    public readonly onDidChangeTreeData: vscode.Event<IListItem | undefined>;
    private onDidChangeTreeDataEmitter: vscode.EventEmitter<IListItem | undefined> =
        new vscode.EventEmitter<IListItem | undefined>();

    private constructor(private challengeController: ChallengeController) {
        this.onDidChangeTreeData = this.onDidChangeTreeDataEmitter.event;
        vscode.commands.registerCommand('activeContests.openSelectedChallenge', async (id) => {
            await this.challengeController.viewChallengeDetails(id, true); // errors are handled internally
        });
        vscode.commands.registerCommand('activeContests.reload', async () => {
            this.onDidChangeTreeDataEmitter.fire();
        });
    }

    /**
     * Returns a TreeItem for display from the given element
     * @param element The element in the tree that must be mapped into a TreeItem for display
     */
    public getTreeItem(element: IListItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return {
            label: element.name,
            id: element.id,
            description: element.description,
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
            return new Promise((resolve) => {
                this.challengeController.loadChallengesOfLoggedInUser().then((challenges) => {
                    if (!_.isEmpty(challenges)) {
                        resolve(_.map(challenges, (challenge) => ({ name: challenge.name, id: challenge.id })));
                    } else {
                        resolve([{ name: '', description: 'Successfully connected, but no items found', id: '' }]);
                    }

                }).catch((err) => {
                    resolve([{ name: '', id: '', description: err.message }]);
                });
            });
        }
        return []; // since we don't have nested elements
    }
}
