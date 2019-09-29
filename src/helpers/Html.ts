import * as constants from '../constants';
import * as _ from 'lodash';
import * as jwt from 'jsonwebtoken';
import packConfig from '../config/packs';

/**
 * Keeps all the logic to generate HTML for challenges
 */

export default class Html {

    /**
     * Generate html page content from reviews and artifacts
     * @param reviews the reviews with artifacts
     * @return the html page content
     */
    public static generateReviewArtifactsHtml(reviews: any) {
        return `<!doctype html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${constants.submissionDetailsPageTitle}</title>
        <style>
            td {
              padding: 10px;
            }
            th {
              /* Invert background and foreground for table header*/
              background-color: var(--vscode-editor-foreground) !important;
              color: var(--vscode-editor-background) !important;
              padding: 10px;
            }
        </style>
      </head>
      <body>
          ${this.generateHtmlTableFromReviews(reviews)}

        ${this.generateArtifactsUnorderedList(reviews)}
        <script>
        // enable communication with the extension via messaging.
        var vscode;

        (function () {
          vscode = acquireVsCodeApi();
        }());

        function downloadArtifact(submissionId, artifactId) {
          if (submissionId && artifactId) {
            vscode.postMessage({
              action: '${constants.webviewMessageActions.DOWNLOAD_ARTIFACT}',
              data: {
                submissionId,
                artifactId
              }
            });
          }
        }
      </script>
      </body>
      </html>`;
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
        <title>${constants.challengesPageTitle}</title>
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
        <script>
          // enable communication with the extension via messaging.
          var vscode;

          (function () {
            vscode = acquireVsCodeApi();
          }());

          function openChallenge(challengeId) {
            if (challengeId) {
              vscode.postMessage({
                action: '${constants.webviewMessageActions.DISPLAY_CHALLENGE_DETAILS}',
                data: {
                  challengeId
                }
              });
            }
          }
        </script>
      </body>
      </html>`;
    }

    /**
     * Construct HTML for display based on the challenge details available
     * @param challengeDetails Challenge details object
     * @return The HTML string of challenge details.
     */
    public static generateHtmlFromChallengeDetails(challengeDetails: any, userToken: string): string {
        return `
      <!doctype html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${constants.challengeDetailsPageTitle}</title>
          <style>
            td {
              padding-left: 3px;
            }
            th {
              /* Invert background and foreground for table header*/
              background-color: var(--vscode-editor-foreground) !important;
              color: var(--vscode-editor-background) !important;
            }
            button {
              background: #0681ff;
              width: 220px;
              color: white;
              border-color: transparent;
              cursor: pointer;
              height: 28px;
              border-radius: 4px;
            }
            #specifications span, #submission-guidelines span {
              /* Override inline styles */
              background-color: var(--vscode-editor-background) !important;
              color: var(--vscode-editor-foreground) !important;
            }
            .workspaceBtns {
              display: none;
            }
            .workspaceBtns.visible {
              display: block;
            }
          </style>
        </head>
        <body>
          <script>
            // enable communication with the extension via messaging.
            var vscode;

            (function () {
              vscode = acquireVsCodeApi();
            }());

            /**
             * Register user for the selected challenge
             */
            function registerForChallenge(challengeId){
              if(challengeId){
                vscode.postMessage({
                  action: '${constants.webviewMessageActions.REGISTER_FOR_CHALLENGE}',
                  data: {
                    challengeId
                  }
                });
              }
            }

            /**
             * Initialize the current workspace
             */
            function initializeWorkspace(challengeId){
              if(challengeId){
                vscode.postMessage({
                  action: '${constants.webviewMessageActions.INITIALIZE_WORKSPACE}',
                  data: {
                    challengeId
                  }
                });
              }
            }

            /**
             *  Launches action to ask user if we wants to use a starter pack
             */
            function cloneStarterPack(filter, challengeId) {
              vscode.postMessage({
                action: '${constants.webviewMessageActions.CLONE_STARTER_PACK}',
                data: {
                  filter,
                  challengeId,
                }
              });
            }

