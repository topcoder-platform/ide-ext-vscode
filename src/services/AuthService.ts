import * as vscode from 'vscode';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import axios from 'axios';
import TCAuth = require('topcoder-api-utils/TCAuth');
import * as constants from '../constants';

/**
 * Interacts with authentication APIs.
 */
export default class AuthService {

  /**
   * Log in the user and return the token.
   */
  public static async fetchToken(): Promise<string> {
    const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
    const tcAuth = new TCAuth({
      AUTHN_URL: constants.AUTHN_URL,
      AUTHZ_URL: constants.AUTHZ_URL,
      CLIENT_ID: constants.CLIENT_ID,
      CLIENT_V2CONNECTION: constants.CLIENT_V2CONNECTION
    }, console);

    const username = config.get(constants.usernameConfig, '');
    const password = config.get(constants.passwordConfig, '');

    return new Promise((resolve, reject) => {
      tcAuth.login(username, password, (err: object, token: string) => {
        if (err) {
          return reject(err);
        }

        return resolve(token);
      });
    });
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
      console.log('Fetching new token.');
      return this.fetchToken();
    }

    const decodedToken: any = jwt.decode(savedToken);

    // Token is is invalid
    if (!decodedToken) {
      console.log('Fetching new token.');
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
    const savedToken = context.globalState.get(constants.tokenStateKey, '');
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
    const { data } = await axios.get(constants.refreshTokenUrl,
      {
        headers: { Authorization: `Bearer ${savedToken}` }
      });
    const token = _.get(data, 'result.content.token', '');

    return token;
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
