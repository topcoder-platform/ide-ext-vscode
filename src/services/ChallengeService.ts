import * as _ from 'lodash';
import axios from 'axios';
import * as constants from '../constants';

/**
 * Interacts with challenges APIs
 */
export default class ChallengeService {

    /**
     * Get the list of current active challenges.
     * @param savedToken
     * @return The challenges.
     */
    public static async getActiveChallenges(savedToken: string) {
        const { data } = await axios.get(constants.activeChallengesUrl, { headers: { 'Authorization': `Bearer ${savedToken}` } });

        return data;
    }
}
