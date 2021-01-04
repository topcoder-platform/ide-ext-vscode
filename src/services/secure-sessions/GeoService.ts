import axios from 'axios';
import * as publicIp from 'public-ip';
import { getEnv } from '../../config';

const geoIpApiEndpoint = getEnv().URLS.GEOIP_API_ENDPOINT;

export default class GeoService {
  public static async getGeocoordinatesFromIP(token: string) {
    const url = `${geoIpApiEndpoint}/geoip`;

    const ipAddress = await publicIp.v4();

    try {
      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}`},
        params: {
          ipAddress
        }
      });

      return response.data.location;
    } catch (error) {
      console.error(error);

      // TODO - if getting geolocation fails, what should happen
      throw error;
    }
  }
}
