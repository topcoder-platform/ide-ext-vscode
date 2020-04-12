import * as _ from 'lodash';
import axios from 'axios';
import * as constants from '../constants';
import { getEnv} from '../config';
import {AuthTokenDecoder, IDecodedToken} from '../helpers/Decoding';
export default class SessionService {
   /**
    * Create new secure session with "Pairing" status and return its id
    * @param token user's access token
    * @return new secure session id
    */
   public static async generateSecureSessionId(token: string) {
      const decodedToken: IDecodedToken = AuthTokenDecoder.decode(token);
      const url = getEnv().URLS.SECURE_SESSION_HOST + '/sessions';
      try {
         const { data} = await axios.post(url, {
            userId: decodedToken.userId,
            status: 'Pairing'
         }, {
            headers: { Authorization: `Bearer ${token}`}
         });
         return data.id;
      } catch (err) {
         console.error(err);
         throw err;
      }
   }
   /**
    * Check if secure session status has changed to Active
    * @param token user's access token
    * @param sessionId id of the session
    * @return boolean, true if status is Active
    */
   public static async checkForStatusUpdate(token: string, sessionId: string) {
      const url = getEnv().URLS.SECURE_SESSION_HOST + `/sessions/${sessionId}`;
      try {
         const { data } = await axios.get(url, {
            headers: { Authorization: `Bearer ${token}`}
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
      const url = getEnv().URLS.SECURE_SESSION_HOST + `/sessions/${sessionId}`;
      try {
      const { data } = await axios.patch(url, {
         status: constants.sessionTimedOutStatus
      }, {
         headers: { Authorization: `Bearer ${token}`}
      });
      return data;
     } catch (err) {
      console.error(err);
      throw err;
     }

   }
}
