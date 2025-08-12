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
exports.styles = exports.ModalDialog = void 0;
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var dimensions_1 = require("../constants/dimensions");
var styles_1 = require("@material-ui/core/styles");
var ModalDialog = function (_a) {
    var _b, _c;
    var children = _a.children, classes = _a.classes, onAccept = _a.onAccept, onDismiss = _a.onDismiss, onClear = _a.onClear, onSetToday = _a.onSetToday, okLabel = _a.okLabel, cancelLabel = _a.cancelLabel, clearLabel = _a.clearLabel, todayLabel = _a.todayLabel, clearable = _a.clearable, showTodayButton = _a.showTodayButton, showTabs = _a.showTabs, wider = _a.wider, other = __rest(_a, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);
    return (React.createElement(Dialog_1.default, __assign({ role: "dialog", onClose: onDismiss, classes: {
            paper: (0, clsx_1.default)(classes.dialogRoot, (_b = {},
                _b[classes.dialogRootWider] = wider,
                _b)),
        } }, other),
        React.createElement(DialogContent_1.default, { children: children, className: classes.dialog }),
        React.createElement(DialogActions_1.default, { classes: {
                root: (0, clsx_1.default)((_c = {},
                    _c[classes.withAdditionalAction] = clearable || showTodayButton,
                    _c)),
            } },
            clearable && (React.createElement(Button_1.default, { color: "primary", onClick: onClear }, clearLabel)),
            showTodayButton && (React.createElement(Button_1.default, { color: "primary", onClick: onSetToday }, todayLabel)),
            cancelLabel && (React.createElement(Button_1.default, { color: "primary", onClick: onDismiss }, cancelLabel)),
            okLabel && (React.createElement(Button_1.default, { color: "primary", onClick: onAccept }, okLabel)))));
};
exports.ModalDialog = ModalDialog;
exports.ModalDialog.displayName = 'ModalDialog';
exports.styles = (0, styles_1.createStyles)({
    dialogRoot: {
        minWidth: dimensions_1.DIALOG_WIDTH,
    },
    dialogRootWider: {
        minWidth: dimensions_1.DIALOG_WIDTH_WIDER,
    },
    dialog: {
        '&:first-child': {
            padding: 0,
        },
    },
    withAdditionalAction: {
        // set justifyContent to default value to fix IE11 layout bug
        // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
        justifyContent: 'flex-start',
        '& > *:first-child': {
            marginRight: 'auto',
        },
    },
});
exports.default = (0, styles_1.withStyles)(exports.styles, { name: 'MuiPickersModal' })(exports.ModalDialog);
