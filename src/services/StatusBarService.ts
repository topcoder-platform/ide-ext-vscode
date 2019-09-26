import * as vscode from 'vscode';
import * as _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';
import * as moment from 'moment';
import ChallengeService from '../services/ChallengeService';
import AuthService from '../services/AuthService';
import DateHelper from '../helpers/DateHelper';
import * as constants from '../constants';

/**
 * Class responsible to set status bar items
 */
export default class StatusBarService {

    // Item to show the countdown till submission phase ends
    private counterStatusBarItem!: vscode.StatusBarItem;
    // Time in EDT
    private edtTimeStatusBarItem!: vscode.StatusBarItem;
    // API enviroment
    private environmentStatusBarITem!: vscode.StatusBarItem;

    constructor(private context: vscode.ExtensionContext) { }

    /**
     * Registration of all status bar items
     */
    public async registerStatusBarItems() {
        // if exists, we need to get the submission phase end date
        const scheduleEndTime = await this.getScheduledEndTime();
        this.counterStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 3);
        this.edtTimeStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 2);
        this.environmentStatusBarITem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1);
        this.context.subscriptions.push(this.counterStatusBarItem,
            this.edtTimeStatusBarItem, this.environmentStatusBarITem);
        this.updateEnviromentBarItem();
        // to update every second the time and countdown counter (if exists)
        setInterval(() => {
            this.updateCounterStatusBarItem(scheduleEndTime);
            this.updateEdtTimeStatusBarItem();
        }, 1000);

    }

    /**
     * Update environment status bar item to show the correct environment
     */
    private updateEnviromentBarItem() {
        const config = vscode.workspace.getConfiguration(constants.extensionConfigSectionName);
        const isProd = config.get(constants.environment);

        this.environmentStatusBarITem.text = isProd ? 'Topcoder production environment' : 'Topcoder development environment';
        this.environmentStatusBarITem.show();

    }

    /**
     * Updates time in status bar item
     */
    private updateEdtTimeStatusBarItem() {
       // EDT is -0400 regarding UTC (https://en.wikipedia.org/wiki/Eastern_Time_Zone)
        this.edtTimeStatusBarItem.text =
            moment(new Date()).utcOffset('-0400').format('YYYY-MM-DD HH:mm:ss') + ' EDT';
        this.edtTimeStatusBarItem.show();
    }

    /**
     * Gets the submission scheduled end time
     */
    private async getScheduledEndTime() {
        const workspacePath = vscode.workspace.rootPath || '';
        if (!fs.existsSync(path.join(workspacePath, '.topcoderrc'))) {
            return null;
        }
        const rcContent = fs.readFileSync(path.join(workspacePath, '.topcoderrc'), 'utf-8');
        let challengeId = '';
        try {
            challengeId = JSON.parse(rcContent).challengeId;
            if (typeof challengeId === 'number') {
                challengeId = challengeId + '';
            }
        } catch (err) {
            return null;
        }
        if (typeof challengeId !== 'string' || !(challengeId.trim())) {
            return null;
        }
        // get challenge details if challenge exists
        const token = await AuthService.updateTokenGlobalState(this.context);
        const challengeDetails = await ChallengeService.getChallengeDetails(challengeId, token);
        const phases: any[] = _.get(challengeDetails, 'result.content.phases', []);
        const submissionPhase = phases.find((t) => t.type === 'Submission');

        if (submissionPhase) {
            return submissionPhase.scheduledEndTime;
        }

        return null;
    }
    /**
     * Updates the countdown counter
     * @param date scheduled end time date
     */
    private updateCounterStatusBarItem(date: string) {
        if (_.isEmpty(date)) {
            this.counterStatusBarItem.hide();
        } else {
            this.counterStatusBarItem.text =
                DateHelper.getFormatDiffDatesInUtc(new Date(date), new Date());
            this.counterStatusBarItem.show();
        }
    }

}
