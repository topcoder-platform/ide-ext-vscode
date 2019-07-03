import * as winston from 'winston';
import { LOG_LEVEL } from '../constants';

const LEVEL = Symbol.for('level');
const MESSAGE = Symbol.for('message');

const logger = winston.createLogger({
    level: LOG_LEVEL,
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console({
            /**
             * Currently vscode does not support a logger that outputs directly to stdout when viewing
             * the output in debug console. For this reason is necessary to override the log method and
             * use console instead.
             *
             * More information here https://github.com/Microsoft/vscode/issues/44212 and
             * https://github.com/winstonjs/winston/issues/1305
             */
            log(info, callback) {
                // @ts-ignore
                setImmediate(() => this.emit('logged', info));

                // @ts-ignore
                if (this.stderrLevels[info[LEVEL]]) {
                    console.error(info[MESSAGE]);

                    if (callback) {
                        callback();
                    }
                    return;
                }

                console.log(info[MESSAGE]);

                if (callback) {
                    callback();
                }
            }
        })
    ]
});

export default logger;
