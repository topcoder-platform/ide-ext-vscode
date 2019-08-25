import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';
import * as constants from '../constants';
import { IListItem } from './interfaces';
import ChallengeController from '../controllers/ChallengeController';

export class HomeViewProvider implements vscode.TreeDataProvider<IListItem> {

    /**
     * Register this provider with vscode
     * @param challengeController An instance of ChallengeController
     * @param extensionPath The path at which this extension is loaded
     */
    public static Register(challengeController: ChallengeController, extensionPath: string) {
        if (!this.provider) {
            this.provider = new HomeViewProvider(challengeController, extensionPath);
        }

        vscode.window.createTreeView('home', {
            treeDataProvider: this.provider
        });

        vscode.workspace.registerTextDocumentContentProvider(constants.scheme, {
            provideTextDocumentContent: (uri: vscode.Uri): string => {
                return fs.readFileSync(path.join(extensionPath, uri.path)).toString();
            }
        });
    }

    private static provider: HomeViewProvider;
    private readonly featuresItem: IListItem = {
        name: 'Extension Features',
        id: 'extension-features',
        iconPath: vscode.ThemeIcon.File
    };
    private readonly setupItem: IListItem = {
        name: 'Getting Started',
        id: 'getting-started',
        iconPath: vscode.ThemeIcon.File
    };
    private readonly activeChallengesItem: IListItem = {
        name: 'Active Challenges',
        id: 'active-challenges'
    };

    private constructor(private challengeController: ChallengeController, private extensionPath: string) {

        vscode.commands.registerCommand('homeView.showHomeTreeItem', async (id) => {
            switch (id) {
                case this.featuresItem.id: {
                    await this.showMarkdownFile('out/resources/documents/Extension Features.md');
                }                          break;
                case this.setupItem.id: {
                    await this.showMarkdownFile('out/resources/documents/Getting Started.md');
                }                       break;
                case this.activeChallengesItem.id: {
                    await this.challengeController.viewOpenChallenges(); // errors are handled internally
                }                                  break;
            }
        });
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
            return [
                this.featuresItem,
                this.setupItem,
                this.activeChallengesItem
            ];
        }
        return []; // since we don't have nested elements
    }

    /**
     * Display the indicated file using the VSCode markdown preview
     * @param filePath The markdown file path
     */
    private async showMarkdownFile(filePath: string) {
        try {
            const uri = vscode.Uri.parse(`${constants.scheme}:${filePath}`);
            await vscode.workspace.openTextDocument(uri);
            await vscode.commands.executeCommand<vscode.Location[]>(
                'markdown.showPreview',
                uri,
            );
        } catch (err) {
            vscode.window.showErrorMessage(constants.helpFilesLoadFailed);
        }
    }
}
