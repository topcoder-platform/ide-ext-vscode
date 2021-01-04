import * as vscode from 'vscode';

import TelemetryService from '../services/TelemetryService';

/**
 * Existing notifications types.
 */
export const notificationTypes = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
};

/**
 * Responsable for notifications.
 */
export default class Notification {
  public static showInfoNotification(message: string) {
    vscode.window.showInformationMessage(message);
  }

  public static showWarningNotification(message: string) {
    vscode.window.showWarningMessage(message);
  }

  public static showErrorNotification(
    message: string,
    userToken?: string,
  ) {
    console.error(message);
    TelemetryService.share({
      event: 'Error',
      error: message,
    }, userToken);
    vscode.window.showErrorMessage(message);
  }

  public static showNotification(
    type: string,
    message: string,
    userToken?: string) {
    switch (type) {
      case notificationTypes.ERROR:
        this.showErrorNotification(message, userToken);
        break;
      case notificationTypes.INFO:
        this.showInfoNotification(message);
        break;
      case notificationTypes.WARNING:
        this.showWarningNotification(message);
        break;
    }
  }

  public static async showProgressNotification(message: string, action: Promise<any>) {
    return vscode.window.withProgress({
      location: vscode.ProgressLocation.Notification,
      title: message,
      cancellable: false
    }, () => {
      return action;
    });
  }
}
