# VSCode Extension for Topcoder - Getting Started

This guide will help you set up the extension.

1. `Setup user credentials`
Open VSCode settings via `File > Preferences > Settings` or using the keyboard shortcut `Ctrl+,` . Under either User settings or Workspace settings, navigate to `Extensions > Topcoder Workflow`. You will find two fields to set your topcoder username and password. These values are autosaved.
Note for macOS users: The Preferences menu is under `Code` not `File`. For example, `Code > Preferences > Settings`.
![settings](https://i.imgur.com/9LLpLHN.png))

2. `Login`
This will use the credentials setup above to authenticate the user with Topcoder. Login can be performed explicitly via the command `Topcoder: Login` from the Command Palette. Note: login is performed implicitly if a different command is invoked without invoke `Topcoder: Login` first.
![Login](https://i.imgur.com/3saNjIY.gif)

3. `Logout`
This will terminate the user's session. This command must be explicitly invoked from the Command Palette via `Topcoder: Logout`
![logout](https://i.imgur.com/7MVhLQg.gif)

4. `Production API Environment`
This will allow to change between development and production API's. If checked all the requests goes to production, if not goes to development
![env](https://i.imgur.com/G3OMPQ6.png)

5. `Telemetry`
This extension has a telemetry system. To deactivate uncheck this property.
![telemetry](https://i.imgur.com/5lMQZih.png)
