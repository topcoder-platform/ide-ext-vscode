# Details on local development of this extension

Temporary file. Will be substituted with the wiki

## Prerequisites for local development

- Node.js: v10.15
- NPM: v6.9

## How to develop locally

- To view the extension, open the source code in the VSCode editor.
- Install dependencies the first time you open the source code using the command `npm install`
- Compile the extension the first time you open the source code to ensure all resources are copied `npm run compile`
- Press `F5` to open a new window with extension loaded.
- After making changes in the code, relaunch the extension from the debug bar (green circular arrow) or reload the window opened previously with `F5` (`Ctrl+R` or `Cmd+R` on Mac).

## Extension Settings

This extension exposes the following settings:

- `TCVSCodeIDE.credentials.username`: your topcoder username
- `TCVSCodeIDE.credentials.password`: your topcoder password
- `TCVSCodeIDE.useDevelopEndpoint`: the option to work against development
  Topcoder environment instead of the production one (for now, enabled by
  default).

These can be set in user preferences (`Ctrl+,` or `Cmd+,`)

In order to use the command "Upload submission", your workspace needs to have a .topcoderrc file, which will contain json. It will have only one attribute named "challengeId" which will contain a string value. The value will be the id of the challenge to which you wish to upload the workspace too. You can find the id of the challenge by looking at the url of the challenge details. It will be of the form `https://www.topcoder.com/challenges/{challengeId}`

## Run tests

- Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown pick `Extension Tests`.
- Press `F5` to run the tests in a new window with your extension loaded.
- See the output of the test result in the debug console.

You may also run the tests by running `npm test` in a terminal

**Note**: Before running this command, close all instances of the vscode editor.

## Typescript code lint

- `npm run lint`
