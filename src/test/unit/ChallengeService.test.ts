import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';
import * as mock from 'mock-fs';
import * as constants from '../../constants';
import ChallengeService from '../../services/ChallengeService';
import { v3Token, challenges, createSubmissionResponse } from './testData';

const archivePath = 'tcvscode/submission.zip';
const challengeId = 333000;

suite('AuthService Unit tests', () => {
    suiteSetup(() => {
        const challengesUrl = url.parse(constants.activeChallengesUrl);
        const uploadSubmissionUrl = url.parse(constants.challengeSubmissionUrl);

        nock(/\.com/)
        .persist()
        .get(<string>challengesUrl.path)
        .reply(200, challenges)
        .post(<string>uploadSubmissionUrl.path)
        .reply(200, createSubmissionResponse);
    });

    suiteTeardown(() => {
        nock.cleanAll();
    });

    setup(() => {
        mock({
            [archivePath]: ''
        });
    });

    teardown(() => {
        mock.restore();
    });

    test('getActiveChallenges() should return the challenges list', async () => {
        const result = await ChallengeService.getActiveChallenges(v3Token.result.content.token);
        expect(result).to.be.deep.equal(challenges);
    });

    test('uploadSubmission() should upload the file', async () => {
        const result = await ChallengeService.uploadSubmission(challengeId, v3Token.result.content.token, archivePath);
        expect(result).to.be.deep.equal(createSubmissionResponse);
    });

    test('uploadSubmission() should fail with missing file', async () => {
        try {
            await ChallengeService.uploadSubmission(challengeId, v3Token.result.content.token, 'invalid');
        } catch (err) {
            expect(err.code).to.equal('ENOENT');
            return;
        }
        expect.fail('Should not get here');
    });

    test('uploadSubmission() should fail with invalid token', async () => {
        try {
            await ChallengeService.uploadSubmission(challengeId, 'invalid', archivePath);
        } catch (err) {
            expect(err.message).to.eql(constants.userNotLoggedError);
            return;
        }
        expect.fail('Should not get here');
    });
});
