import * as _ from 'lodash';
import axios from 'axios';
import { getEnv } from '../config';
import * as constants from '../constants';
import * as fs from 'fs';
import * as path from 'path';
import ignore, { Ignore } from 'ignore';
import {AuthTokenDecoder , IDecodedToken} from '../helpers/Decoding';
import Notification from '../helpers/Notification';
import * as archiver from 'archiver';
import submissionApi = require('@topcoder-platform/topcoder-submission-api-wrapper');

/**
 * Creates submission API client according to user preferences.
 * @return {Object}
 */
function getSubmissionApi() {
  return submissionApi({
    SUBMISSION_API_URL: getEnv().URLS.UPLOAD_SUBMISSION,
  });
}

/**
 * Gets single page response from paginated endpoints.
 *
 * @param {string} token User token
 * @param {string} url URL of the endpoint.
 * @param {number} page Page number to get.
 * @param {number} perPage Items per page.
 * @param {any} additionalParams any additional params (optional)
 * @return {Promise<any>} response of the specified page
 */
function getSinglePageResponse(
  token: string, url: string, page: number, perPage: number, additionalParams?: any
): Promise<any> {

  return axios.get(url, {
    headers: { Authorization: `Bearer ${token}` },
    params: { ...additionalParams, page, perPage }
  });
}

/**
 * Gets responses for all pages, from paginated endpoints.
 *
 * @param {string} token User token
 * @param {string} url URL of the endpoint.
 * @param {any} params request params
 * @return {Promise<any[]>} concatenated responses
 */
async function getPaginatedResponse(
  token: string, url: string, params?: any
): Promise<any[]> {

  const page = _.get(params, 'page', 1);
  const perPage = _.get(params, 'perPage', 100);
  const additionalParams = _.omit(params, ['page', 'perPage']);

  const firstPageResponse = await getSinglePageResponse(token, url, page, perPage, additionalParams);
  const firstPageItems: any[] = _.get(firstPageResponse, 'data', []);
  const totalPages = firstPageResponse.headers['x-total-pages'];
  if (totalPages > page) {
    const pageNumRange = Array.from({ length: totalPages - page }, (el, idx) => idx + page + 1);
    const responses = await Promise.all(
      pageNumRange.map((pageNum) => getSinglePageResponse(token, url, pageNum, perPage, additionalParams))
    );
    return firstPageItems.concat(...responses.map((r) => r.data));
  }
  return firstPageItems;
}

/**
 * Interacts with challenges APIs
 */
export default class ChallengeService {

  /**
   * Gets the review type
   * @param reviewId review identifer
   * @param token user token
   */
  public static async getReviewType(reviewId: string, token: string) {
    const url = `${getEnv().URLS.REVIEW_TYPES}/${reviewId}`;
    try {
      const { data } = await axios.get(url,
        {
          headers: { Authorization: `Bearer ${token}` }
        });
      return data;
    } catch (err) {
      console.log(err);
      throw new Error(constants.loadSubmissionFailed);
    }
  }

  /**
   * Gets the details of a submission
   * @param challengeId challenge identifier
   * @param token user token
   */
  public static async getSubmissionDetails(challengeId: string, token: string) {
    const decodedToken: IDecodedToken = AuthTokenDecoder.decode(token);
    const url = getEnv().URLS.MEMBER_SUBMISSION
      .replace('{challengeId}', challengeId)
      .replace('{memberId}', decodedToken.userId);
    try {
      const { data } = await axios.get(url,
        {
          headers: { Authorization: `Bearer ${token}` }
        });
      return data;
    } catch (err) {
      console.log(err);
      throw new Error(constants.loadSubmissionFailed);
    }
  }

  /**
   * Get the artifacts in a submission
   * @param submissionId submission identifier
   * @param token user token
   */
  public static async getSubmissionArtifacts(submissionId: string, token: string) {
    const url = getEnv().URLS.SUBMISSION_ARTIFACTS
      .replace('{submissionId}', submissionId);

    try {
      const { data } = await axios.get(url,
        {
          headers: { Authorization: `Bearer ${token}` }
        });
      return data;
    } catch (err) {
      throw new Error(constants.loadSubmissionFailed);
    }
  }

