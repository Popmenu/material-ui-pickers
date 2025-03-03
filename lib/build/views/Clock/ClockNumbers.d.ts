import { MaterialUiPickersDate, Utils } from '../../typings/date';
export declare const getHourNumbers: ({ ampm, utils, date, }: {
    ampm: boolean;
    utils: Utils;
    date: MaterialUiPickersDate;
}) => JSX.Element[];
export declare const getMinutesNumbers: ({ value, utils }: {
    value: number;
    utils: Utils;
}) => JSX.Element[];
