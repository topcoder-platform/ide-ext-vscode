import { expect } from 'chai';
import { getEnv } from '../../config';
import * as nock from 'nock';
import * as url from 'url';
import * as vscode from 'vscode';
import * as constants from '../../constants';
import AuthService from '../../services/AuthService';
import { oauthToken, oauthRefreshedToken, expiredToken, adminToken, copilotToken, regularUserToken } from './testData';
suite('AuthService Unit tests', () => {
  suiteSetup(() => {
    const env = getEnv();
    const refreshTokenUrl = url.parse(env.URLS.AUTH_TOKEN);
    nock(/.*\.com/)
      .persist()
      .post(refreshTokenUrl.pathname as string)
      .reply(200, oauthRefreshedToken);
  });
  suiteTeardown(() => {
    nock.cleanAll();
  });

  test('refreshToken() should refresh the token', async () => {
    const token = await AuthService.refreshToken(oauthToken.refresh_token);
    expect(token).to.be.equal(oauthRefreshedToken.access_token);
  });

  test('getToken() without previous saved token should retun an empty token', async () => {
    const token = await AuthService.getToken();
    expect(token).to.be.equal('');
  });

  test('getToken() with invalid token should refresh a token', async () => {
    const token = await AuthService.getToken('invalid_token', oauthToken.refresh_token);
    expect(token).to.be.equal(oauthRefreshedToken.access_token);
  });

  test('getToken() with expired token should refresh the token', async () => {
    const token = await AuthService.getToken(expiredToken, oauthToken.refresh_token);
    expect(token).to.be.equal(oauthRefreshedToken.access_token);
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

  test('canCreateChallenge() should return true when user is admin', async () => {
    expect(AuthService.canCreateChallenge(adminToken)).to.be.equal(true);
  });

  test('canCreateChallenge() should return true when user is copilot', async () => {
    expect(AuthService.canCreateChallenge(copilotToken)).to.be.equal(true);
  });

  test('canCreateChallenge() should return false when user is not admin or copilot', async () => {
    expect(AuthService.canCreateChallenge(regularUserToken)).to.be.equal(false);
  });
});
