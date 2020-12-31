import { QuickPickItem as BaseQuickPickItem } from 'vscode';

/**
 * Item class to be shown at quick picks, for Projects.
 */
export class QuickPickItem implements BaseQuickPickItem {
  public id: string;
  public label: string;
  constructor(id: string, name: string) {
    this.id = id + ''; // convert to string if its not
    this.label = name;
  }
}
