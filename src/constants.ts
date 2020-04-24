// Constants definition file

export const notLoggedInMessage = 'You need to login to Topcoder first before you can carry out that action.';
export const authenticationFailedMessage = 'Failed to authenticate user. Please check your settings and try again.';
export const tokenRefreshFailedMessage = 'Failed to refresh authentication token. Please login again.';
export const sessionExpiredMessage = 'You took too long to login. Session expired.';
export const accessDeniedMessage = 'Access denied. Login unsuccessful. Please try again.';
export const loggedInMessage = 'You have logged in successfully';
export const loggedOutMessage = 'Logged out.';
export const loadingOpenChallengesMessage = 'Loading open challenges.';
export const openChallengesLoadedMessage = 'Open challenges have been loaded.';
export const loadOpenChallengesFailedMessage = 'Failed to load open challenges.';
export const emptyWorkspaceToSubmit = 'Empty workspace to submit. You should open a workspace first.';
export const missTopcoderrcFile = 'No .topcoderrc file detected in the current workspace.';
export const inCorrectFormatTopcoderrc = 'Incorrect format of .topcoderrc, it should be JSON format.';
export const missChallengeId = 'Missing challengeId in .topcoderrc.';
export const submittingChallenges = 'Submitting challenge.';
export const challengeSubmittedMessage = 'Workspace successfully submitted.';
export const challengeSubmissionFailedMessage = 'Failed to submit the workspace to the challenge.';
export const userNotRegisteredForChallenge = 'You have not registered for this challenge.';
export const challengeNotFound = 'Could not find the requested challenge';
export const submissionPhaseNotOpen = 'The submission phase is not open for this challenge';
export const loadingChallengeDetails = 'Loading challenge details';
export const challengeDetailsLoadedMessage = 'Challenge details have been loaded';
export const challengeDetailsLoadFailedMessage = 'Failed to load details for the selected challenge.';
export const registeringMessage = 'Registering for challenge';
export const registeredSuccessfullyMessage = 'Registered Successfully';
export const registrationFailedMessage = 'Failed to register for the challenge';
export const userChallengesLoadFailedMessage = 'We cannot display the list of challenges at this time.';
export const helpFilesLoadFailed = 'Failed to load content.';
export const initializingWorkspaceMessage = 'Initializing workspace for submission.';
export const workspaceInitializationFailedMessage = 'Failed to initialize the current workspace.';
export const workspaceInitializationSuccessMessage = 'This workspace has been initialized successfully.';
export const cloningChallengeRepositoriesFailed = 'An error occured while cloning challenge repositories';
export const cloningChallengeRepositoriesSuccess = 'Cloning challenge repositories ended with success';
export const cloningChallengeRepositoriesStarted = 'Cloning challenge repositories started';
export const loadSubmissionFailed = 'Loading submission details failed';
export const loadSubmissionStarted = 'Loading submission details started';
export const loadSubmissionSuccess = 'Submission details loaded with success';
export const artifactDownloadStart = 'Download artifact started';
export const artifactDownloadFailed = 'Download artifact failed';
export const artifactDownloadSuccess = 'Download artifact with success';
export const noRepositoryCloned = 'No repository was cloned';
export const cloningRepositoryStarted = 'Cloning git repository started';
export const cloningRepositorySuccess = 'Cloned git repository with success';
export const cloningRepositoryFailed = 'Clone git repository failed';
export const onlyRepositoryAccepted = 'Only gitlab or github repositories are available to clone';
export const failedToLoadOrganizationRepos = 'Failed to load repositories';
export const loadOrganizationReposStarted = 'Load organization repositories started';
export const loadOrganizationReposSuccess = 'Loaded organization repositories with success';
export const cloneTemplateStarted = 'Clone template started';
export const cloneTemplateSuccess = 'Cloned template with success';
export const cloneTemplateFailed = 'Clone template failed';
export const templateNotCloned = 'Template not cloned';
export const loadReviewTypeInfoError = 'Failed to load review type';
export const sessionPairingStatus = 'Pairing';
export const sessionActiveStatus = 'Active';
export const sessionTimedOutStatus = 'Timed-Out';
export const sessionClosedStatus = 'Closed';
export const extensionConfigSectionName = 'TCVSCodeIDE';
export const useDevelopEndpoint = 'useDevelopEndpoint';
export const shareTelemetryToTC = 'shareTelemetryToTC';

export const imageCapturedFailedMessage = 'Image Could Not Be Captured';
export const enrollmentFailedMessage = 'Enrollment unsuccessful';

export const tokenStateKey = 'TC_JWT_TOKEN';
export const refreshTokenStateKey = 'TC_JWT_REFRESH_TOKEN';
export const sessionIdKey = 'TC_SESSION_ID';
export const activeSessionKey = 'TC_SESSION_ACTIVE';

