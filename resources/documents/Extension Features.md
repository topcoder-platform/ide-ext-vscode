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
