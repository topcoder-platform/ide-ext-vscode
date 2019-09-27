/**
 * Encapsulates telemetry sharing to Topcoder.
 */

import axios from 'axios';

import * as CONST from '../constants';
import { getConfig, getEnv } from '../config';

export default class TelemetryService {
  /**
   * Shares extension telemetry data to Topcoder.
   *
   * This function takes care to check if the data actually should be shared,
   * and does nothing if the should not. The telemetry will be shared if the user
   * has opted-in for that in VSCode setting for the extension, and also if
   * telemetry URL is set in the internal extension config.
   *
   * @param {Object} data Payload to send.
   * @param {String} [userToken] User auth token to include into
   *  the telemetry call's Authorization header.
   * @return {Promise} Resolves once the operation is completed.
   */
  public static async share(data: object, userToken?: string) {
    const url = getEnv().URLS.TELEMETRY;
    /* Disable telemetry until that is finalized
    if (url && getConfig().get(CONST.shareTelemetryToTC)) {
      const headers: any = {};
      if (userToken) {
        headers.Authorization = `Bearer ${userToken}`;
      }
      await axios({
        method: 'post',
        url,
        headers,
        data,
      });
    }
    */
  }
}
