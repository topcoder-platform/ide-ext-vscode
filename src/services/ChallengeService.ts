import * as _ from 'lodash';
import axios from 'axios';
import { getEnv } from '../config';
import * as constants from '../constants';
import * as fs from 'fs';
import * as path from 'path';
import ignore, { Ignore } from 'ignore';
import * as jwt from 'jsonwebtoken';
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
 * Interacts with challenges APIs
 */
export default class ChallengeService {

  /**
   * Gets the details of a submission
   * @param challengeId challenge identifier
   * @param token user token
   */
  public static async getSubmissionDetails(challengeId: string, token: string) {
    const decodedToken: any = jwt.decode(token);
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
    const decodedToken: any = jwt.decode(savedToken);
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
      const profile: any = jwt.decode(token);
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
    return new Promise((resolve, reject) => {
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
    return new Promise((resolve, reject) => {
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
    const decodedToken: any = jwt.decode(savedToken);
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
