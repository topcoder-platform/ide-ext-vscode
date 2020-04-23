import * as vscode from 'vscode';
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash';
import { Observable, Subscriber } from 'rxjs';
import axios from 'axios';
import TCAuth = require('topcoder-api-utils/TCAuth');
import * as constants from '../constants';
import { getEnv } from '../config';
interface IDeviceAuthData {
  device_code: string;
  user_code: string;
  verification_uri: string;
  verification_uri_complete: string;
  expires_in: number;
  interval: number;
}

/**
 * Interacts with authentication APIs.
 */
export default class AuthService {

  /**
   * Gets saved user token, if any.
   * @param {vscode.ExtensionContext} context extension context.
   * @return {String} The token.
   */
  public static getSavedToken(context: vscode.ExtensionContext): string {
    return context.globalState.get(constants.tokenStateKey, '');
  }

  /**
   * Gets saved refresh token, if any
   * @param {vscode.ExtensionContext} context Extension context
   * @return {String} The token
   */
  public static getRefreshToken(context: vscode.ExtensionContext): string {
    return context.globalState.get(constants.refreshTokenStateKey, '');
  }

  /**
   * Get a valid token.
   * If the savedToken is missing or invalid, log in the user and fetch a new token.
   * If the token is expired or is about to expire, refresh it.
   * @param {String} savedToken access token
   * @param {String} refreshToken refresh token
   * @return {Promise<string>} access token
   */
  public static async getToken(savedToken?: string, refreshToken?: string): Promise<string> {
    // Missing token
    if (!savedToken && !refreshToken) {
      return '';
    }

    if (savedToken) {
      const decodedToken: any = jwt.decode(savedToken);
      // Token is is invalid
      if (!decodedToken) {
        console.log('Decoded token is invalid. Refreshing.');
        return this.refreshToken(refreshToken);
      }
      const MINUTES_TO_EXPIRE = 5;
      // If the token is still fresh for at least another minute
      if (!this.isTokenExpired(decodedToken, 60)) {
        // If the token will expire in the next 5 minutes, refresh it
        if (this.isTokenExpired(decodedToken, 60 * MINUTES_TO_EXPIRE)) {
          console.log('Token will expire in 5 minutes, Refreshing token.');
          return this.refreshToken(refreshToken);
        }

        console.log('Using valid token.');
        return savedToken;
      }
    }

    console.log('Refreshing expired token.');
    // The token is expired, refresh it
    return this.refreshToken(refreshToken);
  }

  /**
   * Update the global state with the token.
   * @param context extension context
   * @return {Promise<string>} The token stored in the global state.
   */
  public static async updateTokenGlobalState(context: vscode.ExtensionContext): Promise<string> {
    const savedToken = this.getSavedToken(context);
    const refreshToken = this.getRefreshToken(context);
    const freshToken = await this.getToken(savedToken, refreshToken);
    context.globalState.update(constants.tokenStateKey, freshToken);

    return freshToken;
  }

  /**
   * Refresh the provided token.
   * @param savedToken
   * @return {Promise<string>} The refreshed token.
   */
  public static async refreshToken(refreshToken?: string): Promise<string> {
    try {
      const env = getEnv();
      const res = await axios.post(env.URLS.AUTH_TOKEN, {
          grant_type: 'refresh_token',
          client_id: env.AUTH0_CLIENT_ID,
          refresh_token: refreshToken
        }
      );
      const token = _.get(res.data, 'access_token', '');

      return token;
    } catch (err) {
      throw new Error(constants.tokenRefreshFailedMessage);
    }
  }

  /**
   * Get device authorization data from Auth0 endpoint
   * @return {Promise<IDeviceAuthData>} device authorization data
   */
  public static async startDeviceAuthorization(): Promise<IDeviceAuthData> {
    const env = getEnv();
    return axios.post<IDeviceAuthData>(env.URLS.DEVICE_AUTH, {
      client_id: env.AUTH0_CLIENT_ID,
      scope: 'offline_access openid profile refresh_token',
      audience: env.URLS.AUTH_AUDIENCE
    }).then((res) => res.data);
  }

  /**
   * Poll for authorization status every `interval` seconds
   * @param {vscode.ExtensionContext} context extension context
   * @param {IDeviceAuthData} deviceData data from /device/code endpoint
   */
  public static pollDeviceAuthorization(context: vscode.ExtensionContext,
                                        deviceData: IDeviceAuthData): Observable<any>  {
    const env = getEnv();
    console.log(deviceData);
    let interval = deviceData.interval * 500;

    const callback = (subscriber: Subscriber<any>) => {
      axios.post(env.URLS.AUTH_TOKEN, {
        grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
        device_code: deviceData.device_code,
        client_id: env.AUTH0_CLIENT_ID
      }).then((res) => {
        context.globalState.update(constants.tokenStateKey, res.data.access_token);
        context.globalState.update(constants.refreshTokenStateKey, res.data.refresh_token);
        subscriber.next(res.data);
        subscriber.complete();
      }).catch((err) => {
        if (err.response && err.response.data) {
          const errorType = err.response.data.error;
          switch (errorType) {
            case 'slow_down':
              interval += 1000;
            case 'authorization_pending':
              setTimeout(callback, interval, subscriber);
              break;
            case 'expired_token':
            case 'invalid_grant':
              subscriber.error(constants.sessionExpiredMessage);
              break;
            case 'access_denied':
              subscriber.error(constants.accessDeniedMessage);
              break;
            default:
              subscriber.error(errorType);
          }
        } else {
          subscriber.error(err.message);
        }
      });
    };

    return new Observable((subscriber) => {
      callback(subscriber);
    });
  }

  /**
   * Check if the token is expired.
   * @param {any} decodedToken
   * @param {number} offsetSeconds
   * @return `true` if the token is expired.
   */
  public static isTokenExpired(decodedToken: any, offsetSeconds: number = 0): boolean {
    const nowInSeconds = Math.floor(Date.now() / 1000);

    if (!decodedToken.exp) {
      return false;
    }

    return !(decodedToken.exp > (nowInSeconds + offsetSeconds));
  }
}
