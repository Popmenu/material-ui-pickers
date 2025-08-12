import * as React from 'react';
import { Omit } from '../_helpers/utils';
import { IUtils } from '@date-io/core/IUtils';
import { MaterialUiPickersDate } from '../typings/date';
export interface WithUtilsProps {
    utils: IUtils<MaterialUiPickersDate>;
}
export declare const withUtils: () => <P extends WithUtilsProps>(Component: React.ComponentType<P>) => React.SFC<Omit<P, "utils">>;
