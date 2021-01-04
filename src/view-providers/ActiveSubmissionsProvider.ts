import * as vscode from 'vscode';
import { IListItem } from './interfaces';
import * as path from 'path';
import * as _ from 'lodash';
import ChallengeController from '../controllers/ChallengeController';
import VSCode from '../helpers/VSCode';

export class ActiveSubmissionsProvider implements vscode.TreeDataProvider<IListItem> {

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
            this.provider = new ActiveSubmissionsProvider(
                challengeController,
                context,
            );
        }
        vscode.window.createTreeView('user-active-submissions', {
            treeDataProvider: this.provider
        });
    }

    private static provider: ActiveSubmissionsProvider;
    public readonly onDidChangeTreeData: vscode.Event<IListItem | undefined>;
    private onDidChangeTreeDataEmitter: vscode.EventEmitter<IListItem | undefined> =
        new vscode.EventEmitter<IListItem | undefined>();
    private data: IListItem[] | null = null;
    private extensionPath: string;

    private constructor(
        private challengeController: ChallengeController,
        context: vscode.ExtensionContext,
    ) {
        this.onDidChangeTreeData = this.onDidChangeTreeDataEmitter.event;
        this.extensionPath = context.extensionPath;
        const vs = new VSCode(context);

        vs.registerCommand(
            'activeSubmissions.openChallengeWithActiveSubmission',
            async (id) => {
                await this.challengeController.loadUserSubmission(id); // errors are handled internally
            },
            undefined,
            (telemetry, challengeId) => ({ ...telemetry, challengeId }));

        vs.registerCommand(
            'activeSubmissions.reload',
            async () => {
                this.data = null;
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
            iconPath: {
                light: path.join(this.extensionPath, 'out/resources/icons/light', '02-icon-submission.svg'),
                dark: path.join(this.extensionPath, 'out/resources/icons/dark', '02-icon-submission.svg'),
            },
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
            if (this.data === null) {
              this.challengeController.loadActiveSubmissions().then((activeSubmissions) => {
                if (_.isEmpty(activeSubmissions)) {
                  this.data = [{ name: '', id: '', description: 'You have no active submissions' }];
                } else {
                  this.data = activeSubmissions;
                }
                this.onDidChangeTreeDataEmitter.fire();
              }).catch((err) => {
                this.data = [{name: '', id: '', description: err.message}];
                this.onDidChangeTreeDataEmitter.fire();
              });
              return this.data || [{name: '', id: '', description: 'Loading...' }];
            } else {
              return this.data;
            }
        }
        return []; // since we don't have nested elements
    }
}