  /**
   * Gets the stream to download to disk an artifact
   * @param submissionId Submission identifier
   * @param artifactId Artifact identifier
   * @param token User token
   */
  public static async downloadArtifact(submissionId: string, artifactId: string, token: string) {
    const url = getEnv().URLS.DOWNLOAD_SUBMISSION
      .replace('{submissionId}', submissionId)
      .replace('{artifactId}', artifactId);
    try {
      const { data } = await axios.get(url,
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: 'stream'
        });
      return data;
    } catch (err) {
      throw new Error(constants.artifactDownloadFailed);
    }
  }

  /**
   * Get the list of current active challenges.
   * @param savedToken
   * @return The challenges.
   */
  public static async getActiveChallenges(savedToken: string) {
    try {
      const { data } = await axios.get(getEnv().URLS.ACTIVATE_CHALLENGES,
        {
          headers: { Authorization: `Bearer ${savedToken}` }
        });
      return data;
    } catch (err) {
      throw new Error(constants.loadOpenChallengesFailedMessage);
    }
  }

  /**
   * Get the details of a valid challenge
   * @param challengeId - The id of the challenge
   * @param savedToken - A valid user auth token
   * @return The challenge details
   * @throws if challenge does not exist
   */
  public static async getChallengeDetails(challengeId: string, savedToken: string) {
    try {
      const url = `${getEnv().URLS.CHALLENGE_DETAILS}/${challengeId}`;
      const { data } = await axios.get(url, {
        headers: { Authorization: `Bearer ${savedToken}` }
      });
      return data;
    } catch (e) {
      throw new Error(constants.challengeNotFound);
    }
  }

  /**
   * Register this user for the given challenge
   * @param challengeId The ID of the challenge to register to
   * @param userToken The valid user JWT token
   */
  public static async registerUserForChallenge(challengeId: string, userToken: string) {
    try {
      return await axios.post(getEnv().URLS.CHALLENGE_REGISTRATION
        .replace('{challengeId}', challengeId), undefined, {
        headers: {
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (err) {
      throw new Error(constants.registrationFailedMessage);
    }
  }

  /**
   * Submit the workspace to topcoder challenge
   * @param savedToken
   * @param workspacePath
   * @return the response of submit endpoint
   */
  public static async uploadSubmmission(savedToken: string, workspacePath: string): Promise<any> {
    if (!workspacePath) {
      throw new Error(constants.emptyWorkspaceToSubmit);
    }
    if (!fs.existsSync(path.join(workspacePath, '.topcoderrc'))) {
      throw new Error(constants.missTopcoderrcFile);
    }
    const rcContent = fs.readFileSync(path.join(workspacePath, '.topcoderrc'), 'utf-8');
    let challengeId = '';
    try {
      challengeId = JSON.parse(rcContent).challengeId;
      if (typeof challengeId === 'number') {
        challengeId = challengeId + '';
      }
    } catch (err) {
      throw new Error(constants.inCorrectFormatTopcoderrc);
    }
    if (typeof challengeId !== 'string' || !(challengeId.trim())) {
      throw new Error(constants.missChallengeId);
    }
    /* First validate if user can submit: */
    // get challenge details if challenge exists
    const challengeDetails = await this.getChallengeDetails(challengeId, savedToken);
    // check if this user has registered for this challenge
    const decodedToken: IDecodedToken = AuthTokenDecoder.decode(savedToken);
    const registrants: any[] = _.get(challengeDetails, 'result.content.registrants', []);
    const hasUserRegistered = registrants.find((profile) => profile.handle === decodedToken.handle) !== undefined;
    if (!hasUserRegistered) {
      throw new Error(constants.userNotRegisteredForChallenge);
    }
    // check if this challenge is open for submission
    const phases: any[] = _.get(challengeDetails, 'result.content.phases', []);
    const isChallengeOpenForSubmission = phases.find((phase) => phase.type === 'Submission'
      && phase.status === 'Open') !== undefined;
    if (!isChallengeOpenForSubmission) {
      throw new Error(constants.submissionPhaseNotOpen);
    }
    /* Proceed with submission */
    const ig = ignore();
    if (fs.existsSync(path.join(workspacePath, '.gitignore'))) {
      // load the .gitignore and add .git folder
      ig.add(fs.readFileSync(path.join(workspacePath, '.gitignore')).toString()).add('.git');
    } else {
      // always ignore .git folder
      ig.add('.git');
    }
    // get all files which not ignored
    const filesToSubmit = this.listAllFilesInDir(workspacePath, workspacePath, ig);
    // zip all files and save to local temp file
    const zipFilePath = path.join(workspacePath, 'submit.zip');
    await this.zipFiles(workspacePath, filesToSubmit, zipFilePath);
    // submit the file to topcoder endpoint
    let response;
    try {
      response = await this.submitFileToChallenge(zipFilePath, challengeId, savedToken);
    } catch (e) {
      throw new Error(constants.challengeSubmissionFailedMessage);
    } finally {
      // delete the zip local temp file
      if (fs.existsSync(zipFilePath)) {
        fs.unlinkSync(zipFilePath);
      }
    }
    return response;
  }

  /**
   * Retrieve the list of active challenges for the given user.
   * @param token The user JWT
   */
  public static async getActiveChallengesOfUser(token: string) {
    try {
      const profile: IDecodedToken = AuthTokenDecoder.decode(token);
      const url = getEnv().URLS.MEMBER_CHALLENGES
        .replace('{memberId}', profile.handle);
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return _.get(data, 'result.content');
    } catch (err) {
      throw new Error(constants.userChallengesLoadFailedMessage);
    }
  }

  /**
   * Initialize the current workspace at the root folder with a .topcoderrc file
   * @param workspacePath The current workspacePath
   * @param challengeId The challenge id to write to the .topcoderrc file
   */
  public static async initializeWorkspace(workspacePath: string, challengeId: string) {
    return new Promise<void>((resolve, reject) => {
      fs.writeFile(path.join(workspacePath, '.topcoderrc'), JSON.stringify({
        challengeId: `${challengeId}`
      }), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Gets the organization available repositories
   */
  public static async getOrganizationRepositories() {
    try {
      const { data } = await axios.get(constants.organizationRepoUrl);
      return data;
    } catch (err) {
      throw new Error(constants.failedToLoadOrganizationRepos);
    }
  }

  /**
   * Fetches projects from API endpoint.
   *
   * @param {string} token User's JWT for requests
   * @return {Promise<any[]>} projects from response
   */
  public static async fetchProjects(token: string): Promise<any[]> {
    try {
      const url = getEnv().URLS.FETCH_PROJECTS;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return data;
    } catch (err) {
      Notification.showErrorNotification(constants.couldntFetchProjectsErrMsg);
      throw new Error(constants.couldntFetchProjectsErrMsg);
    }
  }

  /**
   * Fetches challenge tracks from API endpoint.
   *
   * @param {string} token User's JWT for requests
   * @return {Promise<any[]>} challenge tracks from response
   */
  public static async fetchChallengeTracks(token: string): Promise<any[]> {
    try {
      const url = getEnv().URLS.FETCH_CHALLENGE_TRACKS;
      return await getPaginatedResponse(token, url);
    } catch (err) {
      Notification.showErrorNotification(constants.couldntFetchChallengeTracksErrMsg);
      // throw new Error(constants.couldntFetchChallengeTracksErrMsg);
      throw err;
    }
  }

  /**
   * Fetches challenge types from API endpoint.
   *
   * @param {string} token User's JWT for requests
   * @return {Promise<any[]>} challenge types from response
   */
  public static async fetchChallengeTypes(token: string): Promise<any[]> {
    try {
      const url = getEnv().URLS.FETCH_CHALLENGE_TYPES;
      return await getPaginatedResponse(token, url);
    } catch (err) {
      Notification.showErrorNotification(constants.couldntFetchChallengeTypesErrMsg);
      // throw new Error(constants.couldntFetchChallengeTypesErrMsg);
      throw err;
    }
  }

  /**
   * Fetches platforms from API endpoint.
   *
   * @param {string} token User's JWT for requests
   * @return {Promise<any[]>} platforms from response
   */
  public static async fetchPlatforms(token: string): Promise<any[]> {
    try {
      const url = getEnv().URLS.FETCH_PLATFORMS;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return _.get(data, 'result.content', []);
    } catch (err) {
      Notification.showErrorNotification(constants.couldntFetchPlatformsErrMsg);
      throw new Error(constants.couldntFetchPlatformsErrMsg);
    }
  }

  /**
   * Fetches technologies from API endpoint.
   *
   * @param {string} token User's JWT for requests
   * @return {Promise<any[]>} technologies from response
   */
  public static async fetchTechnologies(token: string): Promise<any[]> {
    try {
      const url = getEnv().URLS.FETCH_TECHNOLOGIES;
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return _.get(data, 'result.content', []);
    } catch (err) {
      Notification.showErrorNotification(constants.couldntFetchTechnologiesErrMsg);
      throw new Error(constants.couldntFetchTechnologiesErrMsg);
    }
  }

  /**
   * Fetches available challenge tags using `fetchPlatforms` and `fetchTechnologies`.
   * Challenge tags are obtained by adding of both platforms and technologies.
   *
   * @param {string} token User's JWT for requests
   * @return {Promise<any[]>} available challenge tags
   */
  public static async fetchTags(token: string): Promise<any[]> {
    const platforms = await ChallengeService.fetchPlatforms(token);
    const technologies = await ChallengeService.fetchTechnologies(token);
    const activeTechnologies = technologies.filter((t: any) => t.status.description === 'Active');
    return [
      ...platforms.map((p: any) => _.pick(p, ['id', 'name'])),
      ...activeTechnologies.map((t: any) => _.pick(t, ['id', 'name']))
    ];
  }

  /**
   * Fetches challenge timelines from API endpoint.
   *
   * @param {string} token User's JWT for requests
   * @param {any} filter object to apply filtering, consists of keys/values
   * @return {Promise<any[]>} challenge timelines from response
   */
  public static async fetchChallengeTimelines(token: string, filter?: any): Promise<any[]> {
    try {
      const url = getEnv().URLS.FETCH_CHALLENGE_TIMELINES;
      return await getPaginatedResponse(token, url, filter);
    } catch (err) {
      Notification.showErrorNotification(constants.couldntFetchChallengeTimelinesErrMsg);
      // throw new Error(constants.couldntFetchChallengeTimelinesErrMsg);
      throw err;
    }
  }

  /**
   * Fetches timeline templates from API endpoint.
   *
   * @param {string} token User's JWT for requests
   * @param {any} filter object to apply filtering, consists of keys/values
   * @return {Promise<any[]>} timeline templates from response
   */
  public static async fetchTimelineTemplates(token: string, filter?: any): Promise<any[]> {
    try {
      const url = getEnv().URLS.FETCH_TIMELINE_TEMPLATES;
      return await getPaginatedResponse(token, url, filter);
    } catch (err) {
      Notification.showErrorNotification(constants.couldntFetchTimelineTemplatesErrMsg);
      // throw new Error(constants.couldntFetchTimelineTemplatesErrMsg);
      throw err;
    }
  }

  /**
   * Creates a challenge with Draft status.
   *
   * @param {string} token User's JWT for requests
   * @param {any} body request body i.e. challenge object
   * @return {Promise<any>} created challenge
   */
  public static async draftChallenge(token: string, body: any): Promise<any> {
    try {
      const { data } = await axios.post(getEnv().URLS.CONTEST_CREATION, { ...body, status: 'Draft' }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      return data;
    } catch (err) {
      const errMsgFromResponse = _.get(err, 'response.data.message', '');
      const errMsg = constants.couldntCreateChallengeErrMsg + errMsgFromResponse;
      Notification.showErrorNotification(errMsg);
      // throw new Error(errMsg);
      throw err;
    }
  }

  /**
   * Activates a challenge.
   *
   * @param {string} token User's JWT for requests
   * @param {string} challengeId id of the challenge
   * @return {Promise<any>} response
   */
  public static async activateChallenge(token: string, challengeId: string): Promise<any> {
    const url = getEnv().URLS.CONTEST_ACTIVATION.replace('{challengeId}', challengeId);
    try {
      return await axios.patch(url, { status: 'Active' }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (err) {
      const errMsgFromResponse = _.get(err, 'response.data.message', '');
      const errMsg = constants.couldntActivateChallengeErrMsg + errMsgFromResponse;
      Notification.showErrorNotification(errMsg);
      // throw new Error(errMsg);
      throw err;
    }
  }

  /**
   * Assign current user as copilot to challenge.
   *
   * @param {string} token User's JWT for requests
   * @param {string} challengeId id of the challenge
   * @return {Promise<any>} created challenge
   */
  public static async assignCopilot(token: string, challengeId: string): Promise<any> {
    try {
      // handle of the current user
      const memberHandle = AuthTokenDecoder.decode(token).handle;
      // get resources to find copilot role id
      const resourceRoles = await getPaginatedResponse(token, getEnv().URLS.GET_RESOURCES);
      const roleId = _.find(resourceRoles, (r) => r.name === 'Copilot').id;
      // assign the copilot
      return await axios.post(getEnv().URLS.ASSIGN_COPILOT, { challengeId, memberHandle, roleId  }, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (err) {
      const errMsgFromResponse = _.get(err, 'response.data.message', '');
      const errMsg = constants.couldntAsssignCopilotErrMsg + errMsgFromResponse;
      Notification.showErrorNotification(errMsg);
      // throw new Error(errMsg);
      throw err;
    }
  }

  /**
   * Get all files list in the workspace which not ignored
   * @param workspaceRootDir the workspace path to submit
   * @param currentDir current directory
   * @param ig the ignore instance
   * @return the files list
   */
  private static listAllFilesInDir(workspaceRootDir: string, currentDir: string, ig: Ignore): string[] {
    let results: string[] = [];
    fs.readdirSync(currentDir).forEach((file) => {
      file = path.join(currentDir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        if (!ig.ignores(path.relative(workspaceRootDir, file))) {
          results = results.concat(this.listAllFilesInDir(workspaceRootDir, file, ig));
        }
      } else {
        if (!ig.ignores(path.relative(workspaceRootDir, file))) {
          results.push(file);
        }
      }
    });
    return results;
  }

  /**
   * Zip all files
   * @param workspaceRootDir the workspace path to submit
   * @param filesToZip the files to zip
   * @param zipFilePath zip file path
   */
  private static async zipFiles(workspaceRootDir: string, filesToZip: string[], zipFilePath: string) {
    return new Promise<void>((resolve, reject) => {
      const output = fs.createWriteStream(zipFilePath);
      const archive = archiver('zip');
      // listen for all archive data to be written
      output.on('close', () => resolve());
      archive.on('warning', (warning) => console.log(`zip workspace warning: ${warning.toString()}`));
      archive.on('error', (err) => {
        console.log(`zip workspace error: ${err.toString()}`);
        reject(err);
      });
      // pipe archive data to the file
      archive.pipe(output);
      // append files from stream
      filesToZip.forEach((file) => {
        archive.append(fs.createReadStream(file), { name: path.relative(workspaceRootDir, file) });
      });
      // finalize the archive
      archive.finalize();
    });
  }

  /**
   * Submit the file to topcoder challenge
   * @param filePath the file path
   * @param challengeId the challenge id
   * @param savedToken the token
   * @return the response of submit endpoint
   */
  private static async submitFileToChallenge(filePath: string, challengeId: string, savedToken: string): Promise<any> {
    const decodedToken: IDecodedToken = AuthTokenDecoder.decode(savedToken);
    const submissionData = {
      submission: {
        name: path.basename(filePath),
        data: fs.createReadStream(filePath)
      },
      type: constants.submitType,
      challengeId,
      memberId: decodedToken.userId
    };
    return await getSubmissionApi()
      .createSubmission(submissionData, savedToken);
  }
}
