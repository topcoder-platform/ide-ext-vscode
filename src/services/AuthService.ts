import * as vscode from 'vscode';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import axios from 'axios';
import TCAuth = require('topcoder-api-utils/TCAuth');
import * as constants from '../constants';
import { getEnv } from '../config';

/**
 * Interacts with authentication APIs.
 */
export default class AuthService {

  /**
   * Log in the user and return the token.
   */
  public static async fetchToken(): Promise<string> {
    const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);

    const env = getEnv();

    const tcAuth = new TCAuth({
      AUTHN_URL: env.URLS.AUTHN,
      AUTHZ_URL: env.URLS.AUTHZ,
      CLIENT_ID: env.CLIENT_ID,
      CLIENT_V2CONNECTION: env.CLIENT_V2CONNECTION
    }, console);

    const username = config.get(constants.usernameConfig, '');
    const password = config.get(constants.passwordConfig, '');

    return new Promise((resolve, reject) => {
      tcAuth.login(username, password, (err: any, token: string) => {
        if (err) {
          return reject(new Error(constants.authenticationFailedMessage));
        }

        return resolve(token);
      });
    });
  }

  /**
   * Gets saved user token, if any.
   * @param {vscode.ExtensionContext} context Extension context.
   * @return {String} The token.
   */
  public static getSavedToken(context: vscode.ExtensionContext): string {
    return context.globalState.get(constants.tokenStateKey, '');
  }

  /**
   * Get a valid token.
   * If the savedToken is missing or invalid, log in the user and fetch a new token.
   * If the token is expired or is about to expire, refresh it.
   * @param savedToken
   */
  public static async getToken(savedToken?: string) {
    // Missing token
    if (!savedToken) {
      console.log('No saved token. Fetching new token.');
      return this.fetchToken();
    }

    const decodedToken: any = jwt.decode(savedToken);

    // Token is is invalid
    if (!decodedToken) {
      console.log('Decoded token is invalid. Fetching new token.');
      return this.fetchToken();
    }

    const MINUTES_TO_EXPIRE = 5;

    // If the token is still fresh for at least another minute
    if (!this.isTokenExpired(decodedToken, 60)) {
      // If the token will expire in the next 5 minutes, refresh it
      if (this.isTokenExpired(decodedToken, 60 * MINUTES_TO_EXPIRE)) {
        console.log('Token will expire in 5 minutes, Refreshing token.');
        return this.refreshToken(savedToken);
      }

      console.log('Using valid token.');
      return savedToken;
    }

    console.log('Refreshing expired token.');
    // The token is expired, refresh it
    return this.refreshToken(savedToken);
  }

  /**
   * Update the global state with the token.
   * @param context
   * @return The token stored in the global state.
   */
  public static async updateTokenGlobalState(context: vscode.ExtensionContext): Promise<string> {
    const savedToken = this.getSavedToken(context);
    const freshToken = await this.getToken(savedToken);
    context.globalState.update(constants.tokenStateKey, freshToken);

    return freshToken;
  }

  /**
   * Refresh the provided token.
   * @param savedToken
   * @return The refreshed token.
   */
  public static async refreshToken(savedToken: string): Promise<string> {
    try {
      const env = getEnv();
      const { data } = await axios.get(env.URLS.REFRESH_TOKEN,
        {
          headers: { Authorization: `Bearer ${savedToken}` }
        });
      const token = _.get(data, 'result.content.token', '');

      return token;
    } catch (err) {
      throw new Error(constants.tokenRefreshFailedMessage);
    }
  }

  /**
   * Check if the token is expired.
   * @param decodedToken
   * @param offsetSeconds
   * @return `true` if the token is expired.
   */
  public static isTokenExpired(decodedToken: any, offsetSeconds = 0): boolean {
    const nowInSeconds = Math.floor(Date.now() / 1000);

    if (!decodedToken.exp) {
      return false;
    }

    return !(decodedToken.exp > (nowInSeconds + offsetSeconds));
  }
}
