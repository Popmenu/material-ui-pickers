import { createContext, createElement, useContext } from 'react';
import { object, oneOfType, element, arrayOf } from 'prop-types';

var MuiPickersContext = createContext(null);
var MuiPickersUtilsProvider = function MuiPickersUtilsProvider(_ref) {
  var utils = _ref.utils,
      children = _ref.children;
  return createElement(MuiPickersContext.Provider, {
    value: utils,
    children: children
  });
}; // @ts-ignore

process.env.NODE_ENV !== "production" ? MuiPickersUtilsProvider.propTypes = {
  // @ts-expect-error
  utils: object.isRequired,
  children: oneOfType([element.isRequired, arrayOf(element.isRequired)]).isRequired
} : void 0;

var checkUtils = function checkUtils(utils) {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
  }
};
function useUtils() {
  var utils = useContext(MuiPickersContext);
  checkUtils(utils);
  return utils;
}

export { MuiPickersUtilsProvider as M, MuiPickersContext as a, useUtils as u };
//# sourceMappingURL=useUtils-68f0752a.js.map
