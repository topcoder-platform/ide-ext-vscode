import * as vscode from 'vscode';
export interface IListItem {
    name: string;
    id: string;
    iconPath?: string | vscode.ThemeIcon;
    description?: string;
}
