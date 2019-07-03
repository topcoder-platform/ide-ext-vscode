import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as path from 'path';
import * as uuid from 'uuid/v4';
import * as constants from '../constants';
import AuthService from '../services/AuthService';
import ChallengeService from '../services/ChallengeService';
import WorkspaceService from '../services/WorkspaceService';
import logger from '../common/logger';

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

        let uri = vscode.Uri.parse(`${constants.scheme}:Topcoder Open challenges`);
        let doc = await vscode.workspace.openTextDocument(uri);

        await vscode.commands.executeCommand<vscode.Location[]>(
            'markdown.showPreview',
            uri,
        );
    }

    public async uploadSubmission() {
        if (vscode.workspace.workspaceFolders) {
            vscode.window.showInformationMessage(constants.uploadingSubmissionMessage);

            const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;

            let token = '';

            try {
                token = await AuthService.updateTokenGlobalState(this.context);
            } catch (err) {
                const message = _.get(err, 'response.body.error_description');

                if (message) {
                    vscode.window.showErrorMessage(`${_.get(err, 'statusCode')} - ${message}`);
                } else {
                    vscode.window.showErrorMessage(err.message);
                }
                logger.error(err);
                return;
            }

            if (!WorkspaceService.checkWorkspaceConfigFile(workspaceFolder)) {
                vscode.window.showErrorMessage(constants.workspaceConfigFileNotFoundMessage);
                return;
            }

            let workspaceConfig;

            try {
                workspaceConfig = WorkspaceService.parseWorkspaceConfigFile(workspaceFolder);
            } catch (err) {
                logger.error(err);
                vscode.window.showErrorMessage(constants.workspaceConfigFileParseErrorMessage);
                return;
            }

            const { challengeId } = workspaceConfig;

            if (!_.isString(challengeId) && !_.isNumber(challengeId)) {
                vscode.window.showErrorMessage(constants.invalidChallengeIdErrorMessage);
                return;
            }

            const archivePath = path.resolve(workspaceFolder, `${uuid()}.zip`);

            try {
                await WorkspaceService.archiveWorkspace(archivePath, workspaceFolder);
            } catch (err) {
                vscode.window.showErrorMessage(constants.archiveWorkspaceError);
                logger.error(err);
                await WorkspaceService.cleanArchive(archivePath);
                return;
            }

            try {
                const data = await ChallengeService.uploadSubmission(challengeId, token, archivePath);
                vscode.window.showInformationMessage(constants.uploadSuccessMessage);
                logger.debug('createSubmission response: %j', data);
                logger.debug('Finished uploading the file');
            } catch (err) {
                const message = _.get(err, 'response.data.message');

                if (message) {
                    vscode.window.showErrorMessage(`${_.get(err, 'response.status')} - ${message}`);
                } else {
                    vscode.window.showErrorMessage(err.message);
                }

                logger.error(err);
            } finally {
                await WorkspaceService.cleanArchive(archivePath);
            }
        } else {
            vscode.window.showErrorMessage(constants.invalidWorkspaceErrorMessage);
        }
    }
}
