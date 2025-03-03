import { useContext } from 'react';
import { Utils } from '../../typings/date';
import { MuiPickersContext } from '../../MuiPickersUtilsProvider';

export const checkUtils = (utils: Utils | null | undefined) => {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error(
      'Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.'
    );
  }
};

export function useUtils() {
  const utils = useContext(MuiPickersContext);
  checkUtils(utils);

  return utils!;
}
