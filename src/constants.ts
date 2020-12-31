// Constants definition file

export const notLoggedInMessage = 'You are not logged in. Run the `Topcoder: Login` command first.';
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
export const contestCreationConfirmationMsg = 'Would you like to use currently open tab as challenge specification?';
export const couldntGetSpecsErrMsg = 'Couldn\'t get the content of currently open tab.';
export const couldntFetchProjectsErrMsg = 'Couldn\'t fetch the projects.';
export const couldntFetchChallengeTracksErrMsg = 'Couldn\'t fetch the challenge tracks.';
export const couldntFetchChallengeTypesErrMsg = 'Couldn\'t fetch the challenge types.';
export const couldntFetchPlatformsErrMsg = 'Couldn\'t fetch the platforms.';
export const couldntFetchTechnologiesErrMsg = 'Couldn\'t fetch the technologies.';
export const couldntFetchChallengeTimelinesErrMsg = 'Couldn\'t fetch the challenge timelines.';
export const couldntFetchTimelineTemplatesErrMsg = 'Couldn\'t fetch the timeline templates.';
export const couldntCreateChallengeErrMsg = 'Couldn\'t create the challenge.';
export const couldntActivateChallengeErrMsg = 'Couldn\'t activate the challenge.';
export const couldntAsssignCopilotErrMsg = 'Couldn\'t assign the copilot.';
export const contestCreatingMsg = 'Creating the contest';
export const contestActivatingMsg = 'Activating the contest';
export const creatingChallengeMsg = 'Creating challenge...';
export const activatingChallengeMsg = 'Activating challenge...';
export const assigningCopilotMsg = 'Assigning copilot...';
export const contestCreationCompleteMsg = 'Contest has been created as draft and will be activated in several seconds. Don\'t close the VSCode in the mean time. The contest can be accessed [here]({LINK_TO_CONTEST}).';
export const contestActivationCompleteMsg = 'Contest is now active and is set to start at {START_TIME}';

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

export const userRoles = {
  admin: 'administrator',
  copilot: 'copilot'
  // add more when necessary
};

export const contestCreationStepNames = {
  askProject: 'ASK_PROJECT',
  askChallengeTrack: 'ASK_CHALLENGE_TRACK',
  askChallengeType: 'ASK_CHALLENGE_TYPE',
  askChallengeName: 'ASK_CHALLENGE_NAME',
  askChallengePrizes: 'ASK_CHALLENGE_PRIZES',
  askChallengeCopilotPayment: 'ASK_CHALLENGE_COPILOT_PAYMENT',
  askChallengeTags: 'ASK_CHALLENGE_TAGS'
};

/**
 * Interface for step config.
 *
 * `name` Name of the step. Use this as key when retrieving choices from Map.
 *
 * `placeholder` Placeholder text for InputBox and/or QuickInput.
 *
 * `loadingMsg` The message will be shown when fetching items for QuickPick. Requires an attached `fetchItems` function.
 *
 * `invalidInputMsg` The message will be shown if the input is invalid. Requires an attached `validator` function.
 *
 * `multiSelection` Set to true if QuickPick should allow multi select. Defaults to false if not specified.
 */
export interface IStepConfig {
  name: string;
  placeholder: string;
  loadingMsg?: string;
  invalidInputMsg?: string;
  multiSelection?: boolean;
}

/**
 * Contest Creation Config Interface for asking sequential inputs.
 * Provide your step configs in `steps`
 */
export interface IContestCreationConfig {
  title: string;
  steps: IStepConfig[];
}

/**
 * Contest Creation Config/Steps
 */
export const contestCreationConfig: IContestCreationConfig = {
  title: 'Create Challenge',
  steps: [
    {
      name: contestCreationStepNames.askProject,
      placeholder: 'Select the project',
      loadingMsg: 'Please wait while loading projects...'
    },
    {
      name: contestCreationStepNames.askChallengeTrack,
      placeholder: 'Select the challenge track',
      loadingMsg: 'Please wait while loading challenge tracks...'
    },
    {
      name: contestCreationStepNames.askChallengeType,
      placeholder: 'Select the challenge type',
      loadingMsg: 'Please wait while loading challenge types...'
    },
    {
      name: contestCreationStepNames.askChallengeName,
      placeholder: 'Enter your work name',
      invalidInputMsg: 'Please enter a name with at least 1 character.'
    },
    {
      name: contestCreationStepNames.askChallengePrizes,
      placeholder: 'Enter multiple, comma separated, challenge prizes',
      invalidInputMsg: 'Please enter valid numbers for challenge prizes, in comma separated format.'
    },
    {
      name: contestCreationStepNames.askChallengeCopilotPayment,
      placeholder: 'Enter the copilot fee',
      invalidInputMsg: 'Please enter a valid number for copilot fee.'
    },
    {
      name: contestCreationStepNames.askChallengeTags,
      placeholder: 'Select the challenge tag(s)',
      loadingMsg: 'Please wait while loading tags...',
      multiSelection: true
    }
  ]
};

