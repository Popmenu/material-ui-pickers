import * as React from 'react';
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"hidden" | "current" | "day" | "daySelected" | "dayDisabled">;
export interface DayProps {
    /** Day text */
    children: React.ReactNode;
    /** Is today */
    current?: boolean;
    /** Disabled? */
    disabled?: boolean;
    /** Hidden? */
    hidden?: boolean;
    /** Selected? */
    selected?: boolean;
}
export declare const Day: React.FC<DayProps>;
export default Day;
