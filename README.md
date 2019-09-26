# VSCode Extension for Topcoder

This extension is meant to closely integrate the Topcoder platform with [VSCode](https://code.visualstudio.com/), the text editor, to allow the user to perform actions related to the Topcoder platform from within the editor, without having to open a browser.

## Prerequisites for local development

- Node.js: v10.15
- NPM: v6.9

## Local development

- To view the extension, open the source code in the VSCode editor.
- Install dependencies the first time you open the source code using the command `npm install`
- Compile the extension the first time you open the source code to ensure all resources are copied `npm run compile`
- Press `F5` to open a new window with extension loaded.
- After making changes in the code, relaunch the extension from the debug bar (green circular arrow) or reload the window opened previously with `F5` (`Ctrl+R` or `Cmd+R` on Mac).

## Extension Settings

This extension exposes the following settings:

- `TCVSCodeIDE.credentials.username`: your topcoder username
- `TCVSCodeIDE.credentials.password`: your topcoder password
- `TCVSCodeIDE.telemetry.active`: Enable/Disable telemetry
- `TCVSCodeIDE.api.env`: Which Topcoder environment to use (development or production). A value of true indicates production

These can be set in user preferences (`Ctrl+,` or `Cmd+,`)

In order to use the command "Upload submission", your workspace needs to have a .topcoderrc file, which will contain json. It will have only one attribute named "challengeId" which will contain a string value. The value will be the id of the challenge to which you wish to upload the workspace too. You can find the id of the challenge by looking at the url of the challenge details. It will be of the form `https://www.topcoder.com/challenges/{challengeId}`

## Commands

The extension provides several commands in the Command Palette:

- *Topcoder: Login* to login in Topcoder using your username and password.
- *Topcoder: Logout* to clear the stored login token.
- *Topcoder: View open challenges* to list active challenges in a tabular view. Upon clicking on a challenge title, challenge details will be displayed in a new tab.
- *Topcoder: Upload submission* to upload the current workspace to topcoder challenge.

All commands require you to provide your Topcoder username and password, so make sure to set them _before_ you execute them

## Activity Bar

The extensions adds an activity bar item that has 3 sections.

- *Your Active Contests*  will list all the contests that you have registered to.
- *Your Active Submissions* will list all the submissions that you have done. You will be able to view the reviews and artifacts (if any).
- *Home* has 3 parts, which will allow you to access the extension features guide, the setup guid or the list of all active challenges respectively.

## Status Bar

The extensions adds some information to the status bar.

- *Time in EDT timezone* will show local time in EDT Timezone.
- *Countdown until submission phase ends* will show a counter until the end of the submission phase.
- *API Env* will show to what API environment the user is connected (Production/Development).

## Run tests

- Open the debug viewlet (`Ctrl+Shift+D` or `Cmd+Shift+D` on Mac) and from the launch configuration dropdown pick `Extension Tests`.
- Press `F5` to run the tests in a new window with your extension loaded.
- See the output of the test result in the debug console.

You may also run the tests by running `npm test` in a terminal.

**Note**: Before running this command, close all instances of the vscode editor.

## Typescript code lint

- `npm run lint`

## Available starter pack configuration

In `src/config/packs.ts` is located the file to manage which technologies have starter packs available to clone.
The structure is:

```js
{
    name: string - the technology that matches the challenge details technologies property,
    repos: array - contains repo title and url
        {
            title: string - The title of the starter pack,
            url: string - The public url available to clone
        }
}
```
