import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as constants from '../constants';

/**
 * Controller for handling challenge commands.
 */
export default class ChallengeController {
    constructor(private context: vscode.ExtensionContext) {}

    public async viewOpenChallenges() {
        const token = this.context.globalState.get(constants.tokenStateKey);

        if (!token) {
            vscode.window.showErrorMessage(constants.notLoggedInMessage);
            return;
        }

        vscode.window.showInformationMessage(constants.loadingOpenChallengesMessage);

        let uri = vscode.Uri.parse(`${constants.scheme}:viewOpenChallenges.md`);
        let doc = await vscode.workspace.openTextDocument(uri);

        await vscode.commands.executeCommand<vscode.Location[]>(
            'markdown.showPreview',
            uri,
        );
    }
}
