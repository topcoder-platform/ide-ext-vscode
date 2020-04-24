import * as _ from 'lodash';
import axios from 'axios';
import * as fs from 'fs-extra';
import * as FormData from 'form-data';
import * as constants from '../constants';
import { getEnv } from '../config';
import { AuthTokenDecoder, IDecodedToken } from '../helpers/Decoding';
import { IProofEvent } from '../interfaces';

export default class SessionService {
  /**
   * Create new secure session with "Pairing" status and return its id
   * @param token user's access token
   * @return new secure session id
   */
  public static async generateSecureSessionId(token: string) {
    const decodedToken: IDecodedToken = AuthTokenDecoder.decode(token);
    const url = getEnv().URLS.PROOFS_API_ENDPOINT + '/sessions';
    try {
      const { data } = await axios.post(url, {
        status: constants.sessionPairingStatus
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return data.id;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * This method will send a POST request to BioID verify endpoint
   * @param token bearer token for BioID API authentication
   * @param imagePath imagePath of the image which needs to be sent
   * @param proof The proof event object to submit after successful verification
   * @return boolean
   */
  public static async verifyBioid(token: string, imagePath: string, proof: IProofEvent) {
    const formData = new FormData();
    const url = getEnv().URLS.BIOMETRIC_API_ENDPOINT + `/bioid/verify`;
    formData.append('image', fs.createReadStream(imagePath));
    const { data } = await axios.post(url, formData, {
      headers: _.merge(formData.getHeaders(), { Authorization: `Bearer ${token}`}),
      params: {
        bcid: this.generateBcid(token)
      }
    });
    // TODO - if biometrics fails, should we still submit proof?
    // Every biometric
    await this.submitProof(token, proof);
    return data.Success;
  }

  /**
   * This method will send a POST request to BioID enroll endpoint
   * @param token bearer token for BioID API authentication
   * @param imagePath imagePath of the image which needs to be sent
   * @return boolean
   */
  public static async enrollBioid(token: string, imagePath: string) {
    const formData = new FormData();
    const url = getEnv().URLS.BIOMETRIC_API_ENDPOINT + `/bioid/enroll`;
    formData.append('image', fs.createReadStream(imagePath));
    const { data } = await axios.post(url, formData, {
      headers: _.merge(formData.getHeaders(), { Authorization: `Bearer ${token}`}),
      params: {
        bcid: this.generateBcid(token)
      }
    });
    return data.Success;
  }

  /**
   * This method will close a session by a sending Patch Request
   * @param token user's access token
   * @param sessionId id of the session
   * @return boolean
   */
  public static async closeSession(token: string, sessionId: any) {
    const url = getEnv().URLS.PROOFS_API_ENDPOINT + `/sessions/${sessionId}`;
    const { data } = await axios.patch(url, {
      status: constants.sessionClosedStatus
    }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return data;
  }

  /**
   * Check if secure session status has changed to Active
   * @param token user's access token
   * @param sessionId id of the session
   * @return boolean, true if status is Active
   */
  public static async checkForStatusUpdate(token: string, sessionId: string) {
    const url = getEnv().URLS.PROOFS_API_ENDPOINT + `/sessions/${sessionId}`;
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
   * Change secure session status to Timed Out
   * @param token user's access token
   * @param sessionId id of the session
   * @returns api response
   */
  public static async timeOutPairingSession(token: string, sessionId: string) {
    const url = getEnv().URLS.PROOFS_API_ENDPOINT + `/sessions/${sessionId}`;
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
   * Generates BCID from userId
   * @param token bearer authentication token
   * @return bcid string
   */
  private static generateBcid(token: string) {
    const decodedToken: IDecodedToken = AuthTokenDecoder.decode(token);
    return constants.BCID_PREFIX + decodedToken.userId;
  }

  /**
   * Submits the proof event
   * @param token The auth token for the endpoint
   * @param proof The proof event to submit
   */
  private static async submitProof(token: string, proof: IProofEvent) {
    const url = getEnv().URLS.PROOFS_API_ENDPOINT + `/proofEvents`;
    try {
      await axios.post(url, proof, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (err) {
      console.error(err);
      // TODO - what should happen if proofs are not submitted successfully
    }
  }
}
