import * as React from 'react';
import { useContext } from 'react';
import * as PropTypes from 'prop-types';

var MuiPickersContext = React.createContext(null);
var MuiPickersUtilsProvider = function MuiPickersUtilsProvider(_ref) {
  var Utils = _ref.utils,
      children = _ref.children,
      locale = _ref.locale,
      libInstance = _ref.libInstance;
  var utils = React.useMemo(function () {
    return new Utils({
      locale: locale,
      instance: libInstance
    });
  }, [Utils, libInstance, locale]);
  return React.createElement(MuiPickersContext.Provider, {
    value: utils,
    children: children
  });
};
process.env.NODE_ENV !== "production" ? MuiPickersUtilsProvider.propTypes = {
  utils: PropTypes.func.isRequired,
  locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.arrayOf(PropTypes.element.isRequired)]).isRequired
} : void 0;
var MuiPickersUtilsProvider$1 = MuiPickersUtilsProvider;

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

export { MuiPickersUtilsProvider$1 as M, MuiPickersContext as a, useUtils as u };
//# sourceMappingURL=useUtils-ba232af6.js.map
