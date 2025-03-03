import * as React from 'react';
export interface MonthProps {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected?: boolean;
    value: any;
}
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"root" | "monthSelected" | "monthDisabled">;
export declare const Month: React.FC<MonthProps>;
export default Month;
