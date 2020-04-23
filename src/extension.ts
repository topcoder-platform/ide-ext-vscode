import * as vscode from 'vscode';

import createTcEnvironmentStatusBarItem from './status-bar/tc-environment';
import createTcTimeStatusBarItem from './status-bar/tc-time';
import createTcTimeToSubmit from './status-bar/tc-time-to-submit';
import createTcSecureSessionBarItem from './status-bar/tc-secure-session';

import AuthController from './controllers/AuthController';
import ChallengeController from './controllers/ChallengeController';
import * as constants from './constants';
import TelemetryService from './services/TelemetryService';
import { ActiveSubmissionsProvider, ActiveContestsProvider, HomeViewProvider } from './view-providers';

import VSCode from './helpers/VSCode';
import SecretSessionController from './controllers/SessionController';

// This method is called when the extension is activated
export function activate(context: vscode.ExtensionContext) {
  const vs = new VSCode(context);
  TelemetryService.Initialize(context);

  console.log('[topcoder-workflow] The extension is active.');

  const authController = new AuthController(context);
  const challengeController = new ChallengeController(context);
  const secretSessionController = new SecretSessionController(context);
  // Setup tree view providers
  ActiveContestsProvider.Register(challengeController, context);
  ActiveSubmissionsProvider.Register(challengeController, context);
  HomeViewProvider.Register(authController, challengeController, secretSessionController, context);

  // Register commands
  context.subscriptions.push(createTcSecureSessionBarItem(context));
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
  vs.registerCommandAndSubscription(
    'extension.cloneRepository',
    challengeController.cloneGitUrl,
    challengeController,
  );
  vs.registerCommandAndSubscription(
    'extension.cloneOrganizationRepository',
    challengeController.cloneTemplate,
    challengeController,
  );
}

// This method is called when the extension is deactivated
/* tslint:disable-next-line */
export async function deactivate() {
  await TelemetryService.dispose();
}

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
