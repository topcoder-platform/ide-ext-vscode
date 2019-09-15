import * as vscode from 'vscode';
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

    public static showErrorNotification(message: string) {
        vscode.window.showErrorMessage(message);
    }

    public static showNotification(type: string, message: string) {
        switch (type) {
            case notificationTypes.ERROR:
                this.showErrorNotification(message);
                break;
            case notificationTypes.INFO:
                this.showInfoNotification(message);
                break;
            case notificationTypes.WARNING:
                this.showWarningNotification(message);
                break;
        }
    }
}
