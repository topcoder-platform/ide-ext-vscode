import { expect } from 'chai';
import * as nock from 'nock';
import * as url from 'url';

import { getEnv } from '../../config';
import * as constants from '../../constants';
import ChallengeService from '../../services/ChallengeService';
import {
  oauthToken, challenges, submitSuccessResponse, validChallengeDetails,
  unregisteredChallengeDetails, closedForSubmissionChallengeDetails,
  memberChallengesList, submissionDetails, artifactsDetails,
  orgRepos
} from './testData';
import * as fs from 'fs';
import * as assert from 'assert';

const defaultChallengeId = 30055150;
const validChallengeId = 30052924;
const unregisteredChallengeId = 30052925;
const closedForSubmissionChallengeId = 30052926;
const invalidChallengeId = 1234;
const validSubmissionId = 12345;
const validArtifactId = 123467;

suite('ChallengeService Unit tests', () => {
  suiteSetup(() => {
    const env = getEnv();
    const orgsPath = url.parse(constants.organizationRepoUrl);
    const challengesUrl = url.parse(env.URLS.ACTIVATE_CHALLENGES);
    const uploadSubmmissionUrl = url.parse(
      env.URLS.UPLOAD_SUBMISSION + '/submissions');
    const invalidChallengeDetailsUrl = url.parse(
      env.URLS.CHALLENGE_DETAILS + `/${invalidChallengeId}`);
    const validChallengeDetailsUrl = url.parse(
      env.URLS.CHALLENGE_DETAILS + `/${validChallengeId}`);
    const closedChallengeDetailsUrl = url.parse(
      env.URLS.CHALLENGE_DETAILS + `/${closedForSubmissionChallengeId}`);
    const unregisteredChallengeDetailsUrl = url.parse(
      env.URLS.CHALLENGE_DETAILS + `/${unregisteredChallengeId}`);
    const memberChallengesUrl = url.parse(
      env.URLS.MEMBER_CHALLENGES.replace('{memberId}', 'lazybaer'));
    const submissionUrl = url.parse(
      env.URLS.MEMBER_SUBMISSION
        .replace('{challengeId}', `${validChallengeId}`).replace('{memberId}', '23225544'));
    const artifactsUrl = url.parse(env.URLS.SUBMISSION_ARTIFACTS.replace('{submissionId}', `${validSubmissionId}`));
    const downloadArtifactUrl = url.parse(env.URLS.DOWNLOAD_SUBMISSION.replace('{submissionId}', `${validSubmissionId}`)
      .replace('{artifactId}', `${validArtifactId}`));

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
      .reply(200, { result: { content: memberChallengesList } })
      .get(submissionUrl.path as string)
      .reply(200, submissionDetails)
      .get(orgsPath.path as string)
      .reply(200, orgRepos)
      .get(artifactsUrl.path as string)
      .reply(200, artifactsDetails)
      .get(downloadArtifactUrl.path as string)
      .reply(200, (uri: any, requestBody: any) => {
        return fs.createReadStream('info.txt');
      }, { 'content-disposition': 'info.txt' });
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  suiteTeardown(() => {
    nock.cleanAll();
    fs.unlinkSync('./.topcoderrc');
  });

  test('getActiveChallenges() should return the challenges list', async () => {
    const result = await ChallengeService.getActiveChallenges(oauthToken.access_token);
    expect(result).to.be.deep.equal(challenges);
  });

  test('uploadSubmmission() success should return success response', async () => {
    const folder = './tmp-test'; // we create a new folder to prevent trying to zip existing large folders
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }

    fs.writeFileSync(`${folder}/.topcoderrc`, JSON.stringify({ challengeId: validChallengeId }), 'utf8');
    ChallengeService.uploadSubmmission(oauthToken.access_token, folder).then((result) => {
      expect(result.body).to.be.deep.equal(submitSuccessResponse);
    });

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
      await ChallengeService.uploadSubmmission(oauthToken.access_token, './non-exist-workspace'));
  });

  test('uploadSubmmission() in a workspace without .topcoderrc should throw error', async () => {
    fs.unlinkSync('./.topcoderrc');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(oauthToken.access_token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('uploadSubmmission() in a workspace without .topcoderrc which does not has field challengeId should throw error',
    async () => {
      fs.writeFileSync('./.topcoderrc', JSON.stringify({}), 'utf8');
      assert.rejects(async () => await ChallengeService.uploadSubmmission(oauthToken.access_token, './'));
      fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
    });

  test('uploadSubmmission() to an invalid challenge should throw error', async () => {
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: invalidChallengeId }), 'utf8');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(oauthToken.access_token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('uploadSubmmission() to an unregistered challenge should throw error', async () => {
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: unregisteredChallengeId }), 'utf8');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(oauthToken.access_token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('uploadSubmmission() to a challenge closed for submission should throw error', async () => {
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: closedForSubmissionChallengeId }), 'utf8');
    assert.rejects(async () => await ChallengeService.uploadSubmmission(oauthToken.access_token, './'));
    fs.writeFileSync('./.topcoderrc', JSON.stringify({ challengeId: defaultChallengeId }), 'utf8');
  });

  test('getChallengeDetails() should return the challenge details', async () => {
    const result = await ChallengeService.getChallengeDetails(`${validChallengeId}`, oauthToken.access_token);
    expect(result.result.content).to.be.deep.equal(validChallengeDetails);
  });

  test('getChallengeDetails() should throw exception if challenge doesnt exist', async () => {
    assert.rejects(async () =>
      await ChallengeService.getChallengeDetails(`${invalidChallengeId}`, oauthToken.access_token));
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
    const data = await ChallengeService.getActiveChallengesOfUser(oauthToken.access_token);
    expect(data).to.be.deep.eq(memberChallengesList);
  });
  test('get active challenges of user should fail with invalid token', () => {
    assert.rejects(async () => { await ChallengeService.getActiveChallengesOfUser(''); });
  });

  test('getSubmissionDetails() should return the submission details', async () => {
    const result = await ChallengeService.getSubmissionDetails(`${validChallengeId}`, oauthToken.access_token);
    expect(result).to.be.deep.equal(submissionDetails);
  });
  test('getSubmissionDetails() get submission details should fail with invalid token', async () => {
    assert.rejects(async () => { await ChallengeService.getSubmissionDetails('', ''); });
  });

  test('getSubmissionArtifacts() should return the submission artifacts', async () => {
    const result = await ChallengeService.getSubmissionArtifacts(`${validSubmissionId}`, oauthToken.access_token);
    expect(result).to.be.deep.equal(artifactsDetails);
  });
  test('getSubmissionArtifacts() get submission artifacts should fail with invalid token', async () => {
    assert.rejects(async () => { await ChallengeService.getSubmissionDetails('', ''); });
  });
  test('downloadArtifact() should return a file', async () => {
    const result = await ChallengeService.downloadArtifact(`${validSubmissionId}`,
      `${validArtifactId}`, oauthToken.access_token);
    expect(result.headers['content-disposition']).to.contain('info.txt');
  });
  test('downloadArtifact() should fail with invalid token', async () => {
    assert.rejects(async () => { await ChallengeService.downloadArtifact('', '', ''); });
  });

  test('getOrganizationRepositories() should return the organization repositories', async () => {
    const result = await ChallengeService.getOrganizationRepositories();
    expect(result).to.be.deep.equal(orgRepos);
  });

  test('getOrganizationRepositories() should throw exception if any error occurs', async () => {
    assert.rejects(async () =>
      await ChallengeService.getOrganizationRepositories());
  });
});
