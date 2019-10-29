// Constants definition file

export const missingUsernameMessage = 'Missing username. Configure your username in the settings screen.';
export const missingPasswordMessage = 'Missing password. Configure your password in the settings screen.';
export const notLoggedInMessage = 'You are not logged in. Run the `Topcoder: Login` command first.';
export const authenticationFailedMessage = 'Failed to authenticate user. Please check your settings and try again.';
export const tokenRefreshFailedMessage = 'Failed to refresh authentication token. Please login again.';
export const loggingInMessage = 'Logging in user.';
export const loggedInMessage = 'You are logged in.';
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

export const extensionConfigSectionName = 'TCVSCodeIDE';
export const usernameConfig = 'credentials.username';
export const passwordConfig = 'credentials.password';
export const useDevelopEndpoint = 'useDevelopEndpoint';
export const shareTelemetryToTC = 'shareTelemetryToTC';

export const tokenStateKey = 'TC_JWT_TOKEN';

export const scheme = 'tcvscodeide';
export const challengesPageTitle = 'Topcoder: Open challenges';
export const challengeDetailsPageTitle = 'Topcoder: Challenge details';
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
  CLIENT_V2CONNECTION: string;
  NAME: string;
  URLS: {
    AUTHN: string,
    AUTHZ: string,
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
  };
}

/**
 * Constant set for TC Dev environment.
 */
export const DEV_ENV: IENV = {
  CLIENT_ID: 'JFDo7HMkf0q2CkVFHojy3zHWafziprhT',
  CLIENT_V2CONNECTION: 'TC-User-Database',
  NAME: 'Dev',
  URLS: {
    AUTHN: 'https://topcoder-dev.auth0.com/oauth/ro',
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
    TELEMETRY: ''
  }
};

/**
 * Constant set for TC Prod environment.
 */
export const PROD_ENV: IENV = {
  CLIENT_ID: '6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P',
  CLIENT_V2CONNECTION: 'LDAP',
  NAME: 'Prod',
  URLS: {
    AUTHN: 'https://topcoder.auth0.com/oauth/ro',
    AUTHZ: 'https://api.topcoder.com/v3/authorizations',
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

  CLONE_REPOSITORY: 'CLONE_REPOSITORY'
};
