import * as vscode from 'vscode';
import { expect } from 'chai';
import * as constants from '../../constants';
import Utils from '../../utils/utils';

suite('Utils unit tests', () => {
    suite('When config is prod', () => {
        suiteSetup(async () => {
            const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
            await config.update(constants.environment, true);
        });

        suiteTeardown(async () => {
            const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
            await config.update(constants.environment, true);
        });

        test('getApiBaseUrl should return the prod url if config is set to prod', () => {
            const url = Utils.getApiBaseUrl();

            expect(url).to.eq('https://api.topcoder.com');
        });

        test('getAuthBaseUrl should return the prod url if config is set to prod', () => {
            const url = Utils.getAuthBaseUrl();

            expect(url).to.eq('https://topcoder.auth0.com');
        });

        test('getClientId should return the prod url if config is set to prod', () => {
            const url = Utils.getClientId();

            expect(url).to.eq('6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P');
        });

        test('getClientConnection should return the prod url if config is set to prod', () => {
            const url = Utils.getClientConnection();

            expect(url).to.eq('LDAP');
        });
    });
    suite('When config is dev', () => {
        suiteSetup(async () => {
            const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
            await config.update(constants.environment, false);
        });

        suiteTeardown(async () => {
            const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
            await config.update(constants.environment, true);
        });

        test('getApiBaseUrl should return the dev url if config is set to dev', () => {
            const url = Utils.getApiBaseUrl();

            expect(url).to.eq('https://api.topcoder-dev.com');
        });

        test('getAuthBaseUrl should return the dev url if config is set to dev', () => {
            const url = Utils.getAuthBaseUrl();

            expect(url).to.eq('https://topcoder-dev.auth0.com');
        });

        test('getClientId should return the dev url if config is set to dev', () => {
            const url = Utils.getClientId();

            expect(url).to.eq('JFDo7HMkf0q2CkVFHojy3zHWafziprhT');
        });

        test('getClientConnection should return the dev url if config is set to dev', () => {
            const url = Utils.getClientConnection();

            expect(url).to.eq('TC-User-Database');
        });
    });
});
