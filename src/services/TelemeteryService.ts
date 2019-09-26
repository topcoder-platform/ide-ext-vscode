import * as vscode from 'vscode';
import axios from 'axios';
import * as constants from '../constants';
/**
 * Interacts with challenges APIs
 */

export default class TelemeteryService {

    public static getToken: any;
    /**
     * Calls api and send to telemetry the information passed in params
     * @param params object to passed to telemetry in json stringified
     * @param checkToken if false do not try to get token. (ex: after login failure otherwise stays in loop)
     */
    public static async send(params: any, checkToken: boolean = true) {
        // in case telemetry is deactivated by the user, don't send the events to api.
        if (!this.isTelemetryActive()) {
            return;
        }
        let token = '';
        if (checkToken) {
            try {
                token = await this.getToken();
            } catch (err) {
                // no need to nothing if for some reason the token wasn't able to be fetched.
            }
        }

        try {
            return await axios.post(constants.telemetryUrl, JSON.stringify(params),
                {
                    headers: { Authorization: `Bearer ${token}` }
                });
        } catch (err) {
            console.log('Telemetry.send error', params, err);
        }
        return null;
    }
    /**
     * When user invokes any command. Pass the name of the invoked command
     * @param challengeId  challenge id
     */
    public static async command(name: string) {
        const params = {
            type: 'invokeCommand',
            value: { name }
        };
        return await this.send(params);
    }

    /**
     * When user clicks on a challenge to view its details. Pass the id of the challenge being
     * viewed
     * @param challengeId  challenge id
     */
    public static async challengeDetails(challengeId: string) {
        const params = {
            type: 'challengeDetails',
            value: { challengeId }
        };
        return await this.send(params);
    }

    /**
     * When a user registers for a challenge. Pass the id of the challenge to which the user has
     * registered
     * @param challengeId  challenge id
     */
    public static async registerChallenge(challengeId: string) {
        const params = {
            type: 'registerChallenge',
            value: { challengeId }
        };
        return await this.send(params);
    }
    /**
     * When user clones a repository from within the challenge details page after registering for
     * a challenge. Pass the id of the challenge and the url of the cloned repository
     * @param challengeId challenge identifier
     * @param cloneRepoUrl clone url selected
     */
    public static async cloneRepo(challengeId: string, cloneRepoUrl: string) {
        const params = {
            type: 'cloneRepository',
            value: { challengeId, cloneRepoUrl }
        };
        return await this.send(params);
    }

    /**
     * When a user instructs to initialize the workspace after registering for a challenge. Pass
     * the id of the challenge
     * @param challengeId  challenge id
     */
    public static async initializeWorkspace(challengeId: string) {
        const params = {
            type: 'initializeWorkspace',
            value: { challengeId }
        };
        return await this.send(params);
    }
    /**
     * When a user clicks on a challenge in the YOUR ACTIVE CHALLENGES under the
     * Topcoder View. Pass the challenge Id of the challenge that was clicked
     * @param challengeId  challenge id
     */
    public static async activeChallenge(challengeId: string) {
        const params = {
            type: 'activeChallenge',
            value: { challengeId }
        };
        return await this.send(params);
    }

    /**
     * When a user clicks on a challenge in the YOUR ACTIVE SUBMISSIONS under the
     * Topcoder View. Pass the challenge Id of the challenge that was clicked
     * @param challengeId  challenge id
     */
    public static async activeSubmission(challengeId: string) {
        const params = {
            type: 'activeSubmission',
            value: { challengeId }
        };
        return await this.send(params);
    }

    /**
     * When the user clicks on any item under the HOME section under Topcoder View. Pass
     * the name of the item (“Extension Features”, “Getting Started”, “Active Challenges”).
     * @param section name of the item
     */
    public static async homeSection(section: string) {
        const params = {
            type: 'homeSection',
            value: { section }
        };
        return await this.send(params);
    }

    /**
     * Logs errors in the telemetry api
     * @param error error
     */
    public static async error(error: any, checkToken: boolean = true) {
        console.log(error);
        const params = {
            type: 'error',
            value: { error }
        };
        return await this.send(params, checkToken);
    }

    /**
     * Gets the configuration if the telemetry is or not active
     */
    private static isTelemetryActive() {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        const isActiveTelemetry = config.get(constants.telemetryActive);
        return isActiveTelemetry;
    }

}
