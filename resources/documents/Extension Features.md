## VSCode Extension for Topcoder - Features
This extension has the following features:

1. `View Open Challenges:`
This feature will list the active challenges running on Topcoder. Clicking on the title of any of the challenges will display a page with details of that challenge. This feature can be accessed either using the `Topcoder: View Open Challenges` command from the Command Palette (`Ctrl+Shift+P`) or from the VSCode Activity Bar under `Home > Active Challenges`
![active-challenges](https://i.imgur.com/AI8Cupm.gif)

2. `View Challenge Details`
When a challenge title is selected from a list of challenges, it will display details of that challenge, and also provide the option to register to the challenge if you have not already registered. Challenge details can also be viewed for the challenges listed under the `YOUR ACTIVE CONTESTS` section of the Activity Bar
![challenge-details](https://i.imgur.com/8xUMnD3.gif)

3. `Upload Submission as a solution to a challenge`
When a workspace is properly initialized with a `.topcoderrc` file, this feature will zip and  upload the contents of that workspace as a solution to the challenge specified in the `.topcoderrc` file.
![upload-submission](https://i.imgur.com/IabloWX.gif)

4. `Initialize workspace to enable upload`
After registering to a contest, a button to initialize the current workspace is enabled. Clicking on that button
will create a file named `.topcoderrc` in the root of the workspace, with the challenge id of the registered challenge, for example:
{
    "challengeId" : "30055217"
}
![initialize-workspace](https://i.imgur.com/PhWINcn.gif)

5. `Clone a starter pack`
After registering to a contest, a button to clone a starter pack is enabled when there are configured starter packs for the challenge tech stack.
Clicking on that button will show a list of starter packs that a user can selectt to clone.
If the root folder is not empty, it will ask if the user wants to proceed.
This will automatically initialize the workspace by creating the `.topcoderrc` file.
![clone-starter-pack](https://media.giphy.com/media/QuaGaa7sary08FyQgO/giphy.gif)

5.  `Topcoder Time` aka EDT, Eastern Time, New York Time, UTC-04:00 (or -05:00,
    depending on the the season), is shown in the status bar, in the bottom
    right corner, and it is updated automatically:

    ![topcoder-time](https://i.imgur.com/ZwBreJA.png)

6.  `Time To Submission Deadline`: If the folder opened in IDE contains
    `.topcoderrc` configuration file, which has `challengeId` entry pointing
    to a valid challenge with future submission deadline, the time to deadline
    is shown inside the status bar, in the bottom-left corner, in a human-
    readable format, and it is updated automatically with 5 seconds step:

    ![time-to-submission-deadline](https://i.imgur.com/Wvg8V3T.png)

7.  `Sharing of usage data to Topcoder`. By default, this extension tracks and
    shares to Topcoder its usage data, to be used for debugging and future
    development purposes. This behavior can be disabled from extension
    settings (`Ctrl+,` > Extensions > Topcoder Workflow > Share Telemetry to TC):

    ![share-telemetry-switch](https://i.imgur.com/kiBDjfm.png)

8.  `Topcoder Environment`: Extension can work against production, or development
    Topcoder backend. This can be switched inside extension preferences
    (`Ctrl+,` > Extensions > Topcoder Workflow > Use Development Endpoint).
    The default is development environment, for convenience of development
    before extension release. The currently selected environment is shown
    in the bottom right corner, in the status bar. To switch between environments
    you should also manually logout and login again, using corresponding
    extension commands:

    ![tc-env](https://i.imgur.com/tXETz35.png)
