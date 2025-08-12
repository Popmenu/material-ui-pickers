import { BaseTimePickerProps } from '../TimePicker/TimePicker';
import { BaseDatePickerProps } from '../DatePicker/DatePicker';
export type ParsableDate = object | string | number | Date | null | undefined;
export declare const timePickerDefaultProps: BaseTimePickerProps;
export declare const datePickerDefaultProps: BaseDatePickerProps;
export declare const dateTimePickerDefaultProps: BaseTimePickerProps & BaseDatePickerProps;
