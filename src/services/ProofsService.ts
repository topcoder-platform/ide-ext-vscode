import axios from 'axios';
import * as constants from '../constants';
import { getEnv } from '../config';
import { IProofEvent } from '../interfaces';

const proofsEndpoint = getEnv().URLS.PROOFS_API_ENDPOINT;

export default class SessionService {
  /**
   * Create a new secure session
   * @param token user's access token
   * @return new secure session id
   */
  public static async generateSecureSessionId(token: string) {
    const url = `${proofsEndpoint}/sessions`;

    try {
      const { data } = await axios.post(url, {
        status: constants.sessionPairingStatus
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return data.id;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  /**
   * Close / end the secure session
   * @param token user's access token
   * @param sessionId id of the session
   * @return boolean
   */
  public static async closeSession(token: string, sessionId: any) {
    const url = `${proofsEndpoint}/sessions/${sessionId}`;

    try {
      const { data } = await axios.patch(url, {
        status: constants.sessionClosedStatus
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return data;
    } catch (error) {
      console.error(error);

      // TODO - what should happen if session cannot be closed

      throw error;
    }
  }

  /**
   * Check if secure session status has changed to Active
   * @param token user's access token
   * @param sessionId id of the session
   * @return boolean, true if status is Active
   */
  public static async checkForStatusUpdate(token: string, sessionId: string) {
    const url = `${proofsEndpoint}/sessions/${sessionId}`;

    try {
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return data.status === constants.sessionActiveStatus;
    } catch (err) {
      console.error(err);

      throw err;
    }
  }

  /**
   * Set secure session status to timed out
   * @param token user's access token
   * @param sessionId id of the session
   * @returns api response
   */
  public static async timeOutPairingSession(token: string, sessionId: string) {
    const url = `${proofsEndpoint}/sessions/${sessionId}`;

    try {
      const { data } = await axios.patch(url, {
        status: constants.sessionTimedOutStatus
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * Create a proof event
   * @param token The auth token for the endpoint
   * @param proof The proof event to submit
   */
  public static async createProofEvent(token: string, proofEvent: IProofEvent) {
    const url = `${proofsEndpoint}/proofEvents`;

    try {
      await axios.post(url, proofEvent, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error(error);
      // TODO - what should happen if proof event creation is not a success
      throw error;
    }
  }
}
