import { DateType } from '@date-io/type';
import { IUtils } from '@date-io/core/IUtils';

export type MaterialUiPickersDate = DateType | null;

// locale type depends on the library
export type Utils = IUtils<MaterialUiPickersDate, unknown>;
