import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';
import * as constants from '../../constants';
import ChallengeService from '../../services/ChallengeService';
import { v3Token, challenges } from './testData';

suite('AuthService Unit tests', () => {
    suiteSetup(() => {
        const challengesUrl = url.parse(constants.activeChallengesUrl);

        nock(/\.com/)
        .persist()
        .get(<string>challengesUrl.path)
        .reply(200, challenges);
    });

    suiteTeardown(() => {
        nock.cleanAll();
    });

    test('getActiveChallenges() should return the challenges list', async () => {
        const result = await ChallengeService.getActiveChallenges(v3Token.result.content.token);
        expect(result).to.be.deep.equal(challenges);
    });
});
