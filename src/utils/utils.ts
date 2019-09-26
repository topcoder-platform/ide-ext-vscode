import * as vscode from 'vscode';
import * as constants from '../constants';

export default class Utils {
    public static getApiBaseUrl() {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        const prod = config.get(constants.environment);

        return prod ? 'https://api.topcoder.com' : 'https://api.topcoder-dev.com';
    }

    public static getAuthBaseUrl() {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        const prod = config.get(constants.environment);

        return prod ? 'https://topcoder.auth0.com' : 'https://topcoder-dev.auth0.com';
    }

    public static getClientId() {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        const prod = config.get(constants.environment);

        return prod ? '6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P' : 'JFDo7HMkf0q2CkVFHojy3zHWafziprhT';

    }

    public static getClientConnection() {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        const prod = config.get(constants.environment);

        return prod ? 'LDAP' : 'TC-User-Database';

    }
}
