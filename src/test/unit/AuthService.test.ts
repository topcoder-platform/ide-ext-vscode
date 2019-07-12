import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';
import * as vscode from 'vscode';
import * as constants from '../../constants';
import AuthService from '../../services/AuthService';
import { v2Token, v3Token, refreshedToken, expiredToken } from './testData';

suite('AuthService Unit tests', () => {
    suiteSetup(() => {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);

        const refreshTokenUrl = url.parse(constants.refreshTokenUrl);
        const AUTHN_URL = url.parse(<string>config.get('auth.AUTHN_URL'));
        const AUTHZ_URL = url.parse(<string>config.get('auth.AUTHZ_URL'));

        nock(/\.com/)
        .persist()
        .get(<string>refreshTokenUrl.path)
        .reply(200, refreshedToken)
        .post(<string>AUTHN_URL.path)
        .reply(200, v2Token)
        .post(<string>AUTHZ_URL.path)
        .reply(200, v3Token);
    });

    suiteTeardown(() => {
        nock.cleanAll();
    });

    test('fetchToken() should fetch a new token', async () => {
        const token = await AuthService.fetchToken();
        expect(token).to.be.equal(v3Token.result.content.token);
    });

    test('refreshToken() should refresh the token', async () => {
        const token = await AuthService.refreshToken(v3Token.result.content.token);
        expect(token).to.be.equal(refreshedToken.result.content.token);
    });

    test('getToken() without previous saved token should fetch a new token', async () => {
        const token = await AuthService.getToken();
        expect(token).to.be.equal(v3Token.result.content.token);
    });

    test('getToken() with invalid token should fetch a new token', async () => {
        const token = await AuthService.getToken('invalid_token');
        expect(token).to.be.equal(v3Token.result.content.token);
    });

    test('getToken() with expired token should refresh the token', async () => {
        const token = await AuthService.getToken(expiredToken);
        expect(token).to.be.equal(refreshedToken.result.content.token);
    });

    test('isTokenExpired() should return true when the token is expired', async () => {
        const oneMinuteAgo = Math.floor(Date.now() / 1000) - 60 * 1;
        const token = { exp: oneMinuteAgo };
        expect(AuthService.isTokenExpired(token)).to.be.equal(true);
    });

    test('isTokenExpired() should return false when the token is not expired', async () => {
        const inOneMinute = Math.floor(Date.now() / 1000) + 60 * 1;
        const token = { exp: inOneMinute };
        expect(AuthService.isTokenExpired(token)).to.be.equal(false);
    });
});
