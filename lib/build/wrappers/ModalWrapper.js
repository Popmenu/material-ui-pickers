"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalWrapper = void 0;
var React = __importStar(require("react"));
var PropTypes = __importStar(require("prop-types"));
var ModalDialog_1 = __importDefault(require("../_shared/ModalDialog"));
var useKeyDown_1 = require("../_shared/hooks/useKeyDown");
var ModalWrapper = function (_a) {
    var open = _a.open, children = _a.children, _b = _a.okLabel, okLabel = _b === void 0 ? 'OK' : _b, _c = _a.cancelLabel, cancelLabel = _c === void 0 ? 'Cancel' : _c, _d = _a.clearLabel, clearLabel = _d === void 0 ? 'Clear' : _d, _e = _a.todayLabel, todayLabel = _e === void 0 ? 'Today' : _e, _f = _a.showTodayButton, showTodayButton = _f === void 0 ? false : _f, _g = _a.clearable, clearable = _g === void 0 ? false : _g, DialogProps = _a.DialogProps, showTabs = _a.showTabs, wider = _a.wider, InputComponent = _a.InputComponent, DateInputProps = _a.DateInputProps, onClear = _a.onClear, onAccept = _a.onAccept, onDismiss = _a.onDismiss, onSetToday = _a.onSetToday, other = __rest(_a, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"]);
    (0, useKeyDown_1.useKeyDown)(open, {
        Enter: onAccept,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(InputComponent, __assign({}, other, DateInputProps)),
        React.createElement(ModalDialog_1.default, __assign({ wider: wider, showTabs: showTabs, open: open, onClear: onClear, onAccept: onAccept, onDismiss: onDismiss, onSetToday: onSetToday, clearLabel: clearLabel, todayLabel: todayLabel, okLabel: okLabel, cancelLabel: cancelLabel, clearable: clearable, showTodayButton: showTodayButton, children: children }, DialogProps))));
};
exports.ModalWrapper = ModalWrapper;
exports.ModalWrapper.propTypes = {
    okLabel: PropTypes.node,
    cancelLabel: PropTypes.node,
    clearLabel: PropTypes.node,
    clearable: PropTypes.bool,
    todayLabel: PropTypes.node,
    showTodayButton: PropTypes.bool,
    DialogProps: PropTypes.object,
};
