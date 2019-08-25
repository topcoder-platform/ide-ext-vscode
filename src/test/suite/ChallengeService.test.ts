import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';
import * as constants from '../../constants';
import ChallengeService from '../../services/ChallengeService';
import {
  v3Token, challenges, submitSuccessResponse, validChallengeDetails,
  unregisteredChallengeDetails, closedForSubmissionChallengeDetails,
  memberChallengesList
} from './testData';
import * as fs from 'fs';
import * as assert from 'assert';

const defaultChallengeId = 30055150;
const validChallengeId = 30052924;
const unregisteredChallengeId = 30052925;
const closedForSubmissionChallengeId = 30052926;
const invalidChallengeId = 1234;

suite('ChallengeService Unit tests', () => {
  suiteSetup(() => {
    const challengesUrl = url.parse(constants.activeChallengesUrl);
    const uploadSubmmissionUrl = url.parse(constants.uploadSubmmissionUrl + '/submissions');
    const invalidChallengeDetailsUrl = url.parse(constants.challengeDetailsUrl + `/${invalidChallengeId}`);
    const validChallengeDetailsUrl = url.parse(constants.challengeDetailsUrl + `/${validChallengeId}`);
    const closedChallengeDetailsUrl = url.parse(constants.challengeDetailsUrl + `/${closedForSubmissionChallengeId}`);
    const unregisteredChallengeDetailsUrl = url.parse(constants.challengeDetailsUrl + `/${unregisteredChallengeId}`);
    const memberChallengesUrl = url.parse(constants.memberChallengesUrl.replace('{memberId}', 'mess'));
    nock(/\.com/)
      .persist()
      .get(challengesUrl.path as string)
      .reply(200, challenges)
      .post(uploadSubmmissionUrl.path as string)
      .reply(200, submitSuccessResponse)
      .get(invalidChallengeDetailsUrl.path as string)
      .reply(404, {})
      .get(validChallengeDetailsUrl.path as string)
      .reply(200, { result: { content: validChallengeDetails } })
      .get(unregisteredChallengeDetailsUrl.path as string)
      .reply(200, { result: { content: unregisteredChallengeDetails } })
      .get(closedChallengeDetailsUrl.path as string)
      .reply(200, { result: { content: closedForSubmissionChallengeDetails } })
      .get(memberChallengesUrl.path as string)
      .reply(200, { result: { content: memberChallengesList } });
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
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
    const folder = './tmp-test'; // we create a new folder to prevent trying to zip existing large folders
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }

    fs.writeFileSync(`${folder}/.topcoderrc`, JSON.stringify({ challengeId: validChallengeId }), 'utf8');
    const result = await ChallengeService.uploadSubmmission(v3Token.result.content.token, folder);
    expect(result.body).to.be.deep.equal(submitSuccessResponse);

    try {
      fs.unlinkSync(`${folder}/.topcoderrc`);
      fs.unlinkSync(folder);
    } catch (err) {
      // do nothing
    }
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
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('uploadSubmmission() in a workspace without .topcoderrc which does not has field challengeId should throw error',
    async () => {
      fs.writeFileSync('./.topcoderrc', JSON.stringify({}), 'utf8');
      assert.rejects(async () => await ChallengeService.uploadSubmmission(v3Token.result.content.token, './'));
      fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
    });

  test('uploadSubmmission() to an invalid challenge should throw error', async () => {
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: invalidChallengeId }), 'utf8');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(v3Token.result.content.token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('uploadSubmmission() to an unregistered challenge should throw error', async () => {
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: unregisteredChallengeId }), 'utf8');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(v3Token.result.content.token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('uploadSubmmission() to a challenge closed for submission should throw error', async () => {
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: closedForSubmissionChallengeId }), 'utf8');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(v3Token.result.content.token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('getChallengeDetails() should return the challenge details', async () => {
    const result = await ChallengeService.getChallengeDetails(`${validChallengeId}`, v3Token.result.content.token);
    expect(result.result.content).to.be.deep.equal(validChallengeDetails);
  });

  test('getChallengeDetails() should throw exception if challenge doesnt exist', async () => {
    assert.rejects(async () =>
      await ChallengeService.getChallengeDetails(`${invalidChallengeId}`, v3Token.result.content.token));
  });

  test('register button should be invisible if user has registered', () => {
    const html = ChallengeService.generateHtmlFromChallengeDetails(validChallengeDetails, v3Token.result.content.token);
    expect(html).to.not.contain('id="registerButton"');
  });

  test('register button should be visible if user can register', () => {
    const html = ChallengeService
      .generateHtmlFromChallengeDetails(unregisteredChallengeDetails, v3Token.result.content.token);
    expect(html).to.contain('id="registerButton"');
  });
  test('initialize workspace button should be available', () => {
    const html = ChallengeService
      .generateHtmlFromChallengeDetails(validChallengeDetails, v3Token.result.content.token);
    expect(html).to.contain('id="initWorkspaceButton"');
  });
  test('initialize workspace action should create .topcoderrc file in root directory of workspace',
    async () => {
      const folder = './tmp-test';
      const challengeId = '12345678';
      await ChallengeService.initializeWorkspace(folder, challengeId);
      expect(fs.existsSync(`${folder}/.topcoderrc`)).to.equal(true);
      try {
        fs.unlinkSync(`${folder}/.topcoderrc`);
        fs.unlinkSync(folder);
      } catch (err) {
        // do nothing
      }
    });
  test('initialize workspace action should enter correct challenge id in .topcoderrc',
    async () => {
      const folder = './tmp-test';
      const challengeId = '87654321';
      await ChallengeService.initializeWorkspace(folder, challengeId);
      const value: any = JSON.parse(fs.readFileSync(`${folder}/.topcoderrc`).toString());
      expect(value.challengeId).to.eq(challengeId);
      try {
        fs.unlinkSync(`${folder}/.topcoderrc`);
        fs.unlinkSync(folder);
      } catch (err) {
        // do nothing
      }
    });
  test('get active challenges of user should return the challenges with valid token', async () => {
    const data = await ChallengeService.getActiveChallengesOfUser(v3Token.result.content.token);
    expect(data).to.be.deep.eq(memberChallengesList);
  });
  test('get active challenges of user should fail with invalid token', () => {
    assert.rejects(async () => { await ChallengeService.getActiveChallengesOfUser(''); });
  });
});
