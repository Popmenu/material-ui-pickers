import { MaterialUiPickersDate, Utils } from '../typings/date';
export declare const getHours: (offsetX: number, offsetY: number, ampm: boolean) => number;
export declare const getMinutes: (offsetX: number, offsetY: number, step?: number) => number;
export declare const getMeridiem: (date: MaterialUiPickersDate, utils: Utils) => "am" | "pm";
export declare const convertToMeridiem: (time: MaterialUiPickersDate, meridiem: "am" | "pm", ampm: boolean, utils: Utils) => MaterialUiPickersDate;
