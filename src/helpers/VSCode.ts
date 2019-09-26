/**
 * Helpers for VSCode.
 */

import * as vscode from 'vscode';

import AuthService from '../services/AuthService';
import TelemetryService from '../services/TelemetryService';

export default class VSCode {
  /**
   * @param {vscode.ExtensionContext} context
   */
  constructor(private context: vscode.ExtensionContext) {}

  /**
   * Registers a command in VSCode.
   *
   * This is a wrapper around VSCode's command registration function. It wraps
   * provided command handler with auxiliary code which handles telemetry
   * sharing to Topcoder.
   *
   * @param {String} command A unique identified for the command.
   * @param {Function} callback Command handler.
   * @param {Object} [thisArg] The `this` context used when invoking the handler function.
   * @param {Function} [telemetryTransform] Optional tranformer invoked
   *  with telemetry data and callback argument. Its output will be sent
   *  to the telemetry.
   * @return {vscode.Disposable} Disposable which unregisters this command on
   *  diposal.
   */
  public registerCommand(
    command: string,
    callback: (args: any) => any,
    thisArg?: any,
    telemetryTransform?: (telemetry: object, args: any) => object,
  ): vscode.Disposable {
    const bindedCallback = thisArg ? callback.bind(thisArg) : callback;
    const wrappedCallback = (args: any) => {
      const token = AuthService.getSavedToken(this.context);

      let telemetry: object = { event: 'Command Invoked', command };
      if (telemetryTransform) {
        telemetry = telemetryTransform(telemetry, args);
      }

      TelemetryService.share(telemetry, token);
      bindedCallback(args);
    };
    return vscode.commands.registerCommand(command, wrappedCallback);
  }

  /**
   * Registers a command in VSCode, and pushes it to context subscriptions.
   * @param {String} command A unique identified for the command.
   * @param {Function} callback Command handler.
   * @param {Object} [thisArg] The `this` context used when invoking the handler function.
   * @param {Function} [telemetryTransform] Optional tranformer invoked
   *  with telemetry data and callback argument. Its output will be sent
   *  to the telemetry.
   * @return {vscode.Disposable} Disposable which unregisters this command on
   *  diposal.
   */
  public registerCommandAndSubscription(
    command: string,
    callback: (args: any) => any,
    thisArg?: any,
    telemetryTransform?: (telemetry: object, args: any) => object,
  ) {
    this.context.subscriptions.push(
      this.registerCommand(command, callback, thisArg, telemetryTransform)
    );
  }
}
