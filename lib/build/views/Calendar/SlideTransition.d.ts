import * as React from 'react';
export type SlideDirection = 'right' | 'left';
interface SlideTransitionProps {
    transKey: React.Key;
    className?: string;
    slideDirection: SlideDirection;
    children: (nodeRef: React.MutableRefObject<any>) => React.ReactChild;
}
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"transitionContainer" | "slideEnter-left" | "slideEnter-right" | "slideEnterActive" | "slideExit" | "slideExitActiveLeft-left" | "slideExitActiveLeft-right">;
declare const SlideTransition: React.SFC<SlideTransitionProps>;
export default SlideTransition;
