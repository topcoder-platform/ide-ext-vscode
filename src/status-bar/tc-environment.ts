/**
 * Status bar item to show the current TC environment name.
 */

import * as vscode from 'vscode';
import { getEnv } from '../config';

/**
 * Creates a new status bar item that shows currently selected TC environment.
 * @return {vscode.StatusBarItem}
 */
export default function create(): vscode.StatusBarItem {
  const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  item.tooltip = 'Current environment of Topcoder Extension';

  const update = () => {
    item.text = `TC Env: ${getEnv().NAME}`;
  };
  vscode.workspace.onDidChangeConfiguration(update);
  update();

  item.show();
  return item;
}
