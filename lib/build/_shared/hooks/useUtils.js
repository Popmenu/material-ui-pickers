"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUtils = void 0;
exports.useUtils = useUtils;
var react_1 = require("react");
var MuiPickersUtilsProvider_1 = require("../../MuiPickersUtilsProvider");
var checkUtils = function (utils) {
    if (!utils) {
        // tslint:disable-next-line
        throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
    }
};
exports.checkUtils = checkUtils;
function useUtils() {
    var utils = (0, react_1.useContext)(MuiPickersUtilsProvider_1.MuiPickersContext);
    (0, exports.checkUtils)(utils);
    return utils;
}
