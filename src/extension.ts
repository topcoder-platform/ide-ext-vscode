import * as vscode from 'vscode';
import AuthController from './controllers/AuthController';
import ChallengeController from './controllers/ChallengeController';
import ChallengesTableProvider from './providers/ChallengesTableProvider';
import * as constants from './constants';
import logger from './common/logger';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
	logger.debug('[tcvscodeide] The extension is active.');

	const authController = new AuthController(context);
	const challengeController = new ChallengeController(context);
	const challengesTableProvider = new ChallengesTableProvider(context);

	context.subscriptions.push(
		vscode.workspace.registerTextDocumentContentProvider(constants.scheme, challengesTableProvider)
	);

	// Register commands
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'extension.login',
			authController.login.bind(authController)
		)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'extension.logout',
			authController.logout.bind(authController)
		)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'extension.viewOpenChallenges',
			challengeController.viewOpenChallenges.bind(challengeController)
		)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'extension.uploadSubmission',
			challengeController.uploadSubmission.bind(challengeController)
		)
	);
}

// This method is called when the extension is deactivated
export function deactivate() {}
