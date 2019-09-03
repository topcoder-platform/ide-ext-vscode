import * as vscode from 'vscode';
import AuthController from './controllers/AuthController';
import ChallengeController from './controllers/ChallengeController';
import * as constants from './constants';
import { ActiveSubmissionsProvider, ActiveContestsProvider, HomeViewProvider } from './view-providers';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  console.log('[tcvscodeide] The extension is active.');

  const authController = new AuthController(context);
  const challengeController = new ChallengeController(context);

  // Setup tree view providers
  ActiveContestsProvider.Register(challengeController);
  ActiveSubmissionsProvider.Register(challengeController);
  HomeViewProvider.Register(challengeController, context.extensionPath);

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
      async () =>
        await loginThenAction(context, authController, challengeController.viewOpenChallenges.bind(challengeController))
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'extension.uploadSubmmission',
      async () =>
        await loginThenAction(context, authController, challengeController.uploadSubmmission.bind(challengeController))
    )
  );
}

// This method is called when the extension is deactivated
/* tslint:disable-next-line */
export function deactivate() { }

/**
 * Login first then take action
 * @param context the extension context
 * @param authController the auth controller
 * @param action the action to take
 */
async function loginThenAction(
  context: vscode.ExtensionContext,
  authController: AuthController,
  action: () => Promise<void>
) {
  let token = context.globalState.get(constants.tokenStateKey);
  if (!token) {
    await authController.login();
  }
  token = context.globalState.get(constants.tokenStateKey);
  if (token) {
    await action();
  }
}
