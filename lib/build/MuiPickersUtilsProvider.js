"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiPickersUtilsProvider = exports.MuiPickersContext = void 0;
var React = __importStar(require("react"));
var PropTypes = __importStar(require("prop-types"));
exports.MuiPickersContext = React.createContext(null);
var MuiPickersUtilsProvider = function (_a) {
    var Utils = _a.utils, children = _a.children, locale = _a.locale, libInstance = _a.libInstance;
    var utils = React.useMemo(function () { return new Utils({ locale: locale, instance: libInstance }); }, [Utils, libInstance, locale]);
    return React.createElement(exports.MuiPickersContext.Provider, { value: utils, children: children });
};
exports.MuiPickersUtilsProvider = MuiPickersUtilsProvider;
exports.MuiPickersUtilsProvider.propTypes = {
    utils: PropTypes.func.isRequired,
    locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    children: PropTypes.oneOfType([
        PropTypes.element.isRequired,
        PropTypes.arrayOf(PropTypes.element.isRequired),
    ]).isRequired,
};
exports.default = exports.MuiPickersUtilsProvider;
