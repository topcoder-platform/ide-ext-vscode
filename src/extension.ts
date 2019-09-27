import * as vscode from 'vscode';

import createTcEnvironmentStatusBarItem from './status-bar/tc-environment';
import createTcTimeStatusBarItem from './status-bar/tc-time';
import createTcTimeToSubmit from './status-bar/tc-time-to-submit';

import AuthController from './controllers/AuthController';
import ChallengeController from './controllers/ChallengeController';
import * as constants from './constants';
import { ActiveSubmissionsProvider, ActiveContestsProvider, HomeViewProvider } from './view-providers';

import VSCode from './helpers/VSCode';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  const vs = new VSCode(context);

  console.log('[topcoder-workflow] The extension is active.');

  const authController = new AuthController(context);
  const challengeController = new ChallengeController(context);

  // Setup tree view providers
  ActiveContestsProvider.Register(challengeController, context);
  ActiveSubmissionsProvider.Register(challengeController, context);
  HomeViewProvider.Register(challengeController, context);

  // Register commands
  context.subscriptions.push(createTcEnvironmentStatusBarItem());
  context.subscriptions.push(createTcTimeStatusBarItem());
  context.subscriptions.push(createTcTimeToSubmit(context));

  vs.registerCommandAndSubscription(
    'extension.login',
    authController.login,
    authController,
  );
  vs.registerCommandAndSubscription(
    'extension.logout',
    authController.logout,
    authController,
  );
  vs.registerCommandAndSubscription(
    'extension.viewOpenChallenges',
    async () =>
      await loginThenAction(context, authController, challengeController.viewOpenChallenges.bind(challengeController))
  );
  vs.registerCommandAndSubscription(
    'extension.uploadSubmmission',
    async () =>
      await loginThenAction(context, authController, challengeController.uploadSubmmission.bind(challengeController))
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
