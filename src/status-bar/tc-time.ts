/**
 * Status bar item to show the current TC time.
 */

import * as vscode from 'vscode';
import * as moment from 'moment-timezone';

/**
 * Creates a new status bar item that shows current TC time.
 * @return {vscode.StatusBarItem}
 */
export default function create(): vscode.StatusBarItem {
  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right, 200);
  item.tooltip = 'Current Topcoder Time (aka Eastern Time, New York Time)';

  const update = () => {
    const time = moment().tz('America/New_York');
    item.text = `TC Time: ${time.toString()}`;
  };
  setInterval(update, 1000);
  update();

  item.show();
  return item;
}
