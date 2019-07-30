// Constants definition file

const useDevelopEndpoint = false; /* set to true if you want to use topcoder's dev instance,
"false" if you want to use production instance */
export const missingUsernameMessage = 'Missing username. Configure your username in the settings screen.';
export const missingPasswordMessage = 'Missing password. Configure your password in the settings screen.';
export const notLoggedInMessage = 'You are not logged in. Run the `Topcoder: Login` command first.';
export const loggingInMessage = 'Logging in user.';
export const loggedInMessage = 'You are logged in.';
export const loggedOutMessage = 'Logged out.';
export const loadingOpenChallengesMessage = 'Loading open challenges.';
export const openChallengesLoadedMessage = 'Open challenges have been loaded';
export const emptyWorkspaceToSubmit = 'Empty workspace to submit. You should open a workspace first.';
export const missTopcoderrcFile = 'No .topcoderrc file detected in the current workspace.';
export const inCorrectFormatTopcoderrc = 'Incorrect format of .topcoderrc, it should be JSON format.';
export const missChallengeId = 'Missing challengeId in .topcoderrc.';
export const submittingChallenges = 'Submitting challenge.';
export const challengeSubmittedMessage = 'Workspace successful submitted.';
export const userNotRegisteredForChallenge = 'You have not registered for this challenge.';
export const challengeNotFound = 'Could not find the requested challenge';
export const submissionPhaseNotOpen = 'The submission phase is not open for this challenge';
export const loadingChallengeDetails = 'Loading challenge details';
export const challengeDetailsLoadedMessage = 'Challenge details have been loaded';
export const registeringMessage = 'Registering for challenge';
export const registeredSuccessfullyMessage = 'Registered Successfully';
export const registrationFailedMessage = 'Failed to register for the challenge';

export const extensionConfigSectionName = 'TCVSCodeIDE';
export const usernameConfig = 'credentials.username';
export const passwordConfig = 'credentials.password';

export const tokenStateKey = 'TC_JWT_TOKEN';

export const scheme = 'tcvscodeide';
export const challengesPageTitle = 'Topcoder: Open challenges';
export const challengeDetailsPageTitle = 'Topcoder: Challenge details';

export const CLIENT_V2CONNECTION = useDevelopEndpoint ? 'TC-User-Database' : 'LDAP';
export const AUTHN_URL = useDevelopEndpoint ?
  'https://topcoder-dev.auth0.com/oauth/ro' :
  'https://topcoder.auth0.com/oauth/ro';
export const AUTHZ_URL = useDevelopEndpoint ?
  'https://api.topcoder-dev.com/v3/authorizations' :
  'https://api.topcoder.com/v3/authorizations';
export const CLIENT_ID = useDevelopEndpoint ?
  'JFDo7HMkf0q2CkVFHojy3zHWafziprhT' :
  '6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P';
export const refreshTokenUrl = useDevelopEndpoint ?
  'https://api.topcoder-dev.com/v3/authorizations/1' :
  'https://api.topcoder.com/v3/authorizations/1';
export const activeChallengesUrl = useDevelopEndpoint ?
  'https://api.topcoder-dev.com/v4/challenges/?filter=status%3DACTIVE' :
  'https://api.topcoder.com/v4/challenges/?filter=status%3DACTIVE';
export const uploadSubmmissionUrl = useDevelopEndpoint ?
  'https://api.topcoder-dev.com/v5/submissions' :
  'https://api.topcoder.com/v5/submissions';
export const challengeDetailsUrl = useDevelopEndpoint ?
  'https://api.topcoder-dev.com/v4/challenges' :
  'https://api.topcoder.com/v4/challenges';
export const challengeRegistrationUrl = useDevelopEndpoint ?
  'https://api.topcoder-dev.com/v4/challenges/{challengeId}/register' :
  'https://api.topcoder.com/v4/challenges/{challengeId}/register';
export const submitType = 'Contest Submission';

export const webviewMessageActions = {
  DISPLAY_CHALLENGE_DETAILS: 'DISPLAY_CHALLENGE_DETAILS',
  REGISTER_FOR_CHALLENGE: 'REGISTER_FOR_CHALLENGE',
  REGISTERED_FOR_CHALLENGE: 'REGISTERED_FOR_CHALLENGE'
};
