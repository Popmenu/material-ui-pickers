import * as React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { ExtendMui } from '../typings/extendMui';
export interface ToolbarTextProps extends ExtendMui<TypographyProps> {
    selected?: boolean;
    label: string;
}
export declare const useStyles: (props?: any) => import("@material-ui/styles").ClassNameMap<"toolbarTxt" | "toolbarBtnSelected">;
declare const ToolbarText: React.FunctionComponent<ToolbarTextProps>;
export default ToolbarText;
