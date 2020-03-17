import { expect } from 'chai';
import { getEnv } from '../../config';
import * as nock from 'nock';
import * as url from 'url';
import * as vscode from 'vscode';
import * as constants from '../../constants';
import AuthService from '../../services/AuthService';
import { v2Token, v3Token, oauthRefreshedToken, expiredToken } from './testData';

suite('AuthService Unit tests', () => {
  suiteSetup(() => {
    const env = getEnv();
    const refreshTokenUrl = url.parse(env.URLS.AUTH_TOKEN);
    const AUTHN_URL = url.parse(env.URLS.AUTHN);
    const AUTHZ_URL = url.parse(env.URLS.AUTHZ);

    nock(/.*\.com/)
      .persist()
      .post(refreshTokenUrl.path as string)
      .reply(200, oauthRefreshedToken)
      .post(AUTHN_URL.path as string)
      .reply(200, v2Token)
      .post(AUTHZ_URL.path as string)
      .reply(200, v3Token);
  });

  suiteTeardown(() => {
    nock.cleanAll();
  });

  test('refreshToken() should refresh the token', async () => {
    const token = await AuthService.refreshToken(v3Token.result.content.token);
    expect(token).to.be.equal(oauthRefreshedToken.data.access_token);
  });

  test('getToken() without previous saved token should retun an empty token', async () => {
    const token = await AuthService.getToken();
    expect(token).to.be.equal('');
  });

  test('getToken() with invalid token should refresh a token', async () => {
    const token = await AuthService.getToken('invalid_token');
    expect(token).to.be.equal(oauthRefreshedToken.data.access_token);
  });

  test('getToken() with expired token should refresh the token', async () => {
    const token = await AuthService.getToken(expiredToken);
    expect(token).to.be.equal(oauthRefreshedToken.data.access_token);
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
