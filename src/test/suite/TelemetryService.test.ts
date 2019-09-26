import { expect } from 'chai';
import * as nock from 'nock';
import * as vscode from 'vscode';
import * as constants from '../../constants';
import * as url from 'url';
import Utils from '../../utils/utils';
import { v2Token, v3Token, refreshedToken, expiredToken } from './testData';
import TelemetryService from '../../services/TelemeteryService';

suite('Telemetry service unit tests', () => {
    suiteSetup(() => {
        TelemetryService.getToken = () => 'token';
        const telemetryUrl = url.parse(constants.telemetryUrl);
        const refreshTokenUrl = url.parse(`${Utils.getApiBaseUrl()}/${constants.refreshTokenUrl}`);
        const AUTHN_URL = url.parse(`${Utils.getAuthBaseUrl()}/${constants.AUTHN_URL}`);
        const AUTHZ_URL = url.parse(`${Utils.getApiBaseUrl()}/${constants.AUTHZ_URL}`);

        nock(/\.com/)
            .persist()
            .get(telemetryUrl.path as string)
            .reply(200).get(refreshTokenUrl.path as string)
            .reply(200, refreshedToken)
            .post(AUTHN_URL.path as string)
            .reply(200, v2Token)
            .post(AUTHZ_URL.path as string)
            .reply(200, v3Token);
    });
    suiteTeardown(async () => {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        await config.update(constants.telemetryActive, false);
    });

    test('should return 200 if telemetry is active', async () => {
        const params = { param1: '1', param2: '2' };

        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        await config.update(constants.telemetryActive, true);

        const result = await TelemetryService.send(params);
        if (result) {
            expect(result.status).to.eq(200);
        } else {
            // having this because TS error saying that result can be an undefined object
            expect(true).to.eq(true);
        }

    });
    test('should return undefined if telemetry is inactive', async () => {
        const params = { param1: '1', param2: '2' };
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        await config.update(constants.telemetryActive, false);

        const result = await TelemetryService.send(params);
        expect(result).to.eq(undefined);
    });
});
