import * as React from 'react';
import { Omit } from '../_helpers/utils';
import { Utils } from '../typings/date';
export interface WithUtilsProps {
    utils: Utils;
}
export declare const withUtils: () => <P extends WithUtilsProps>(Component: React.ComponentType<P>) => React.SFC<Omit<P, "utils">>;