export const scheme = 'tcvscodeide';
export const challengesPageTitle = 'Topcoder: Open challenges';
export const challengeDetailsPageTitle = 'Topcoder: Challenge details';
export const deviceAuthorizationPageTitle = 'Topcoder: Device Authorization';
export const submissionDetailsPageTitle = 'Topcoder: Submission details';
export const secureSessionStartPageTitle = 'Topcoder Secure Session: Pairing';
export const generatingSecureSession = 'Generating secure session';
export const completingEnrollment = 'Completing enrollment. Please wait..';
export const biometricSessionPageTitle = 'Topcoder: Biometric Enrollment';
export const gitRepoUrls = [
  'https://github.com/topcoderinc/Topcoder-Starter-Pack-ASPNET',
  'https://github.com/topcoderinc/Topcoder-StarterPack_Ionic',
  'https://github.com/topcoderinc/Topcoder-StarterPack_BluemixNode',
  'https://github.com/topcoderinc/Topcoder-StarterPack_Node-Backend'
];
export const SECRET_SESSION_STATUS_POOL_ERROR = 'Failed to get session status.';
// Time values for secure session (in milliseconds)
export const SECURE_SESSION_POOL_INTERVAL = 15000;
export const SECURE_SESSION_TIMEOUT = 300000;
// Setting bio id interval too low will cause an error with QLDB where it is not able to commit the transaction in time
export const BIOID_VERIFY_INTERVAL = 20000;

export const TEMP_IMAGE_NAME = 'enrollment.jpg';
export const TEMP_PERIODIC_IMAGE_NAME = 'verification.jpg';
export const BCID_PREFIX = 'bws/1182/';

/**
 * Interface of a constant set, which fully defines a Topcoder environment
 * to work against.
 */
export interface IENV {
  AUTH0_CLIENT_ID: string;
  CLIENT_V2CONNECTION: string;
  NAME: string;
  URLS: {
    AUTHN: string,
    AUTHZ: string,
    AUTH_TOKEN: string,
    DEVICE_AUTH: string,
    REFRESH_TOKEN: string,
    ACTIVATE_CHALLENGES: string,
    UPLOAD_SUBMISSION: string,
    CHALLENGE_DETAILS: string,
    CHALLENGE_REGISTRATION: string,
    MEMBER_CHALLENGES: string,
    MEMBER_SUBMISSION: string,
    SUBMISSION_ARTIFACTS: string,
    DOWNLOAD_SUBMISSION: string,
    PROOFS_API_ENDPOINT: string,
    TELEMETRY: string,
    TOPCODER: string,
    REVIEW_TYPES: string,
    AUTH_AUDIENCE: string,
    BIOMETRIC_API_ENDPOINT: string
  };
}

/**
 * Constant set for TC Dev environment.
 */
export const DEV_ENV: IENV = {
  AUTH0_CLIENT_ID: 'NY97yLYz1wHg3DBtI7NMEEksfI34KkXB',
  CLIENT_V2CONNECTION: 'TC-User-Database',
  NAME: 'Dev',
  URLS: {
    AUTHN: 'https://topcoder-dev.auth0.com/oauth/ro',
    DEVICE_AUTH: 'https://topcoder-dev.auth0.com/oauth/device/code',
    AUTH_TOKEN: 'https://topcoder-dev.auth0.com/oauth/token',
    AUTHZ: 'https://api.topcoder-dev.com/v3/authorizations',
    REFRESH_TOKEN: 'https://api.topcoder-dev.com/v3/authorizations/1',
    ACTIVATE_CHALLENGES: 'https://api.topcoder-dev.com/v4/challenges/?filter=status%3DACTIVE',
    UPLOAD_SUBMISSION: 'https://api.topcoder-dev.com/v5',
    CHALLENGE_DETAILS: 'https://api.topcoder-dev.com/v4/challenges',
    CHALLENGE_REGISTRATION: 'https://api.topcoder-dev.com/v4/challenges/{challengeId}/register',
    MEMBER_CHALLENGES: 'https://api.topcoder-dev.com/v4/members/{memberId}/challenges/?filter=status%3DACTIVE&limit=50&offset=0',
    MEMBER_SUBMISSION: 'https://api.topcoder-dev.com/v5/submissions?challengeId={challengeId}&memberId={memberId}',
    SUBMISSION_ARTIFACTS: 'http://api.topcoder-dev.com/v5/submissions/{submissionId}/artifacts',
    DOWNLOAD_SUBMISSION: 'http://api.topcoder-dev.com/v5/submissions/{submissionId}/artifacts/{artifactId}/download',
    PROOFS_API_ENDPOINT: 'https://topcoder-dev-proofs-api.herokuapp.com/api/1.0',
    TELEMETRY: '',
    TOPCODER: 'https://topcoder-dev.com',
    REVIEW_TYPES: 'https://api.topcoder-dev.com/v5/reviewTypes',
    AUTH_AUDIENCE: 'https://m2m.topcoder-dev.com/',
    BIOMETRIC_API_ENDPOINT: 'https://polar-mountain-65096.herokuapp.com' // UPDATE AFTER DEPLOYMENT
  }
};

/**
 * Constant set for TC Prod environment.
 */
