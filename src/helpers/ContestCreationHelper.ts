import * as vscode from 'vscode';
import * as _ from 'lodash';
import Notification from '../helpers/Notification';
import ChallengeService from '../services/ChallengeService';
import AuthService from '../services/AuthService';
import { QuickPickItem } from './QuickPickItem';
import { contestCreationStepNames as stepNames, IStepConfig } from '../constants';

// If there is no mapped function for `fetchItems` (like below examples),
// it will ask the input with a InputBox instead of QuickPick.
//
// Use `validator` functions if you need to validate the input.
const functionMappings = {
  [stepNames.askProject]: {
    fetchItems: ChallengeService.fetchProjects
  },
  [stepNames.askChallengeTrack]: {
    fetchItems: ChallengeService.fetchChallengeTracks
  },
  [stepNames.askChallengeType]: {
    fetchItems: ChallengeService.fetchChallengeTypes
  },
  [stepNames.askChallengeName]: {
    validator: (input: string) => input.length > 0
  },
  [stepNames.askChallengePrizes]: {
    validator: (input: string) => _.every(input.split(','), (prize) => Number(prize) > 0)
  },
  [stepNames.askChallengeCopilotPayment]: {
    validator: (input: string) => Number(input) >= 0
  },
  [stepNames.askChallengeTags]: {
    fetchItems: ChallengeService.fetchTags
  },
};

export default class ContestCreation {

  /**
   * Shows a QuickInput or InputBox to ask an input.
   *
   * @param {vscode.ExtensionContext} context Extension context
   * @param {string} title Title for UI elements (QuickInput & InputBox)
   * @param {number} stepNum Step number for UI elements
   * @param {number} totalSteps Total steps
   * @param {IStepConfig} config Configuration for the current input/step
   * @return {Promise<QuickPickItem | QuickPickItem[] | string>} selected/entered choice
   */
  public static async ask(
    context: vscode.ExtensionContext, title: string,
    stepNum: number, totalSteps: number,
    config: IStepConfig
  ): Promise<QuickPickItem | QuickPickItem[] | string> {
    return new Promise(async (resolve) => {
      // show a loading indicator while fetching items
      const items = await vscode.window.withProgress({
        location: vscode.ProgressLocation.Notification,
        title: config.loadingMsg
      }, async () => {
        const token = await AuthService.updateTokenGlobalState(context);
        const fetchItemsFunction = functionMappings[config.name].fetchItems;
        return fetchItemsFunction ? fetchItemsFunction(token) : null;
      });

      if (items !== null) {
        // QuickPick
        const quickPick = config.multiSelection
          ? ContestCreation.createMultiSelectionQuickPick(title, stepNum, totalSteps, config.placeholder, items)
          : ContestCreation.createSingleSelectionQuickPick(title, stepNum, totalSteps, config.placeholder, items);
        quickPick.onDidAccept(() => {
          // selection(s) has been made
          config.multiSelection
            ? resolve(quickPick.selectedItems as QuickPickItem[])
            : resolve(quickPick.selectedItems[0] as QuickPickItem);
          quickPick.dispose();
        });
        quickPick.show();
      } else {
        // InputBox
        const inputBox = ContestCreation.createInputBox(title, stepNum, totalSteps, config.placeholder);
        inputBox.onDidAccept(() => {
          // input value has been confirmed (i.e. user presses Enter)
          const validator = functionMappings[config.name].validator;
          if (validator && validator(inputBox.value)) {
            // valid input
            resolve(inputBox.value);
            inputBox.dispose();
          } else {
            // invalid input
            const errMsg = _.get(config, 'invalidInputMsg', 'Invalid Input!');
            Notification.showErrorNotification(errMsg);
          }
        });
        inputBox.show();
      }
    });
  }

  /**
   * Gathers inputs from user via QuickBox or InputBox,
   * in sequence (based on `steps` param).
   *
   * @param {vscode.ExtensionContext} context Extension context
   * @param {string} title Title for UI elements (QuickInput & InputBox)
   * @param {IStepConfig[]} steps Steps/Inputs to be asked sequentially
   * @return {Promise<Map<string, QuickPickItem | QuickPickItem[] | string>>} gathered choices mapped to step names
   */
  public static async askSequentially(
    context: vscode.ExtensionContext, title: string, steps: IStepConfig[]
  ): Promise<Map<string, QuickPickItem | QuickPickItem[] | string>> {
    const choices = new Map<string, QuickPickItem | QuickPickItem[] | string>();
    for (let stepIdx = 0;  stepIdx < steps.length; ++stepIdx) {
      const config = steps[stepIdx];
      const stepNum = stepIdx + 1;
      choices.set(config.name, await ContestCreation.ask(context, title, stepNum, steps.length, config));
    }
    return choices;
  }

  /**
   * Creates a single selection QuickPick from given parameters.
   *
   * @param {string} title Title
   * @param {number} stepNum Current step number
   * @param {number} totalSteps Total steps number
   * @param {string} placeholder Placeholder text
   * @param {any[]} items Items to be shown at QuickPick list
   * @return {vscode.QuickPick} Created QuickPick object
   */
  private static createSingleSelectionQuickPick(
    title: string, stepNum: number, totalSteps: number, placeholder: string, items: any[]
  ): vscode.QuickPick<QuickPickItem> {
    const quickPick = vscode.window.createQuickPick<QuickPickItem>();
    quickPick.title = title;
    quickPick.placeholder = placeholder;
    quickPick.step = stepNum;
    quickPick.totalSteps = totalSteps;
    quickPick.items = items.map((item) => new QuickPickItem(item.id, item.name));
    return quickPick;
  }

  /**
   * Creates a multi selection QuickPick from given parameters.
   *
   * @param {string} title Title
   * @param {number} stepNum Current step number
   * @param {number} totalSteps Total steps number
   * @param {string} placeholder Placeholder text
   * @param {any[]} items Items to be shown at QuickPick list
   * @return {vscode.QuickPick} Created QuickPick object
   */
  private static createMultiSelectionQuickPick(
    title: string, stepNum: number, totalSteps: number, placeholder: string, items: any[]
  ): vscode.QuickPick<QuickPickItem> {
    const quickPick = ContestCreation.createSingleSelectionQuickPick(title, stepNum, totalSteps, placeholder, items);
    quickPick.canSelectMany = true;
    return quickPick;
  }

  /**
   * Creates a InputBox from given parameters.
   *
   * @param {string} title Title
   * @param {number} stepNum Current step number
   * @param {number} totalSteps Total steps number
   * @param {string} placeholder Placeholder text
   * @return {vscode.InputBox} Created InputBox object
   */
  private static createInputBox(
    title: string, stepNum: number, totalSteps: number, placeholder: string
  ): vscode.InputBox {
    const inputBox = vscode.window.createInputBox();
    inputBox.title = title;
    inputBox.placeholder = placeholder;
    inputBox.step = stepNum;
    inputBox.totalSteps = totalSteps;
    return inputBox;
  }
}
