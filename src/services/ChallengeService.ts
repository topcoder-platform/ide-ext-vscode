import * as _ from 'lodash';
import axios from 'axios';
import * as constants from '../constants';
import * as fs from 'fs';
import * as path from 'path';
import ignore, { Ignore } from 'ignore';
import * as jwt from 'jsonwebtoken';
import * as FormData from 'form-data';
import * as archiver from 'archiver';

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
    const { data } = await axios.get(constants.activeChallengesUrl,
      {
        headers: { Authorization: `Bearer ${savedToken}` }
      });

    return data;
  }

  /**
   * Generate html page content from challenges
   * @param challenges the challeges
   * @return the html page content
   */
  public static generateHtmlFromChallenges(challenges: any[]): string {
    return `<!doctype html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Topcoder: Open challenges</title>
      </head>
      <body>
        <table border="1" style="margin-bottom: 40px">
          <tr>
            <th>Challenge Name</th>
            <th>Challenge Type</th>
            <th>Number of registrants</th>
            <th>Prizes</th>
            <th>Current Phase</th>
          </tr>
          ${this.generateHtmlTableFromChallenges(challenges)}
        </table>
      </body>
      </html>`;
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
    } finally {
      // delete the zip local temp file
      if (fs.existsSync(zipFilePath)) {
        fs.unlinkSync(zipFilePath);
      }
    }
    return response;
  }

  /**
   * Generate html table content from challenges
   * @param challenges the challeges
   * @return the html table content
   */
  private static generateHtmlTableFromChallenges(challenges: any[]): string {
    return challenges
      .map((challenge: any) => {
        const filteredPhases = _.filter(challenge.currentPhases, (item) => item.phaseStatus === 'Open');
        return `<tr>
                  <td>${challenge.name}</td>
                  <td>${challenge.subTrack}</td>
                  <td>${challenge.numRegistrants}</td>
                  <td>${_.join(_.map(challenge.prizes, (x) => `\$${x}`), ', ')}</td>
                  <td>${_.join(_.map(filteredPhases, 'phaseType'), ', ')}</td>
                </tr>`;
      })
      .join('');
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
    const fd = new FormData();
    fd.append('submission', fs.createReadStream(filePath));
    fd.append('type', constants.submitType);
    fd.append('memberId', decodedToken.userId);
    fd.append('challengeId', challengeId);

    const { data } = await axios.post(constants.uploadSubmmissionUrl, fd, {
      headers: {
        ...fd.getHeaders(),
        'Authorization': `Bearer ${savedToken}`,
        'accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  }
}
