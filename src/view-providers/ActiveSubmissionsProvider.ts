import * as vscode from 'vscode';
import { IListItem } from './interfaces';
import * as _ from 'lodash';
import ChallengeController from '../controllers/ChallengeController';

export class ActiveSubmissionsProvider implements vscode.TreeDataProvider<IListItem> {

    /**
     * Register this provider with vscode and set it up
     * @param challengeController A ChallengeController instance
     */
    public static Register(challengeController: ChallengeController) {
        if (!this.provider) {
            this.provider = new ActiveSubmissionsProvider(challengeController);
        }
        vscode.window.createTreeView('user-active-submissions', {
            treeDataProvider: this.provider
        });
    }

    private static provider: ActiveSubmissionsProvider;
    public readonly onDidChangeTreeData: vscode.Event<IListItem | undefined>;
    private onDidChangeTreeDataEmitter: vscode.EventEmitter<IListItem | undefined> =
        new vscode.EventEmitter<IListItem | undefined>();
    private constructor(private challengeController: ChallengeController) {
        this.onDidChangeTreeData = this.onDidChangeTreeDataEmitter.event;

        vscode.commands.registerCommand('activeSubmissions.openChallengeWithActiveSubmission',
            async (id) => {
                await this.challengeController.loadUserSubmission(id); // errors are handled internally
            });

        vscode.commands.registerCommand('activeSubmissions.reload', async () => {
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
            command: element.id === '' ? undefined : {
                command: 'activeSubmissions.openChallengeWithActiveSubmission',
                arguments: [element.id],
                title: 'Open'
            }
        };
    }

    /**
     * Returns the child nodes to display for a given node
     * @param element the node whose children should be returned
     */
    public async getChildren(element?: IListItem | undefined): Promise<IListItem[]> {
        if (element === undefined) {
            const activeSubmissions = await this.challengeController.loadActiveSubmissions();
            if (_.isEmpty(activeSubmissions)) {
                return [{ name: '', description: 'You have no active submissions', id: '' }];
            }
            return activeSubmissions;
        }
        return []; // since we don't have nested elements
    }
}
