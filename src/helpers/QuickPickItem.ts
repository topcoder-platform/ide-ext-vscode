import { QuickPickItem as BaseQuickPickItem } from 'vscode';

/**
 * Item class to be shown at quick picks, for Projects.
 */
export class QuickPickItem implements BaseQuickPickItem {
  public id: number;
  public label: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.label = name;
  }
}
