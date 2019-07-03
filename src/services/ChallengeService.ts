import * as _ from 'lodash';
import axios from 'axios';
import * as fs from 'fs';
import * as FormData from 'form-data';
import * as jwt from 'jsonwebtoken';
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

    /**
     * Upload the current workspace.
     * @param token
     */
    public static async uploadSubmission(challengeId: string | number, token: string, archivePath: string) {
        const decodedToken: any = jwt.decode(token);

        if (!decodedToken) {
            throw new Error(constants.userNotLoggedError);
        }

        const { userId } = decodedToken;

        const stream = fs.createReadStream(archivePath);

        const form = new FormData();

        form.append('submission', stream);
        form.append('type', 'ContestSubmission');
        form.append('memberId', userId);
        form.append('challengeId', challengeId);

        const formHeaders = form.getHeaders();

        const { data } = await axios.post(constants.challengeSubmissionUrl, form, {
            headers: {
                ...formHeaders,
                Authorization: `Bearer ${token}`
            },
        });

        return data;
    }
}
