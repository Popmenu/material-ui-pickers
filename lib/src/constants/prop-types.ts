import { BaseTimePickerProps } from '../TimePicker/TimePicker';
import { BaseDatePickerProps } from '../DatePicker/DatePicker';

export type ParsableDate = object | string | number | Date | null | undefined;

/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */
export const timePickerDefaultProps = {
  ampm: true,
  invalidDateMessage: 'Invalid Time Format',
} as BaseTimePickerProps;

export const datePickerDefaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  invalidDateMessage: 'Invalid Date Format',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  allowKeyboardControl: true,
} as BaseDatePickerProps;

export const dateTimePickerDefaultProps = {
  ...timePickerDefaultProps,
  ...datePickerDefaultProps,
  showTabs: true,
} as BaseTimePickerProps & BaseDatePickerProps;
