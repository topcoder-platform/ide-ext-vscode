/**
 * Status bar item to show time left to submit to the challenge.
 */

import * as fs from 'fs';
import * as vscode from 'vscode';
import * as moment from 'moment-timezone';
import AuthService from '../services/AuthService';
import ChallengeService from '../services/ChallengeService';
import Notification from '../helpers/Notification';

/**
 * Creates a new status bar item that shows current TC time.
 * @return {vscode.StatusBarItem}
 */
export default function create(context: vscode.ExtensionContext):
  vscode.StatusBarItem {
  const item = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left, 150);
  item.tooltip = 'Time to submission deadline of current challenge.';

  let tcrc: any;
  let deadline: any;
  const update = () => {
    let text = '';
    if (deadline) {
      const time = deadline.diff(moment());
      if (time > 0) {
        text = `Submission Deadline In: ${moment.duration(time).humanize()}`;
      }
    }
    item.text = text;
  };

  const updateDeadline = async () => {
    try {
      tcrc = vscode.workspace.workspaceFolders;
      if (tcrc) {
        tcrc = `${tcrc[0].uri.path}/.topcoderrc`;
        tcrc = JSON.parse(fs.readFileSync(tcrc, 'utf-8'));
        let d = await ChallengeService.getChallengeDetails(
          tcrc.challengeId, AuthService.getSavedToken(context));
        d = d.result.content.phases;
        d = d.find((p: any) => p.type === 'Submission');
        deadline = d ? moment(d.scheduledEndTime) : undefined;
        update();
      }
    } catch (error) {
      deadline = undefined;
    }
  };

  tcrc = vscode.workspace.workspaceFolders;
  if (tcrc) {
    tcrc = tcrc[0].uri.path;
    fs.watch(tcrc, updateDeadline);
  }

  setInterval(update, 5000);
  updateDeadline();
  update();

  item.show();
  return item;
}
