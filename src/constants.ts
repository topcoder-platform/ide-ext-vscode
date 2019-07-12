// Constants definition file

const useDevelopEndpoint = true; // set to true if you want to use topcoder's dev instance. "false" if you want to use production instance

export const missingUsernameMessage = 'Missing username. Configure your username in the settings screen.';
export const missingPasswordMessage = 'Missing password. Configure your password in the settings screen.';
export const notLoggedInMessage = 'You are not logged in. Run the `Topcoder: Login` command first.';
export const loggingInMessage = 'Logging in user.';
export const loggedInMessage = 'You are logged in.';
export const loggedOutMessage = 'Logged out.';
export const loadingOpenChallengesMessage = 'Loading open challenges.';
export const emptyWorkspaceToSubmit = 'Empty workspace to submit. You should open a workspace first.';
export const missTopcoderrcFile = 'No .topcoderrc file detected in the current workspace.';
export const inCorrectFormatTopcoderrc = 'Incorrect format of .topcoderrc, it should be JSON format.';
export const missChallengeId = 'Missing challengeId in .topcoderrc.';
export const submittingChallenges = 'Submitting challenge.';
export const challengeSubmittedMessage = 'Workspace successful submitted.';

export const extensionConfigSectionName = 'TCVSCodeIDE';
export const usernameConfig = 'credentials.username';
export const passwordConfig = 'credentials.password';

export const tokenStateKey = 'TC_JWT_TOKEN';

export const scheme = 'tcvscodeide';
export const challengesPageTitle = 'Topcoder: Open challenges';

export const CLIENT_V2CONNECTION = 'LDAP';
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
export const submitType = 'Contest Submission';
