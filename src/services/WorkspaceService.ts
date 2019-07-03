import * as archiver from 'archiver';
import * as fs from 'fs';
import * as path from 'path';
import * as globby from 'globby';
import logger from '../common/logger';
import { WORKSPACE_CONFIG_FILE } from '../constants';

/**
 * Processes files inside the workspace.
 */
export default class WorkspaceService {

    /**
     * Checks if the workspace config file exists.
     * @param string workspaceFolder
     * @returns boolean `true` if the file workspace config file exists.
     */
    public static checkWorkspaceConfigFile(workspaceFolder: string): boolean {
        try {
            fs.accessSync(path.resolve(workspaceFolder, WORKSPACE_CONFIG_FILE), fs.constants.F_OK);
        } catch (err) {
            return false;
        }

        return true;
    }

    /**
     * Parses the workspace config file and return an object.
     * @param string workspaceFolder
     * @returns object
     */
    public static parseWorkspaceConfigFile(workspaceFolder: string) {
        const file = fs.readFileSync(path.resolve(workspaceFolder, WORKSPACE_CONFIG_FILE), 'utf8');

        return JSON.parse(file);
    }

    /**
     * Archives the files inside the workspace. If a .gitignore file is present,
     * then the files specified there are ignored.
     * @param archivePath
     * @param workspaceFolder
     */
    public static async archiveWorkspace(archivePath: string, workspaceFolder: string) {
        const output = fs.createWriteStream(archivePath);

        const archive = archiver('zip');

        const archiveName = path.basename(archivePath);

        const paths = await globby('**', {
            cwd: workspaceFolder,
            dot: true,
            gitignore: true,
            ignore: ['.git', archiveName],
            onlyFiles: false // Includes both empty directories and files
        });

        archive.pipe(output);

        paths.forEach(item => {
            archive.file(path.resolve(workspaceFolder, item), { name: item });
        });

        await archive.finalize();
        logger.debug('Finished archiving the workspace');
    }

    /**
     * Removes the generated zip file from the workspace.
     * @param archivePath
     */
    public static async cleanArchive(archivePath: string) {
        try {
            fs.unlinkSync(archivePath);
        } catch (err) {
            logger.error(err);
        }
    }
}
