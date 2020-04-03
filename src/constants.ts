// Constants definition file

export const notLoggedInMessage = 'You are not logged in. Run the `Topcoder: Login` command first.';
export const authenticationFailedMessage = 'Failed to authenticate user. Please check your settings and try again.';
export const tokenRefreshFailedMessage = 'Failed to refresh authentication token. Please login again.';
export const sessionExpieredMessage = 'You took too long to login. Session expired.';
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

export const extensionConfigSectionName = 'TCVSCodeIDE';
export const useDevelopEndpoint = 'useDevelopEndpoint';
export const shareTelemetryToTC = 'shareTelemetryToTC';

export const tokenStateKey = 'TC_JWT_TOKEN';
export const refreshTokenStateKey = 'TC_JWT_REFRESH_TOKEN';

export const scheme = 'tcvscodeide';
export const challengesPageTitle = 'Topcoder: Open challenges';
export const challengeDetailsPageTitle = 'Topcoder: Challenge details';
export const deviceAuthorizationPageTitle = 'Topcoder: Device Authorization';
export const submissionDetailsPageTitle = 'Topcoder: Submission details';

export const gitRepoUrls = [
  'https://github.com/topcoderinc/Topcoder-Starter-Pack-ASPNET',
  'https://github.com/topcoderinc/Topcoder-StarterPack_Ionic',
  'https://github.com/topcoderinc/Topcoder-StarterPack_BluemixNode',
  'https://github.com/topcoderinc/Topcoder-StarterPack_Node-Backend'
];

/**
 * Interface of a constant set, which fully defines a Topcoder environment
 * to work against.
 */
export interface IENV {
  CLIENT_ID: string;
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
    TELEMETRY: string,
    TOPCODER: string,
    REVIEW_TYPES: string,
  };
}

/**
 * Constant set for TC Dev environment.
 */
export const DEV_ENV: IENV = {
  CLIENT_ID: 'JFDo7HMkf0q2CkVFHojy3zHWafziprhT',
  AUTH0_CLIENT_ID: '1NpddnMe5M3r04W71F95wDZZTNubWl5u',
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
    TELEMETRY: '',
    TOPCODER: 'https://topcoder-dev.com',
    REVIEW_TYPES: 'https://api.topcoder-dev.com/v5/reviewTypes'
  }
};

/**
 * Constant set for TC Prod environment.
 */
export const PROD_ENV: IENV = {
  CLIENT_ID: '6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P',
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
    TELEMETRY: '',
    TOPCODER: 'https://topcoder.com',
    REVIEW_TYPES: 'https://api.topcoder.com/v5/reviewTypes'
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

  DISPLAY_ERROR_MESSAGE: 'DISPLAY_ERROR_MESSAGE'
};
