import * as constants from '../constants';
import * as _ from 'lodash';
import * as QRCode from 'qrcode';
import {AuthTokenDecoder, IDecodedToken} from './Decoding';
/**
 * Keeps all the logic to generate HTML for challenges
 */

export default class Html {

  /**
   * This method will return a Nounce
   */
  public static getNonce(): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  /**
   * Generate HTML page content with a QR code for device authorizaion
   * @param data data from /oauth/device/code
   * @return the html page content
   */
  public static async generateDeviceAuthorizationHtml(data: any, topcoderImage: string) {
    const qr = await QRCode.toDataURL(data.verification_uri_complete);

    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${constants.deviceAuthorizationPageTitle}</title>
          <style>
            h1, h2 {text-align: center;}
            img {display: block; margin: 15px auto; }
            h2 {margin: 30px 10px;}
            #error-box {color: orangered; }
          </style>
        </head>
        <body>
          <img id="topcoderLogo" src="${topcoderImage}"/>
          <h1>Topcoder</h1>
          <h2>To login to Topcoder and start using the extension:</h2>
          <ol>
            <li>On your computer or mobile device, visit the following link: <a href="${data.verification_uri_complete}">${data.verification_uri_complete}</a></li>
            <li>Confirm that you see this code in the displayed page: ${data.user_code}</li>
            <li>Proceed to enter your Topcoder credentials and login. When successful, this page will close on its own and you will see a notification about the login being a success
          </ol>
          <img src="${qr}"/>
          <div id="error-box"></div>
          <script type="text/javascript">
            window.addEventListener('message', (event) => {
              console.log(event);
              const message = event.data;
              switch (message.command) {
                case '${constants.webviewMessageActions.DISPLAY_ERROR_MESSAGE}':
                  console.log(message.message);
                  document.getElementById('error-box').textContent = message.message;
                  break;
              }
            });
          </script>
        </body>
      </html>`;

  }
  /**
   * Generate HTML page with a QR Code for pairing secure session
   * @param sessionId id received from created secure session
   * @return the html page
   */
  public static async generateSecureSessionFlowHtml(sessionId: any) {
    const qr = await QRCode.toDataURL(sessionId);
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${constants.secureSessionStartPageTitle}</title>
          <style>
            h1, h2 {text-align: center;}
            img {display: block; margin: 15px auto; width: 200px; height: 200px; }
            h2 {margin: 30px 10px;}
            #error-box {color: orangered; }
            #success { display: none; }
            #timed-out { display: none; }
            button { margin: 0 auto; display: block;}
          </style>
         </head>
          <body>
            <h1> Device Pairing </h1>
            <p> Open the Topcoder App on your mobile device and login to Topcoder. After login, procced to tap the "Pair a Session" button to open the QR Code Scanner and scan the QR Code below. </p>
            <img src="${qr}">
            <b>Status: </b><span id="status">Pairing...</span>
            <div id="timed-out">
               <p> You have not read the QR Code in time. The session pairing has timed out. Refresh to generate a new pairing session.</p>
               <button onClick=onRefreshClick()>Refresh</button>
            </div>
            <div id="success">
               <p> Device Pairing has been completed successfully. You can now proceed to the next step - Biometric Verification.</p>
               <button onClick=onNextClick()>Next</button>
            </div>
            <script type="text/javascript">
             var vscode;
             var timedOut = false;
             (function () {
               vscode = acquireVsCodeApi();
             }());
             window.addEventListener('message', (event) => {
               switch (event.data.command) {
                  case '${constants.webviewMessageActions.SESSION_CREATION_TIMED_OUT}': {
                     document.getElementById("status").innerHTML = "Timed Out";
                     document.getElementById("timed-out").style.display = "block";
                     timedOut = true;
                     break;
                  }
                  case '${constants.webviewMessageActions.SESSION_CREATED}': {
                     document.getElementById("status").innerHTML = "Active";
                     document.getElementById("success").style.display = "block";
                     break;
                  }
                  case '${constants.webviewMessageActions.SESSION_CREATION_FAILED}': {
                     document.getElementById("status").innerHTML = "Failed"
                     break;
                  }
               }
              })
              function onRefreshClick() {
                  vscode.postMessage({
                        action: '${constants.webviewMessageActions.SESSION_CREATION_REFRESH}'
                  });
              }
              function onNextClick() {
                vscode.postMessage({
                        action: '${constants.webviewMessageActions.PROCEED_TO_BIOMETERIC_VERIFICATION}'
                  });
              }
            </script>
        </body>
      </html>`;
  }