/**
 * Interface of a constant set, which fully defines a Topcoder environment
 * to work against.
 */
export interface IENV {
  AUTH0_CLIENT_ID: string;
  CLIENT_V2CONNECTION: string;
  NAME: string;
  CONTEST_CREATION_TERMS_ID: string;
  URLS: {
    AUTHN: string,
    AUTHZ: string,
    AUTH_TOKEN: string,
    DEVICE_AUTH: string,
    REFRESH_TOKEN: string,
    FETCH_PROJECTS: string,
    FETCH_CHALLENGE_TRACKS: string,
    FETCH_CHALLENGE_TYPES: string,
    FETCH_PLATFORMS: string,
    FETCH_TECHNOLOGIES: string,
    FETCH_CHALLENGE_TIMELINES: string;
    FETCH_TIMELINE_TEMPLATES: string;
    ACTIVATE_CHALLENGES: string,
    UPLOAD_SUBMISSION: string,
    CONTEST_CREATION: string,
    CONTEST_ACTIVATION: string;
    LINK_TO_CONTEST: string;
    GET_RESOURCES: string;
    ASSIGN_COPILOT: string;
    CHALLENGE_DETAILS: string,
    CHALLENGE_REGISTRATION: string,
    MEMBER_CHALLENGES: string,
    MEMBER_SUBMISSION: string,
    SUBMISSION_ARTIFACTS: string,
    DOWNLOAD_SUBMISSION: string,
    TELEMETRY: string,
    TOPCODER: string,
    REVIEW_TYPES: string,
    AUTH_AUDIENCE: string,
  };
}

/**
 * Constant set for TC Dev environment.
 */
export const DEV_ENV: IENV = {
  AUTH0_CLIENT_ID: 'NY97yLYz1wHg3DBtI7NMEEksfI34KkXB',
  CLIENT_V2CONNECTION: 'TC-User-Database',
  NAME: 'Dev',
  CONTEST_CREATION_TERMS_ID: '317cd8f9-d66c-4f2a-8774-63c612d99cd4',
  URLS: {
    AUTHN: 'https://topcoder-dev.auth0.com/oauth/ro',
    DEVICE_AUTH: 'https://topcoder-dev.auth0.com/oauth/device/code',
    AUTH_TOKEN: 'https://topcoder-dev.auth0.com/oauth/token',
    AUTHZ: 'https://api.topcoder-dev.com/v3/authorizations',
    REFRESH_TOKEN: 'https://api.topcoder-dev.com/v3/authorizations/1',
    FETCH_PROJECTS: 'https://api.topcoder-dev.com/v5/projects?memberOnly=true&sort=lastActivityAt%20desc&status=active',
    FETCH_CHALLENGE_TRACKS: 'https://api.topcoder-dev.com/v5/challenge-tracks',
    FETCH_CHALLENGE_TYPES: 'https://api.topcoder-dev.com/v5/challenge-types',
    FETCH_PLATFORMS: 'https://api.topcoder-dev.com/v4/platforms',
    FETCH_TECHNOLOGIES: 'https://api.topcoder-dev.com/v4/technologies',
    FETCH_CHALLENGE_TIMELINES: 'https://api.topcoder-dev.com/v5/challenge-timelines?isDefault=true',
    FETCH_TIMELINE_TEMPLATES: 'https://api.topcoder-dev.com/v5/timeline-templates',
    ACTIVATE_CHALLENGES: 'https://api.topcoder-dev.com/v4/challenges/?filter=status%3DACTIVE',
    UPLOAD_SUBMISSION: 'https://api.topcoder-dev.com/v5',
    CONTEST_CREATION: 'https://api.topcoder-dev.com/v5/challenges',
    CONTEST_ACTIVATION: 'https://api.topcoder-dev.com/v5/challenges/{challengeId}',
    LINK_TO_CONTEST: 'https://challenges.topcoder-dev.com/projects/{projectId}/challenges/{challengeId}/view',
    GET_RESOURCES: 'https://api.topcoder-dev.com/v5/resource-roles',
    ASSIGN_COPILOT: 'https://api.topcoder-dev.com/v5/resources',
    CHALLENGE_DETAILS: 'https://api.topcoder-dev.com/v4/challenges',
    CHALLENGE_REGISTRATION: 'https://api.topcoder-dev.com/v4/challenges/{challengeId}/register',
    MEMBER_CHALLENGES: 'https://api.topcoder-dev.com/v4/members/{memberId}/challenges/?filter=status%3DACTIVE&limit=50&offset=0',
    MEMBER_SUBMISSION: 'https://api.topcoder-dev.com/v5/submissions?challengeId={challengeId}&memberId={memberId}',
    SUBMISSION_ARTIFACTS: 'http://api.topcoder-dev.com/v5/submissions/{submissionId}/artifacts',
    DOWNLOAD_SUBMISSION: 'http://api.topcoder-dev.com/v5/submissions/{submissionId}/artifacts/{artifactId}/download',
    TELEMETRY: '',
    TOPCODER: 'https://topcoder-dev.com',
    REVIEW_TYPES: 'https://api.topcoder-dev.com/v5/reviewTypes',
    AUTH_AUDIENCE: 'https://m2m.topcoder-dev.com/'
  }
};

