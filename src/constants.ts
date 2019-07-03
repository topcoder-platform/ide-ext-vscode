// Constants definition file

export const WORKSPACE_CONFIG_FILE = '.topcoderrc';

export const missingUsernameMessage = 'Missing username. Configure your username in the settings screen.';
export const missingPasswordMessage = 'Missing password. Configure your password in the settings screen.';
export const notLoggedInMessage = 'You are not logged in. Run the `Topcoder: Login` command first.';
export const loggingInMessage = 'Logging in user.';
export const loggedInMessage = 'You are logged in.';
export const loggedOutMessage = 'Logged out.';
export const loadingOpenChallengesMessage = 'Loading open challenges.';
export const uploadSuccessMessage = 'Your submission was uploaded successfully.';
export const uploadingSubmissionMessage = 'Uploading submission.';
export const workspaceConfigFileNotFoundMessage = `No ${WORKSPACE_CONFIG_FILE} file detected in the current workspace.`;
export const workspaceConfigFileParseErrorMessage = `Error parsing the ${WORKSPACE_CONFIG_FILE} file. Make sure the file is valid JSON.`;
export const invalidChallengeIdErrorMessage = `Invalid challengeId in ${WORKSPACE_CONFIG_FILE} file.`;
export const invalidWorkspaceErrorMessage = 'This command can only be executed when a folder (Workspace) is open.';

export const archiveWorkspaceError = 'Error while archiving the workspace.';
export const userNotLoggedError = 'User must be logged in before running this command.';

export const extensionConfigSectionName = 'TCVSCodeIDE';
export const usernameConfig = 'credentials.username';
export const passwordConfig = 'credentials.password';

export const tokenStateKey = 'TC_JWT_TOKEN';

export const scheme = 'tcvscodeide';

export const MINUTES_TO_EXPIRE = 5;
export const LOG_LEVEL = 'debug';

export const refreshTokenUrl = 'https://api.topcoder-dev.com/v3/authorizations/1';
export const activeChallengesUrl = 'https://api.topcoder-dev.com/v4/challenges/?filter=status%3DACTIVE';
export const challengeSubmissionUrl = 'https://api.topcoder-dev.com/v5/submissions';

export const AUTHN_URL = 'https://topcoder-dev.auth0.com/oauth/ro';
export const AUTHZ_URL = 'https://api.topcoder-dev.com/v3/authorizations';
export const CLIENT_ID = 'JFDo7HMkf0q2CkVFHojy3zHWafziprhT';
export const CLIENT_V2CONNECTION = 'LDAP';