export const PROD_ENV: IENV = {
  AUTH0_CLIENT_ID: 'K3dYEUlU4Clj95RLIrQi7P9eIVl7U9SK',
  CLIENT_V2CONNECTION: 'TC-User-Database',
  NAME: 'Prod',
  URLS: {
    AUTHN: 'https://topcoder.auth0.com/oauth/ro',
    AUTHZ: 'https://api.topcoder.com/v3/authorizations',
    DEVICE_AUTH: 'https://topcoder.auth0.com/oauth/device/code',
    AUTH_TOKEN: 'https://topcoder.auth0.com/oauth/token',
    REFRESH_TOKEN: 'https://api.topcoder.com/v3/authorizations/1',
    ACTIVATE_CHALLENGES: 'https://api.topcoder.com/v4/challenges/?filter=status%3DACTIVE',
    UPLOAD_SUBMISSION: 'https://api.topcoder.com/v5',
    CHALLENGE_DETAILS: 'https://api.topcoder.com/v4/challenges',
    CHALLENGE_REGISTRATION: 'https://api.topcoder.com/v4/challenges/{challengeId}/register',
    MEMBER_CHALLENGES: 'https://api.topcoder.com/v4/members/{memberId}/challenges/?filter=status%3DACTIVE&limit=50&offset=0',
    MEMBER_SUBMISSION: 'https://api.topcoder.com/v5/submissions?challengeId={challengeId}&memberId={memberId}',
    SUBMISSION_ARTIFACTS: 'http://api.topcoder.com/v5/submissions/{submissionId}/artifacts',
    DOWNLOAD_SUBMISSION: 'http://api.topcoder.com/v5/submissions/{submissionId}/artifacts/{artifactId}/download',
    PROOFS_API_ENDPOINT: '', // UPDATE AFTER DEPLOYMENT
    TELEMETRY: '',
    TOPCODER: 'https://topcoder.com',
    REVIEW_TYPES: 'https://api.topcoder.com/v5/reviewTypes',
    AUTH_AUDIENCE: 'https://api.topcoder.com/',
    BIOMETRIC_API_ENDPOINT: '' // UPDATE AFTER DEPLOYMENT
  }
};

export const submitType = 'Contest Submission';
export const organizationRepoUrl = 'https://api.github.com/orgs/topcoder-platform-templates/repos';

export const webviewMessageActions = {
  DISPLAY_CHALLENGE_DETAILS: 'DISPLAY_CHALLENGE_DETAILS',
  REGISTER_FOR_CHALLENGE: 'REGISTER_FOR_CHALLENGE',
  REGISTERED_FOR_CHALLENGE: 'REGISTERED_FOR_CHALLENGE',
  INITIALIZE_WORKSPACE: 'INITIALIZE_WORKSPACE',
  DOWNLOAD_ARTIFACT: 'DOWNLOAD_ARTIFACT',
  NAVIGATE_TO_CHALLENGE: 'NAVIGATE_TO_CHALLENGE',

  CLONE_REPOSITORY: 'CLONE_REPOSITORY',
  SESSION_CREATION_REFRESH: 'SESSION_REFRESH',
  SESSION_CREATION_TIMED_OUT: 'SESSION_CREATION_TIMED_OUT',
  SESSION_CREATED: 'SESSION_CREATED',
  SESSION_CREATION_FAILED: 'SESSION_CREATION_FAILED',
  SESSION_PAIRING_START: 'SESSION_PAIRING_START',
  DISPLAY_ERROR_MESSAGE: 'DISPLAY_ERROR_MESSAGE',
  BIOMETRIC_ENROLLMENT_CAMERA_DETECTED: 'BIOMETRIC_ENROLLMENT_CAMERA_DETECTED',
  BIOMETRIC_ENROLLMENT_CAMERA_NOT_DETECTED: 'BIOMETRIC_ENROLLMENT_CAMERA_NOT_DETECTED',
  BIOMETRIC_ENROLLMENT_IMAGE_CAPTURED: 'BIOMETRIC_ENROLLMENT_IMAGE_CAPTURED',
  BIOMETRIC_ENROLLMENT_COMPLETED: 'BIOMETRIC_ENROLLMENT_COMPLETED',
  BIOMETRIC_ENROLLMENT_CAPTURE_IMAGE: 'BIOMETRIC_ENROLLMENT_CAPTURE_IMAGE',
  BIOMETRIC_ENROLLMENT_COMPLETE: 'BIOMETRIC_ENROLLMENT_COMPLETE',
  BIOMETRIC_ENROLLMENT_REDETECT_CAMERA: 'BIOMETRIC_ENROLLMENT_REDETECT_CAMERA',
  BIOMETRIC_ENROLLMENT_CLOSE_WINDOW: 'BIOMETRIC_ENROLLMENT_CLOSE_WINDOW',
  PROCEED_TO_BIOMETERIC_ENROLLMENT: 'PROCEED_TO_BIOMETERIC_ENROLLMENT',
  BIOMETRIC_ENROLLMENT_END_SESSION: 'BIOMETRIC_ENROLLMENT_END_SESSION'
};
