/**
 * Encapsulates telemetry sharing to Topcoder.
 */

import axios from 'axios';
import * as vscode from 'vscode';
import TelemetryReporter from 'vscode-extension-telemetry';

import * as CONST from '../constants';
import { getConfig, getEnv } from '../config';

interface IPackageInfo {
  name: string;
  version: string;
  aiKey: string;
}

function getPackageInfo(context: vscode.ExtensionContext): IPackageInfo |
  undefined {
  const extensionPackage = require(context.asAbsolutePath('./package.json'));
  if (extensionPackage) {
    const packageInfo: IPackageInfo = {
      name: extensionPackage.name,
      version: extensionPackage.version,
      aiKey: extensionPackage.aiKey,
    };
    return packageInfo;
  }
  return undefined;
}

export default class TelemetryService {

  public static sendEvent(eventName: string, data: any):
    void {
    if (this.reporter) {
      console.log('send telemetry', eventName, JSON.stringify(data));
      this.reporter.sendTelemetryEvent(
        eventName, data);
    }
  }

  public static async dispose() {
    if (this.reporter) {
      await this.reporter.dispose();
    }
  }

  public static Initialize(context: vscode.ExtensionContext): void {
    const packageInfo = getPackageInfo(context);
    if (!packageInfo) {
      console.log('Unable to initialize telemetry');
      return;
    }
    if (!packageInfo.aiKey) {
      console.log(
        'Unable to initialize telemetry, please make sure AIKey is set in package.json');
      return;
    }
    this.reporter = new TelemetryReporter(
      packageInfo.name, packageInfo.version, packageInfo.aiKey);
  }

  /**
   * Shares extension telemetry data to Topcoder.
   *
   * This function takes care to check if the data actually should be shared,
   * and does nothing if the should not. The telemetry will be shared if the user
   * has opted-in for that in VSCode setting for the extension, and also if
   * telemetry URL is set in the internal extension config.
   *
   * @param {Any} data Payload to send.
   * @param {String} [userToken] User auth token to include into
   *  the telemetry call's Authorization header.
   * @return {Promise} Resolves once the operation is completed.
   */

  public static async share(data: any, userToken?: string) {
    const { event, ...rest } = data;

    if (getConfig().get(CONST.shareTelemetryToTC)) {
      this.sendEvent(data.event, rest);
    }
    /* Disable telemetry until that is finalized
    const url = getEnv().URLS.TELEMETRY;
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
      const { event, ...rest } = data;

      this.sendEvent(data.event, rest);
    }
    */

  }
  private static reporter: TelemetryReporter;

}
