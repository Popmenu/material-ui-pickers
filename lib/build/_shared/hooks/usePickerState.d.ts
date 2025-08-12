import { MaterialUiPickersDate } from '../../typings/date';
import { BasePickerProps } from '../../typings/BasePicker';
export interface StateHookOptions {
    getDefaultFormat: () => string;
}
export declare function usePickerState(props: BasePickerProps, options: StateHookOptions): {
    pickerProps: {
        date: import("moment").Moment | import("luxon").DateTime | Date | null;
        onChange: (newDate: MaterialUiPickersDate, isFinish?: boolean) => void;
    };
    inputProps: {
        inputValue: string;
        validationError: import("react").ReactNode;
        openPicker: () => false | void;
    };
    wrapperProps: {
        format: string;
        open: boolean;
        onClear: () => void;
        onAccept: () => void;
        onSetToday: () => void;
        onDismiss: () => void;
    };
};
