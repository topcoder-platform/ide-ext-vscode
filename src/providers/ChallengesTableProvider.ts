import * as vscode from 'vscode';
import * as _ from 'lodash';
import ChallengeService from '../services/ChallengeService';
import AuthService from '../services/AuthService';

/**
 * Generates a markdown document.
 */
export default class ChallengesTableProvider implements vscode.TextDocumentContentProvider {

    constructor(private context: vscode.ExtensionContext) {}

    // Emitter and its event
    onDidChangeEmitter = new vscode.EventEmitter<vscode.Uri>();
    onDidChange = this.onDidChangeEmitter.event;

    async provideTextDocumentContent(uri: vscode.Uri): Promise<string> {
        const token = await AuthService.updateTokenGlobalState(this.context);
        const response = await ChallengeService.getActiveChallenges(token);
        const challenges = _.get(response, 'result.content', []);

        let tableMd = '|Challenge Name|Challenge Type|Number of registrants|Prizes|Current Phase|\n';
        tableMd += '|--------|--------|--------|--------|--------|\n';

        _.each(challenges, (challenge) => {
            const filteredPhases = _.filter(challenge.currentPhases, (item) => item.phaseStatus === 'Open');

            const challengeName = this.escapePipeChar(challenge.name);
            const challengeType = this.escapePipeChar(challenge.subTrack);
            const numRegistrants = this.escapePipeChar(challenge.numRegistrants);
            const prizes = this.escapePipeChar(_.join(_.map(challenge.prizes, (x) => `\$${x}`), ', '));
            const currentPhases = this.escapePipeChar(_.join(_.map(filteredPhases, 'phaseType'), ', '));

            const row = `|${challengeName}|${challengeType}|${numRegistrants}|${prizes}|${currentPhases}|\n`;

            tableMd += row;
        });

        return tableMd;
    }

    /**
     * Escape the `|` character in markdown.
     * @param str
     * @return The escaped string.
     */
    private escapePipeChar(str: string): string {
        return _.replace(str, '|', '\\|');
    }
}