/**
 * Constant set for TC Prod environment.
 */
export const PROD_ENV: IENV = {
  AUTH0_CLIENT_ID: 'K3dYEUlU4Clj95RLIrQi7P9eIVl7U9SK',
  CLIENT_V2CONNECTION: 'TC-User-Database',
  NAME: 'Prod',
  CONTEST_CREATION_TERMS_ID: '564a981e-6840-4a5c-894e-d5ad22e9cd6f',
  URLS: {
    AUTHN: 'https://topcoder.auth0.com/oauth/ro',
    AUTHZ: 'https://api.topcoder.com/v3/authorizations',
    DEVICE_AUTH: 'https://topcoder.auth0.com/oauth/device/code',
    AUTH_TOKEN: 'https://topcoder.auth0.com/oauth/token',
    REFRESH_TOKEN: 'https://api.topcoder.com/v3/authorizations/1',
    FETCH_PROJECTS: 'https://api.topcoder.com/v5/projects?memberOnly=true&sort=lastActivityAt%20desc&status=active',
    FETCH_CHALLENGE_TRACKS: 'https://api.topcoder.com/v5/challenge-tracks',
    FETCH_CHALLENGE_TYPES: 'https://api.topcoder.com/v5/challenge-types',
    FETCH_PLATFORMS: 'https://api.topcoder.com/v4/platforms',
    FETCH_TECHNOLOGIES: 'https://api.topcoder.com/v4/technologies',
    FETCH_CHALLENGE_TIMELINES: 'https://api.topcoder.com/v5/challenge-timelines?isDefault=true',
    FETCH_TIMELINE_TEMPLATES: 'https://api.topcoder.com/v5/timeline-templates',
    ACTIVATE_CHALLENGES: 'https://api.topcoder.com/v4/challenges/?filter=status%3DACTIVE',
    UPLOAD_SUBMISSION: 'https://api.topcoder.com/v5',
    CONTEST_CREATION: 'https://api.topcoder.com/v5/challenges',
    CONTEST_ACTIVATION: 'https://api.topcoder.com/v5/challenges/{challengeId}',
    LINK_TO_CONTEST: 'https://challenges.topcoder.com/projects/{projectId}/challenges/{challengeId}/view',
    GET_RESOURCES: 'https://api.topcoder.com/v5/resource-roles',
    ASSIGN_COPILOT: 'https://api.topcoder.com/v5/resources',
    CHALLENGE_DETAILS: 'https://api.topcoder.com/v4/challenges',
    CHALLENGE_REGISTRATION: 'https://api.topcoder.com/v4/challenges/{challengeId}/register',
    MEMBER_CHALLENGES: 'https://api.topcoder.com/v4/members/{memberId}/challenges/?filter=status%3DACTIVE&limit=50&offset=0',
    MEMBER_SUBMISSION: 'https://api.topcoder.com/v5/submissions?challengeId={challengeId}&memberId={memberId}',
    SUBMISSION_ARTIFACTS: 'http://api.topcoder.com/v5/submissions/{submissionId}/artifacts',
    DOWNLOAD_SUBMISSION: 'http://api.topcoder.com/v5/submissions/{submissionId}/artifacts/{artifactId}/download',
    TELEMETRY: '',
    TOPCODER: 'https://topcoder.com',
    REVIEW_TYPES: 'https://api.topcoder.com/v5/reviewTypes',
    AUTH_AUDIENCE: 'https://api.topcoder.com/'
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
