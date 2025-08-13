import * as React from 'react';
import { BasePickerProps } from '../typings/BasePicker';
import { MaterialUiPickersDate } from '../typings/date';
import { BaseTimePickerProps } from '../TimePicker/TimePicker';
import { BaseDatePickerProps } from '../DatePicker/DatePicker';
declare const viewsMap: {
    year: React.FC<import("../views/Year/YearView").YearSelectionProps>;
    month: React.FC<import("../views/Month/MonthView").MonthSelectionProps>;
    date: React.ComponentType<Pick<React.PropsWithChildren<Pick<import("../views/Calendar/Calendar").CalendarProps, "classes" | "theme" | "onChange" | "date" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "leftArrowButtonProps" | "rightArrowButtonProps" | "minDate" | "maxDate" | "disablePast" | "disableFuture" | "renderDay" | "allowKeyboardControl" | "shouldDisableDate" | "loadingIndicator">>, "children" | "onChange" | "date" | "onMonthChange" | "leftArrowIcon" | "rightArrowIcon" | "leftArrowButtonProps" | "rightArrowButtonProps" | "minDate" | "maxDate" | "disablePast" | "disableFuture" | "renderDay" | "allowKeyboardControl" | "shouldDisableDate" | "loadingIndicator"> & import("@material-ui/core/styles").StyledComponentProps<"transitionContainer" | "progressContainer" | "week">>;
    hours: React.FC<import("../views/Clock/ClockView").TimePickerViewProps>;
    minutes: React.FC<import("../views/Clock/ClockView").TimePickerViewProps>;
    seconds: React.FC<import("../views/Clock/ClockView").TimePickerViewProps>;
};
export declare type PickerView = keyof typeof viewsMap;
export declare type ToolbarComponentProps = BaseDatePickerProps & BaseTimePickerProps & {
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
        strictCompareDates?: boolean | undefined;
        disablePast?: boolean | undefined;
        disableFuture?: boolean | undefined;
        animateYearScrolling?: boolean | undefined;
        onYearChange?: ((date: MaterialUiPickersDate) => void) | undefined;
        leftArrowIcon?: React.ReactNode;
        rightArrowIcon?: React.ReactNode;
        renderDay?: ((day: MaterialUiPickersDate, selectedDate: MaterialUiPickersDate, dayInCurrentMonth: boolean, dayComponent: JSX.Element) => JSX.Element) | undefined;
        allowKeyboardControl?: boolean | undefined;
        leftArrowButtonProps?: Partial<import("@material-ui/core/OverridableComponent").OverrideProps<import("@material-ui/core").IconButtonTypeMap<{}, "button">, "button">> | undefined;
        rightArrowButtonProps?: Partial<import("@material-ui/core/OverridableComponent").OverrideProps<import("@material-ui/core").IconButtonTypeMap<{}, "button">, "button">> | undefined;
        shouldDisableDate?: ((day: MaterialUiPickersDate) => boolean) | undefined;
        onMonthChange?: ((date: MaterialUiPickersDate) => void | Promise<void>) | undefined;
        loadingIndicator?: JSX.Element | undefined;
    };
    render(): JSX.Element;
}
export {};
