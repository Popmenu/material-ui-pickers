import * as React from 'react';
import { Utils } from './typings/date';
export declare const MuiPickersContext: React.Context<Utils | null>;
export interface MuiPickersUtilsProviderProps {
    utils: Utils;
    children: React.ReactNode;
}
export declare const MuiPickersUtilsProvider: React.FC<MuiPickersUtilsProviderProps>;
export default MuiPickersUtilsProvider;
