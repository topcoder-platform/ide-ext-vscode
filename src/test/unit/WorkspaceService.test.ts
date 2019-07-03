import { expect } from 'chai';
import * as mock from 'mock-fs';
import * as fs from 'fs';
import * as path from 'path';
// @ts-ignore
import * as StreamZip from 'node-stream-zip';
import * as constants from '../../constants';
import WorkspaceService from '../../services/WorkspaceService';

const archivePath = path.resolve('archivedir', 'submission.zip');

suite('WorkspaceService Unit tests', () => {
    setup(() => {
        mock({
            'archivedir': {},
            'fakedir': {
                'node_modules': {},
                'ignoredfile.txt': 'ignored',
                'file1.txt': 'content',
                '.gitignore': 'node_modules\nignoredfile.txt',
                'emptyfolder': {},
                [constants.WORKSPACE_CONFIG_FILE]: '{ "challengeId": 384001 }',
            },
            'emptydir': {},
            'invalidjsondir': {
                [constants.WORKSPACE_CONFIG_FILE]: 'invalid',
            }
        });
    });

    teardown(() => {
        mock.restore();
    });

    test('archiveWorkspace() should compress the workspace folder', async () => {
        await WorkspaceService.archiveWorkspace(archivePath, 'fakedir');
        fs.accessSync(archivePath, fs.constants.F_OK);

        // Expected files/folders inside the zip file
        const validEntries = ['file1.txt', '.gitignore', '.topcoderrc', 'emptyfolder/'];

        const zip = new StreamZip({
            file: archivePath,
            storeEntries: true
        });

        // Check for the files inside the zip
        return new Promise((resolve) => {
            zip.on('ready', () => {
                // @ts-ignore
                const entries = Object.values(zip.entries()).map(x => x.name);

                expect(validEntries).to.have.deep.members(entries);

                zip.close();
                resolve();
            });
        });
    });

    test('archiveWorkspace() should fail with non existing workspace folder', async () => {
        const archivePath = path.resolve('archivedir', 'submission.zip');
        try {
            await WorkspaceService.archiveWorkspace(archivePath, 'invalid');
        } catch (err) {
            expect(err.code).to.equal('ENOENT');
            return;
        }
        expect.fail('Should not get here');
    });

    test('parseWorkspaceConfigFile() should return the config as an object', async () => {
        const data = await WorkspaceService.parseWorkspaceConfigFile('fakedir');
        expect(data).to.deep.equal({ challengeId: 384001 });
    });

    test('parseWorkspaceConfigFile() should fail when the config file has invalid JSON', async () => {
        try {
            await WorkspaceService.parseWorkspaceConfigFile('invalidjsondir');
        } catch (err) {
            expect(err.name).to.equal('SyntaxError');
            return;
        }
        expect.fail('Should not get here');
    });

    test(`checkWorkspaceConfigFile() should return true for existing .topcoderrc file`, async () => {
        const exists = await WorkspaceService.checkWorkspaceConfigFile('fakedir');
        expect(exists).equal(true);
    });

    test('checkWorkspaceConfigFile() should return false for a non existing .topcoderrc file', async () => {
        const exists = await WorkspaceService.checkWorkspaceConfigFile('emptydir');
        expect(exists).equal(false);
    });

    test('cleanArchive() should delete the file from the workspace', async () => {
        await WorkspaceService.archiveWorkspace(archivePath, 'fakedir');
        fs.accessSync(archivePath, fs.constants.F_OK);
        await WorkspaceService.cleanArchive(archivePath);

        try {
            fs.accessSync(archivePath, fs.constants.F_OK);
        } catch (err) {
            expect(err.code).to.equal('ENOENT');
            return;
        }
        expect.fail('Should not get here');
    });
});