            /**
             * Show the workspace buttons that are hidden by default
             */
            function showWorkspaceButtons() {
              var buttons = document.getElementsByClassName('workspaceBtns');
              Array.from(buttons).forEach(
                function(navDom) {
                  navDom.classList.add('visible')
                });
            }

            // Handle message from extension to this webview.
            window.addEventListener('message', event => {
                const message = event.data;
                switch (message.command) {
                    case '${constants.webviewMessageActions.REGISTERED_FOR_CHALLENGE}':{
                      document.getElementById('registerButton').remove();
                      showWorkspaceButtons();
                    } break;
                }
            });
            // wait for window to load completely
            window.addEventListener('load', () => {
                if(!document.getElementById('registerButton')) {
                  showWorkspaceButtons();
                }
            });
          </script>
          <h1>${challengeDetails.challengeTitle}</h1>
          ${this.generateRegisterButtonHTML(challengeDetails, userToken)}
          ${this.generateInitWorkspaceButtonHtml(challengeDetails)}
          ${this.generateCloneStarterPackButtonHtml(challengeDetails)}
          <h2>Prizes</h2>
          <div>${this.generateHtmlFromChallengePrizes(challengeDetails.prizes)}</div>
          <h2>Meta</h2>
          <div>${this.generateMetaTableFromChallengeDetails(challengeDetails)}</div>
          <h2>Specification</h2>
          <div id='specifications'>${challengeDetails.detailedRequirements || challengeDetails.introduction}</div>
          <h2>Submission Guidelines</h2>
          <div id='submission-guidelines'>${challengeDetails.finalSubmissionGuidelines || 'N/A'}</div>
        </body>
      </html>`;
    }

    /**
     * Returns the html to display for the register button, if user has not already registered.
     * @param challengeDetails The challenge details
     * @param userToken The user token
     */
    private static generateRegisterButtonHTML(challengeDetails: any, userToken: string) {
        const buttonHtml = `
      <button id="registerButton" onclick='registerForChallenge(${challengeDetails.challengeId})'>
        Register
      </button>
      `;
        // add register button to DOM only if this user has not already registered
        const registrants: any[] = _.get(challengeDetails, 'registrants', []);
        const decodedToken: any = jwt.decode(userToken);
        const registerEnabled = registrants.find((profile) => profile.handle === decodedToken.handle) === undefined
            && this.isApplyPhase(challengeDetails);
        return registerEnabled ? buttonHtml : '';
    }

    /**
     * Checks if a challenge can have action to register
     * @param challengeDetails The challenge details
     */
    private static isApplyPhase(challengeDetails: any) {
        return challengeDetails.currentPhaseName === 'Submission' || challengeDetails.currentPhaseName === 'Registration';
    }

    /**
     * Returns the html to display the button that will initialize the current workspace for submission
     * @param challengeDetails The challenge details
     */
    private static generateInitWorkspaceButtonHtml(challengeDetails: any) {
        return this.isApplyPhase(challengeDetails) ? `
    <button class="workspaceBtns" onclick='initializeWorkspace(${challengeDetails.challengeId})'>
      Initialize Workspace
    </button>` : '';
    }
    /**
     * Returns the html to display the button that will ask the user to initialize the current
     * workspace with a specific starter pack
     * @param challengeDetails The challenge details
     */
    private static generateCloneStarterPackButtonHtml(challengeDetails: any) {
        const filter = packConfig.filter((x: any) => {
          if (challengeDetails.technologies && challengeDetails.technologies.length > 0) {
            return challengeDetails.technologies.some((y: string) => x.name.toLowerCase() === y.toLowerCase());
          }

          return false;
        });

        return filter.length > 0 && this.isApplyPhase(challengeDetails) ?
            `<button class="workspaceBtns" style="margin-top:10px"
             onclick='cloneStarterPack(${JSON.stringify(filter)}, ${challengeDetails.challengeId})'>
                Clone starter pack
             </button>` : '';
    }

    /**
     * Generate an HTML table from the list of prize amounts
     * @param prizes An array of prize amounts
     * @return HTML string containing table information.
     */
    private static generateHtmlFromChallengePrizes(prizes: number[]) {
        const tableHtml = _.map(prizes, (prize, i) => {
            return {
                header: `<th>${this.getOrdinalNumber(i + 1)} Place</th>`,
                row: `<td>$${prize}</td>`
            };
        });
        return `
      <table border='1px'>
        <tr>
          ${_.join(_.map(tableHtml, (data) => data.header), '')}
        </tr>
        <tr>
          ${_.join(_.map(tableHtml, (data) => data.row), '')}
        </tr>
      </table>
    `;

    }

    /**
     * Converts numeric values for ex:1,2,3 into their ordinal representations ex: 1st, 2nd, 3rd
     * @param place Number denoting the rank/index of an item
     * @return Ordinal number representation
     */
    private static getOrdinalNumber(place: number): string {
        const remainder = place % 10;
        switch (remainder) {
            case 1: return `${place}st`;
            case 2: return `${place}nd`;
            case 3: return `${place}rd`;
            default: return `${place}th`;
        }
    }

    /**
     * Generates an HTML table from the challenge details object
     * to display the current challenge phase, number of registrants and submissions.
     * @param challengeDetails The challenge details object from the server
     * @return HTML string containing table information.
     */
    private static generateMetaTableFromChallengeDetails(challengeDetails: any): string {
        return `
      <table border='1px'>
        <tr>
          <th>Current Phase</th>
          <th># of Registrants</th>
          <th># of Submissions</th>
        </tr>
        <tr>
          <td>${challengeDetails.currentStatus || 'N/A'}</td>
          <td>${challengeDetails.numberOfRegistrants || '0'}</td>
          <td>${challengeDetails.numberOfSubmissions || '0'}</td>
        </tr>
      </table>
    `;
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
                  <td><a href='#' onclick='openChallenge(${challenge.id})'>${challenge.name}</a></td>
                  <td>${challenge.subTrack}</td>
                  <td>${challenge.numRegistrants}</td>
                  <td>${_.join(_.map(challenge.prizes, (x) => `\$${x}`), ', ')}</td>
                  <td>${_.join(_.map(filteredPhases, 'phaseType'), ', ')}</td>
                </tr>`;
            })
            .join('');
    }

    /**
     * Generate the html to show artifacts in an unordered list
     * @param reviews reviews with artifacts
     */
    private static generateArtifactsUnorderedList(reviews: any) {
        // get all the reviews which contains artifacts
        const filtered = reviews.filter((review: any) => !_.isEmpty(review.artifacts))
            .map((t: any) => ({ id: t.id, artifacts: t.artifacts }));

        // just show artifacts section in case they exist
        if (!_.isEmpty(filtered)) {
            return `<h2>Artifacts</h2>
      <ul>
        ${_.flatten(filtered.map((f: any) =>
                (f.artifacts.map((artifact: any) =>
                    (`<li style="margin-top:10px"><a href='#' onclick='downloadArtifact("${f.id}", "${artifact}")'>${artifact}</a></li>`)).join('')
                )
            ))}
      </ul>`;
        }
        return '<h3>No artifacts to show</h3>';
    }

    /**
     * Generate reviews table
     * @param reviews reviews with artifacts
     */
    private static generateHtmlTableFromReviews(reviews: any) {

        if (_.size(reviews) > 0) {
            return `<h2>Reviews</h2>
            <table border="1" style="margin-bottom: 40px">
              <tr>
                <th>Score</th>
                <th>Created at</th>
              </tr>
            ${_.flatten(reviews.map((review: any) =>
                (review.rev.map(({ score, created }: any) => {
                    return `<tr>
                  <td>${score}</td>
                  <td>${created}</td>
                </tr>`;
                })
                ))).join('')} </table>`;
        } else {
            return '<h3>No reviews to show</h3>';
        }

    }
}
