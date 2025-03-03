import * as React from 'react';
import { PickerView } from '../../Picker/Picker';
import { MaterialUiPickersDate } from '../../typings/date';
export declare function useViews(views: PickerView[], openTo: PickerView, onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void): {
    handleChangeAndOpenNext: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    openView: "date" | "year" | "month" | "minutes" | "seconds" | "hours";
    setOpenView: React.Dispatch<React.SetStateAction<"date" | "year" | "month" | "minutes" | "seconds" | "hours">>;
};
