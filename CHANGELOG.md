# Changelog - Topcoder Workflow VSCode Extension

## v1.0.1 - 30th January, 2020

### Changes

- Cleaned up README to emphasize that telemetry is still turned on and option to control this is a WIP
- Updated Changelog

## v1.0.0 - 30th January, 2020

### Changes

- We are no longer in beta and now have a stable release!

## v0.3.1 - 28th January, 2020

### Changes

- Bumped the version of a dependency to fix an issue with publishing to marketplace

## v0.3.0 - 28th January, 2020

### Changes

- Hide settings that toggle signing up to share telemetry (earlier release disabled this configuration and this change hides the configuration in the settings)
- Fix issue where links in the Home section of Topcoder View were not working [BUG 56](https://github.com/topcoder-platform/ide-ext-vscode/issues/56)
- Display Review Types in Submission view [Feature 57](https://github.com/topcoder-platform/ide-ext-vscode/issues/57)
- Update connection parameter for Topcoder production instance [Bug 63](https://github.com/topcoder-platform/ide-ext-vscode/issues/63)
- Keep Changelog up to date [Bug 55](https://github.com/topcoder-platform/ide-ext-vscode/issues/55)

## v0.2.0 - 1st November, 2019

### Changes

- Added editorconfig to ensure all contributors of the extension follow the same conventions
- Added extension recommendations for contributors of the extension
- Added feature to clone the git repository associated with a registered challenge to clone from within the IDE. Also supports cloning of repositories from the [templates](https://github.com/topcoder-platform-templates) and any github / gitlab specific repositories
- Updated icons used in the activity bar view

## v0.1.2 - 7th October, 2019

### Changes

- Improved README
- Added telemetry to understand extension usage

### Note

We have disabled the configuration that allowed you to control if you participated in the telemetry or not. The data is being collected anonymously for now and for all. We expect to bring this back before we come out of beta

## v0.1.1 - 30th September, 2019

### Changes

- Fix issue where contests that did not have any technology listed against them would fail to load
- Fix a lint error

## v0.1.0 - 27th September, 2019

### Features

- You can login and logout of Topcoder
- You can view the list of open challenges in the Topcoder platform
- You can view the details of a challenge
- You can register for open challenges
- You can initialize your workspace after registering for a challenge. This creates a `.topcoderrc` file with the challenge details present in it. This file is used by the extension and never to be altered manually
- You can also clone starter packs right into your workspace based on the technologies associated with the contest
- If your workspace is initialized, you can see the time until the end of the submission phase in the side bar
- You can upload your current workspace as a solution for a contest (only if workspace is initialized)
- You can also see the current time (as used by the Topcoder platform, for example in Online Review) status bar
- Finally you can switch between the topcoder production and development instances
