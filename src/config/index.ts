/**
 * Encapsulates access to VSCode and extension config.
 */

import * as vscode from 'vscode';
import * as CONST from '../constants';

/**
 * Gets extention configuration from VSCode.
 * @return {vscode.WorkspaceConfiguration}
 */
export function getConfig(): vscode.WorkspaceConfiguration {
  return vscode.workspace.getConfiguration(CONST.extensionConfigSectionName);
}

/**
 * Returns a constant set, defining Topcoder environment to work against,
 * according to the user settings.
 * @return {CONST.I_ENV}
 */
export function getEnv(): CONST.IENV {
  return getConfig().get(CONST.useDevelopEndpoint)
    ? CONST.DEV_ENV : CONST.PROD_ENV;
}
