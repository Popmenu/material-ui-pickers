import * as React from 'react';
import { MaterialUiPickersDate } from '../typings/date';
import { ToolbarComponentProps } from '../Picker/Picker';
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"separator" | "toolbarLandscape" | "toolbarAmpmLeftPadding" | "hourMinuteLabel" | "hourMinuteLabelAmpmLandscape" | "hourMinuteLabelReverse" | "ampmSelection" | "ampmLandscape" | "ampmSelectionWithSeconds" | "ampmLabel">;
export declare function useMeridiemMode(date: MaterialUiPickersDate, ampm: boolean | undefined, onChange: (date: MaterialUiPickersDate, isFinished?: boolean | undefined) => void): {
    meridiemMode: "am" | "pm";
    handleMeridiemChange: (mode: "am" | "pm") => void;
};
export declare const TimePickerToolbar: React.FC<ToolbarComponentProps>;
export default TimePickerToolbar;
