# VSCode Extension for Topcoder

This extension is meant to closely integrate the Topcoder platform with [VSCode](https://code.visualstudio.com/), the text editor, to allow the user to perform actions related to the Topcoder platform from within the editor, without having to open a browser.

## Settings

Below are the settings you need to set before you can use the extension. You need to reload the VSCode window for any changes in these settings to take effect.

- `TCVSCodeIDE.credentials.username`: Your Topcoder username
- `TCVSCodeIDE.credentials.password`: Your Topcoder password
- `TCVSCodeIDE.shareTelemetryToTC`: the option to share extension usage data with Topcoder. This is a work in progress and at the moment is not active, irrespective of your settings
- `TCVSCodeIDE.useDevelopEndpoint`: the option to work on the development environment of Topcoder instead of production

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
- *Your Active Submissions* will list all the submissions that you have done. You will be able to view the reviews and artifacts (if any) for the submission.
- *Home* has 3 parts, which will allow you to access the extension features guide, the setup guid or the list of all active challenges respectively.

## Features

- You can view the list of open challenges in the Topcoder platform
- You can view the details of a challenge
- You can register for open challenges
- You can initialize your workspace after registering for a challenge. This creates a `.topcoderrc` file with the challenge details present in it. This file is used by the extension and never to be altered manually
- You can also clone starter packs right into your workspace based on the technologies associated with the contest
- If your workspace is initialized, you can see the time until the end of the submission phase in the side bar
- You can also see the current time (as used by the Topcoder platform, for example in Online Review) status bar
- Finally you can switch between the topcoder production and development instances
