import * as React from 'react';
export interface YearProps {
    children: React.ReactNode;
    disabled?: boolean;
    onSelect: (value: any) => void;
    selected?: boolean;
    value: any;
    forwardedRef?: React.Ref<HTMLDivElement>;
}
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"root" | "yearSelected" | "yearDisabled">;
export declare const Year: React.FC<YearProps>;
declare const _default: React.ForwardRefExoticComponent<YearProps & React.RefAttributes<HTMLDivElement>>;
export default _default;
