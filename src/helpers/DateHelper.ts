import * as moment from 'moment';

/**
 * Helper to deal with dates
 */
export default class DateHelper {
    /**
     * Gets the diff of two dates in days:hours:min:ss
     * @param finalDate final date to calculate diff
     * @param initialDate initial date to calculate diff
     */
    public static getFormatDiffDatesInUtc(finalDate: Date, initialDate: Date) {
        const dateEnd = moment(finalDate).utc();
        const dateInitial = moment(initialDate).utc();
        const duration = moment.duration(dateEnd.diff(dateInitial));
        let finalStr = '';

        // Get Days and subtract from duration
        const days = duration.days();
        duration.subtract(moment.duration(days, 'days'));

        // Get hours and subtract from duration
        const hours = duration.hours();
        duration.subtract(moment.duration(hours, 'hours'));

        // Get Minutes and subtract from duration
        const minutes = duration.minutes();
        duration.subtract(moment.duration(minutes, 'minutes'));

        // Get seconds
        const seconds = duration.seconds();
        finalStr += days < 10 ? '0' + days + ':' : days + ':';
        finalStr += hours < 10 ? '0' + hours + ':' : hours + ':';
        finalStr += minutes < 10 ? '0' + minutes + ':' : minutes + ':';
        finalStr += seconds < 10 ? '0' + seconds : seconds;

        return finalStr;
    }
}
