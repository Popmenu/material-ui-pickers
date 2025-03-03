import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Utils } from './typings/date';

export const MuiPickersContext = React.createContext<Utils | null>(null);

export interface MuiPickersUtilsProviderProps {
  utils: Utils;
  children: React.ReactNode;
}

export const MuiPickersUtilsProvider: React.FC<MuiPickersUtilsProviderProps> = ({
  utils,
  children,
}) => {
  return <MuiPickersContext.Provider value={utils} children={children} />;
};

// @ts-ignore
MuiPickersUtilsProvider.propTypes = {
  // @ts-expect-error
  utils: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element.isRequired),
  ]).isRequired,
};

export default MuiPickersUtilsProvider;
