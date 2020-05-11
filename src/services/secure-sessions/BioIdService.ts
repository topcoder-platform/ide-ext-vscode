import axios from 'axios';
import * as fs from 'fs-extra';
import * as FormData from 'form-data';
import * as _ from 'lodash';
import { getEnv } from '../../config';
import * as constants from '../../constants';
import { AuthTokenDecoder, IDecodedToken } from '../../helpers/Decoding';
import ProofsService from './ProofsService';
import { IProofEvent } from '../../interfaces';

const bioIdEndpoint = getEnv().URLS.BIOMETRIC_API_ENDPOINT;

export default class BioIdService {
  /**
   * Verify the user through BioID
   * @param token bearer token for BioID API authentication
   * @param imagePath imagePath of the image which needs to be sent
   * @param proofEvent The proof event object to submit after successful verification
   * @return boolean
   */
  public static async verifyBioid(token: string, imagePath: string, proofEvent: IProofEvent) {
    const url = `${bioIdEndpoint}/bioid/verify`;

    const formData = new FormData();
    formData.append('image', fs.createReadStream(imagePath));

    try {
      await axios.post(url, formData, {
        headers: _.merge(formData.getHeaders(), { Authorization: `Bearer ${token}`}),
        params: {
          bcid: this.generateBcid(token)
        }
      });
    } catch (error) {
      console.error(error);

      // TODO - if biometric verification fails, what should happen
      throw error;
    }
    // Every biometric
    await ProofsService.createProofEvent(token, proofEvent);
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
}
