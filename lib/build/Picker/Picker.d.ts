import * as React from 'react';
import { BasePickerProps } from '../typings/BasePicker';
import { MaterialUiPickersDate } from '../typings/date';
import { BaseTimePickerProps } from '../TimePicker/TimePicker';
import { BaseDatePickerProps } from '../DatePicker/DatePicker';
declare const viewsMap: {
    year: React.FC<import("../views/Year/YearView").YearSelectionProps>;
    month: React.FC<import("../views/Month/MonthView").MonthSelectionProps>;
    date: React.ComponentType<Pick<import("../_helpers/utils").Omit<import("../views/Calendar/Calendar").CalendarProps, "utils"> & {
        children?: React.ReactNode;
    }, "children" | "onChange" | "date" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "leftArrowButtonProps" | "rightArrowButtonProps" | "minDate" | "maxDate" | "disablePast" | "disableFuture" | "renderDay" | "allowKeyboardControl" | "shouldDisableDate" | "loadingIndicator"> & import("@material-ui/core/styles").StyledComponentProps<"transitionContainer" | "progressContainer" | "week">>;
    hours: React.FC<import("../views/Clock/ClockView").TimePickerViewProps>;
    minutes: React.FC<import("../views/Clock/ClockView").TimePickerViewProps>;
    seconds: React.FC<import("../views/Clock/ClockView").TimePickerViewProps>;
};
export type PickerView = keyof typeof viewsMap;
export type ToolbarComponentProps = BaseDatePickerProps & BaseTimePickerProps & {
    views: PickerView[];
    openView: PickerView;
    date: MaterialUiPickersDate;
    setOpenView: (view: PickerView) => void;
    onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    hideTabs?: boolean;
    dateRangeIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;
    isLandscape: boolean;
};
export interface PickerViewProps extends BaseDatePickerProps, BaseTimePickerProps {
    views: PickerView[];
    openTo: PickerView;
    disableToolbar?: boolean;
    ToolbarComponent: React.ComponentType<ToolbarComponentProps>;
    hideTabs?: boolean;
    dateRangeIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;
}
interface PickerProps extends PickerViewProps {
    date: MaterialUiPickersDate;
    orientation?: BasePickerProps['orientation'];
    onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
}
export declare class Picker extends React.Component<PickerProps> {
    static defaultProps: {
        views: string[];
        minDate?: import("../constants/prop-types").ParsableDate;
        maxDate?: import("../constants/prop-types").ParsableDate;
        strictCompareDates?: boolean;
        disablePast?: boolean;
        disableFuture?: boolean;
        animateYearScrolling?: boolean;
        onYearChange?: (date: MaterialUiPickersDate) => void;
        leftArrowIcon?: React.ReactNode;
        rightArrowIcon?: React.ReactNode;
        renderDay?: (day: MaterialUiPickersDate, selectedDate: MaterialUiPickersDate, dayInCurrentMonth: boolean, dayComponent: JSX.Element) => JSX.Element;
        allowKeyboardControl?: boolean;
        leftArrowButtonProps?: Partial<import("@material-ui/core").IconButtonProps>;
        rightArrowButtonProps?: Partial<import("@material-ui/core").IconButtonProps>;
        shouldDisableDate?: (day: MaterialUiPickersDate) => boolean;
        onMonthChange?: (date: MaterialUiPickersDate) => void | Promise<void>;
        loadingIndicator?: JSX.Element;
    };
    render(): JSX.Element;
}
export {};
