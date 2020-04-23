import * as _ from 'lodash';
import axios from 'axios';
import * as constants from '../constants';
import { getEnv } from '../config';
import { AuthTokenDecoder, IDecodedToken } from '../helpers/Decoding';
import * as FormData from 'form-data';

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
        status: [constants.sessionPairingStatus]
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
   * @return boolean
   */
  public static async verifyBioid(token: string, userToken: string, imagePath: string) {
    const formData = new FormData();
    const url = getEnv().URLS.BIOMETERIC_VALIDATION_HOST + `/bioid/verify`;
    formData.append('image', imagePath);
    const { data } = await axios.post(url, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
      params: {
        bcid: this.generateBcid(userToken)
      }
    });
    return data.Success;
  }

  /**
   * This method will send a POST request to BioID enroll endpoint
   * @param token bearer token for BioID API authentication
   * @param userToken bearer token for authentication for proofsAPI
   * @param imagePath imagePath of the image which needs to be sent
   * @return boolean
   */
  public static async enrollBioid(token: string, userToken: string, imagePath: string) {
    const formData = new FormData();
    const url = getEnv().URLS.BIOMETERIC_VALIDATION_HOST + `/bioid/enroll`;
    formData.append('image', imagePath);
    const { data } = await axios.post(url, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
      params: {
        bcid: this.generateBcid(userToken)
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
      status: [constants.sessionClosedStatus]
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
      return data.status.includes(constants.sessionActiveStatus);
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
        status: [constants.sessionTimedOutStatus]
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
   * @param userToken bearer authentication token
   * @return bcid string
   */
  private static generateBcid(userToken: string) {
    const decodedToken: IDecodedToken = AuthTokenDecoder.decode(userToken);
    return constants.BCID_PREFIX + decodedToken.userId;
  }
}
