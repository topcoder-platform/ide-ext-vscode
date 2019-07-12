import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';
import * as constants from '../../constants';
import ChallengeService from '../../services/ChallengeService';
import { v3Token, challenges, submitSuccessResponse } from './testData';
import * as fs from 'fs';
import * as assert from 'assert';

suite('AuthService Unit tests', () => {
  suiteSetup(() => {
    const challengesUrl = url.parse(constants.activeChallengesUrl);
    const uploadSubmmissionUrl = url.parse(constants.uploadSubmmissionUrl);

    nock(/\.com/)
      .persist()
      .get(challengesUrl.path as string)
      .reply(200, challenges)
      .post(uploadSubmmissionUrl.path as string)
      .reply(200, submitSuccessResponse);
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: 30055150 }), 'utf8');
  });

  suiteTeardown(() => {
    nock.cleanAll();
    fs.unlinkSync('./.topcoderrc');
  });

  test('getActiveChallenges() should return the challenges list', async () => {
    const result = await ChallengeService.getActiveChallenges(v3Token.result.content.token);
    expect(result).to.be.deep.equal(challenges);
  });

  test('uploadSubmmission() success should return success response', async () => {
    const result = await ChallengeService.uploadSubmmission(v3Token.result.content.token, './');
    expect(result).to.be.deep.equal(submitSuccessResponse);
  });

  test('uploadSubmmission() with invalid token should throw error', async () => {
    assert.rejects(async () => await ChallengeService.uploadSubmmission('invalid_token', './'));
  });

  test('uploadSubmmission() in an nonexist workspace should throw error', async () => {
    assert.rejects(async () =>
      await ChallengeService.uploadSubmmission(v3Token.result.content.token, './non-exist-workspace'));
  });

  test('uploadSubmmission() in a workspace without .topcoderrc should throw error', async () => {
    fs.unlinkSync('./.topcoderrc');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(v3Token.result.content.token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: 30055150 }), 'utf8');
  });

  test('uploadSubmmission() in a workspace without .topcoderrc which does not has field challengeId should throw error',
    async () => {
      fs.writeFileSync('./.topcoderrc', JSON.stringify({}), 'utf8');
      assert.rejects(async () => await ChallengeService.uploadSubmmission(v3Token.result.content.token, './'));
      fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: 30055150 }), 'utf8');
    });
});
