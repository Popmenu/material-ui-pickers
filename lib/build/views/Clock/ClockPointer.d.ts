import * as React from 'react';
import { ClockViewType } from '../../constants/ClockType';
import { Theme } from '@material-ui/core/styles';
import { WithStyles } from '@material-ui/core/styles';
export interface ClockPointerProps extends WithStyles<typeof styles> {
    value: number;
    hasSelected: boolean;
    isInner: boolean;
    type: ClockViewType;
}
export declare class ClockPointer extends React.Component<ClockPointerProps> {
    static getDerivedStateFromProps: (nextProps: ClockPointerProps, state: ClockPointer["state"]) => {
        toAnimateTransform: boolean;
        previousType: ClockViewType;
    };
    state: {
        toAnimateTransform: boolean;
        previousType: undefined;
    };
    getAngleStyle: () => {
        height: string;
        transform: string;
    };
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "animateTransform" | "pointer" | "thumb" | "noPoint">;
declare const _default: React.ComponentType<(Pick<ClockPointerProps, "value" | "type" | "hasSelected" | "isInner"> | Pick<ClockPointerProps & {
    children?: React.ReactNode;
}, "children" | "value" | "type" | "hasSelected" | "isInner">) & import("@material-ui/core/styles").StyledComponentProps<"animateTransform" | "pointer" | "thumb" | "noPoint">>;
export default _default;
