import * as vscode from 'vscode';
import { IListItem } from './interfaces';

export class ActiveSubmissionsProvider implements vscode.TreeDataProvider<IListItem> {

    /**
     * Register this provider with vscode
     */
    public static Register() {
        if (!this.provider) {
            this.provider = new ActiveSubmissionsProvider();
        }
        vscode.window.createTreeView('user-active-submissions', {
            treeDataProvider: this.provider
        });
    }

    private static provider: ActiveSubmissionsProvider;
    private constructor() {

    }

    /**
     * Returns a TreeItem for display from the given element
     * @param element The element in the tree that must be mapped into a TreeItem for display
     */
    public getTreeItem(element: IListItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return {
            label: element.name
        };
    }

    /**
     * Returns the child nodes to display for a given node
     * @param element the node whose children should be returned
     */
    public getChildren(element?: IListItem | undefined): vscode.ProviderResult<IListItem[]> {
        return null;
    }
}
