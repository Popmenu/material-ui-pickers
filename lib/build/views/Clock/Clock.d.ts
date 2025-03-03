import * as React from 'react';
import { ClockViewType } from '../../constants/ClockType';
import { WithStyles, Theme } from '@material-ui/core/styles';
export interface ClockProps extends WithStyles<typeof styles> {
    type: ClockViewType;
    value: number;
    onChange: (value: number, isFinish?: boolean) => void;
    ampm?: boolean;
    minutesStep?: number;
    children: React.ReactElement<any>[];
}
export declare class Clock extends React.Component<ClockProps> {
    static propTypes: any;
    static defaultProps: {
        ampm: boolean;
        minutesStep: number;
    };
    isMoving: boolean;
    setTime(e: any, isFinish?: boolean): void;
    handleTouchMove: (e: React.TouchEvent) => void;
    handleTouchEnd: (e: React.TouchEvent) => void;
    handleMove: (e: React.MouseEvent<HTMLDivElement>) => void;
    handleMouseUp: (e: React.MouseEvent) => void;
    hasSelected: () => boolean;
    render(): JSX.Element;
}
export declare const styles: (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "container" | "clock" | "squareMask" | "pin">;
declare const _default: React.ComponentType<(Pick<ClockProps, "children" | "value" | "onChange" | "type" | "ampm" | "minutesStep"> | Pick<ClockProps & {
    children?: React.ReactNode;
}, "children" | "value" | "onChange" | "type" | "ampm" | "minutesStep">) & import("@material-ui/core/styles").StyledComponentProps<"container" | "clock" | "squareMask" | "pin">>;
export default _default;
