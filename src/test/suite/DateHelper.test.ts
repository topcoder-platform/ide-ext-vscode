import { expect } from 'chai';
import DateHelper from '../../helpers/DateHelper';

suite('DateHelper unit tests', () => {
    test('should return 00:01:00:00 as difference of two dates', () => {
        const initialDate = new Date('2019-09-19 10:00:00');
        const finalDate = new Date('2019-09-19 11:00:00');
        const diff = DateHelper.getFormatDiffDatesInUtc(finalDate, initialDate);
        expect(diff).to.eq('00:01:00:00');
    });
});