  /**
   * Generate HTML page with a QR Code for Biometric Verification
   * @param capturedImage the file path of captured image
   * @return the html page
   */
  public static async generateBiometricVerificationHtml(capturedImage?: string) {
      return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${constants.biometricSessionPageTitle}</title>
          <style>
            h1, h2 {text-align: center;}
            img {width: 150px; height: 150px; display: block; margin: 15px auto; }
            h2 {margin: 30px 10px;}
            #camera-detected { display: none; }
            #camera-not-detected { display: none; }
            #image-captured { display: none; }
            .capture {width: 350px; height: 350px; display: block; margin: 15px auto; }
            #verification-completed { display: none; }
            button { margin: 0 auto; display: block;}
          </style>
          </head>
          <body>
            <h1>Biometric Verification</h1>
            <p>We will now proceed to access your camera and capture a photo of you. The photo will be used to verify you through our Biometric Verification process. The verification will not work if our systems cannot detect your face properly. Thus, make sure that you are in front of the camera and facing the camera. Ensure there is sufficient light falling on your face. Also make sure that you are close to the camera.</p>
            <b>Camera Detected: </b><span id="status"></span>
            <div id="camera-detected">
                <p>When you are ready, click on Capture below. We will proceed to capture your photo</p>
                <button onClick=onCaptureAndRecaptureClick()>Capture</button>
            </div>
            <div id="camera-not-detected">
                <p>We could NOT detect your camera. Make sure that it is turned on and working properly. We cannot proceed with verification process unless we detect and capture your photo. Secure session will also not work until this gets resolved.</p>
                <button onClick=onTryAgainClick()>Try Again</button>
            </div>
            <div id="image-captured">
                <img src="${capturedImage}?${this.getNonce()}" class="capture"/>
                <p>Have we captured it correctly? If yes kindly proceed. Else you can capture another snapshot.</p>
                <div style="width: 100%; text-align: center;">
                  <button style="display: inline-block;" onClick=onCaptureAndRecaptureClick()>Capture Again</button>
                  <button style="display: inline-block; margin-left: 30px;" onClick=onCompleteVerificationClick()>Complete Verification</button>
                </div>
            </div>
            <div id="verification-completed">
                <img src="${capturedImage}?${this.getNonce()}" class="capture"/>
                <p>Biometric verification is a success. You can now close this page.</p>
                <p>The extension will periodically send your photo to our servers as part of the Biometric Verification process. This will happen in the background and you are not required to do anything. Thus, while secure session is active, ensure that you follow the same practices as mentioned above:</p>
                <ul>
                    <li>Sit in the front of the camera and face it</li>
                    <li>Ensure there is sufficent light falling on your face</li>
                    <li>Be close to the camera</li>
                </ul>
                <button onClick=onCloseWindowClick()>Close Window</button>
            </div>
            <script type="text/javascript">
             var vscode;
             var timedOut = false;
             (function () {
               vscode = acquireVsCodeApi();
             }());
             window.addEventListener('message', (event) => {
               switch (event.data.command) {
                  case '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAMERA_DETECTED}': {
                     document.getElementById("status").innerHTML = "Yes.";
                     document.getElementById("camera-not-detected").style.display = "none";
                     document.getElementById("camera-detected").style.display = "block";
                     break;
                  }
                  case '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAMERA_NOT_DETECTED}': {
                    document.getElementById("camera-detected").style.display = "none";
                     document.getElementById("status").innerHTML = "No";
                     document.getElementById("camera-not-detected").style.display = "block";
                     break;
                  }
                  case '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_IMAGE_CAPTURED}': {
                     document.getElementById("camera-detected").style.display = "none";
		                 document.getElementById("image-captured").style.display = "block";
                     break;
                  }
		              case '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_COMPLETED}': {
                     document.getElementById("status").innerHTML = "Yes."
                     document.getElementById("image-captured").style.display = "none";
                     document.getElementById("verification-completed").style.display = "block";
                     break;
                  }
               }
              })
              function onCaptureAndRecaptureClick() {
                  vscode.postMessage({
                        action: '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CAPTURE_IMAGE}'
                  });
              }
              function onCompleteVerificationClick() {
                  vscode.postMessage({
                        action: '${constants.webviewMessageActions.BIOMETRIC_COMPLETE_VERIFICATION}'
                  });
              }
	            function onTryAgainClick() {
                  vscode.postMessage({
                        action: '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_REDETECT_CAMERA}'
                  });
              }
	            function onCloseWindowClick() {
                  vscode.postMessage({
                        action: '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_CLOSE_WINDOW}'
                  });
              }
            </script>
        </body>
      </html>`;
  }

  /**
   * This method will generate a HTML for Secure Session when a session is active
   */
  public static async generateEndSecureSessionHtml() {
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${constants.secureSessionStartPageTitle}</title>
        <style>
          h1, h2 {text-align: center;}
          button { margin: 0 auto; display: block;}
        </style>
        </head>
        <body>
          <h1>Secure Session</h1>
          <b>Status: </b><span id="status">Active</span>
          <p>We are capturing periodic photos of you through the web cam for biometric verification. This is happening in the background as long as Secure Session is still active.</p>
          <p>You can continue to code your solution. </p>
          <p>When you are done, click on End Session below. The extension will stop capturing your photo at this point and the session will end.</p>
          <p>If you want to start a new secure session, end this session and click on the Secure Session node in the sidebar again.</p>
              <button onClick=onEndSessionClick()>End Session</button>
          </div>
          <script type="text/javascript">
            (function () {
              vscode = acquireVsCodeApi();
            }());
            function onEndSessionClick() {
                vscode.postMessage({
                      action: '${constants.webviewMessageActions.BIOMETRIC_VERIFICATION_END_SESSION}'
                });
            }
          </script>
      </body>
    </html>`;
  }

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
              display: block;
              width: 220px;
              color: white;
              border-color: transparent;
              cursor: pointer;
              height: 28px;
              border-radius: 4px;
            }
            button + button {
              margin-top: 10px;
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
             *  Launches action to clone challenge repositories
             */
            function cloneRepositories(challengeId, repos) {
              console.log(repos);
              vscode.postMessage({
                action: '${constants.webviewMessageActions.CLONE_REPOSITORY}',
                data: {
                  challengeId,
                  repos,
                }
              });
            }

            /**
             * Opens the challenge page in the user's browser
             */
            function navigateToChallenge(challengeId) {
              vscode.postMessage({
                action: '${constants.webviewMessageActions.NAVIGATE_TO_CHALLENGE}',
                data: {
                  challengeId
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
          ${this.generateNavigateToChallengeButtonHtml(challengeDetails)}
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
    const decodedToken: IDecodedToken = AuthTokenDecoder.decode(userToken);
    const buttonHtml = `
      <button id="registerButton" onclick='registerForChallenge(${challengeDetails.challengeId})'>
        Register
      </button>
      `;
    // add register button to DOM only if this user has not already registered
    const registrants: any[] = _.get(challengeDetails, 'registrants', []);
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
    const repos = challengeDetails.codeRepo || challengeDetails.gitRepoURLs || constants.gitRepoUrls;

    return repos.length > 0 && this.isApplyPhase(challengeDetails) ?
      `<button class="workspaceBtns"
             onclick='cloneRepositories(${challengeDetails.challengeId}, ${JSON.stringify(repos)})'>
             Clone challenge repositories
             </button>` : '';
  }

  private static generateNavigateToChallengeButtonHtml(challengeDetails: any) {
    return `
    <button onclick="navigateToChallenge(${challengeDetails.challengeId})">
      View challenge in browser
    </button>`;
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
                <th>Review type</th>
              </tr>
            ${_.flatten(reviews.map((review: any) =>
        (review.rev.map(({ score, created, review: reviewType }: any) => {
          return `<tr>
                  <td>${score}</td>
                  <td>${created}</td>
                  <td>${reviewType}</td>
                </tr>`;
        })
        ))).join('')} </table>`;
    } else {
      return '<h3>No reviews to show</h3>';
    }

  }
}
