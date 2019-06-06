# VSCode Extension for Topcoder

This extension is meant to closely integrate the Topcoder platform with [VSCode](https://code.visualstudio.com/), the text editor, to allow the user to perform actions related to the Topcoder platform from within the editor, without having to open a browser.

## Prerequisites for local development

- Node.js: v10.15
- NPM: v6.9

## Local development

- To view the extension, open the source code in the VSCode editor.
- Install dependencies the first time you open the source code using the command `npm install`
- Press `F5` to open a new window with extension loaded.
- After making changes in the code, relaunch the extension from the debug bar (green circular arrow) or reload the window opened previously with `F5` (`Ctrl+R` or `Cmd+R` on Mac).

## Extension Settings

This extension exposes the following settings:

- `TCVSCodeIDE.credentials.username`: your topcoder username
- `TCVSCodeIDE.credentials.password`: your topcoder password
- `TCVSCodeIDE.auth.AUTHN_URL`: default is `https://topcoder.auth0.com/oauth/ro`
- `TCVSCodeIDE.auth.AUTHZ_URL`: default is `https://api.topcoder.com/v3/authorizations`
- `TCVSCodeIDE.auth.CLIENT_ID`: default is `6ZwZEUo2ZK4c50aLPpgupeg5v2Ffxp9P`
- `TCVSCodeIDE.auth.CLIENT_V2CONNECTION`: default is `LDAP`

These can be set in user preferences (`Ctrl+,` or `Cmd+,`)

## Commands

The extension provides several commands in the Command Palette:

- *Topcoder: Login* to login in Topcoder using your username and password.
- *Topcoder: Logout* to clear the stored login token.
- *Topcoder: View open challenges* to list active challenges in a tabular view.

All commands require you to provide your Topcoder username and password, so make sure to set them _before_ you execute them

## Run tests

- Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown pick `Extension Tests`.
- Press `F5` to run the tests in a new window with your extension loaded.
- See the output of the test result in the debug console.

You may also run the tests by running `npm test` in a terminal

**Note**: Before running this command, close all instances of the vscode editor.