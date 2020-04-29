/**
 * Status bar item to show the current secure session status.
 */

import * as vscode from 'vscode';
import * as constants from '../constants';

/**
 * Creates a new status bar item that shows current secure session.
 * @return {vscode.StatusBarItem}
 */
export default function create(context: vscode.ExtensionContext): vscode.StatusBarItem {
  const item = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 50);
  item.tooltip = 'You have successfully set up a Topcoder Secure Session';

  const update = () => {
    if (context.globalState.get(constants.secureSessionsKey)) {
      item.text = `Topcoder Secure Session: Active`;
    } else {
      item.text = ``;
    }
  };
  setInterval(update, 1000);
  update();

  item.show();
  return item;
}
