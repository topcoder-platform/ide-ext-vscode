import * as jwt from 'jsonwebtoken';

export class AuthTokenDecoder {
   /**
    * Decode authentication token
    * Token received from a device auth flow has userId, email, role etc... as urls
    * Purpose of this function is to extract required keys from those urls
    */
   public static decode(token: string): IDecodedToken {
      const decodedToken: any = jwt.decode(token);
      const urlRegex = new RegExp(
         /((http|https):\/\/)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_//=]*)/);
      for (const key of Object.keys(decodedToken)) {
         const url = key.match(urlRegex);
         if (!url || url.length === 0) { continue; }
         const trueKey = url[0].substr(url[0].lastIndexOf('/') + 1);
         decodedToken[trueKey] = decodedToken[key];
         delete decodedToken[key];
      }
      return decodedToken;
   }
}
export interface IDecodedToken {
   userId: string;
   email: string;
   handle: string;
   roles: string[];
//   iss?: string;
//   aud?: string[];
//   iat?: number;
//   exp?: number;
//   azp?: string;
//   scope?: string;
}
