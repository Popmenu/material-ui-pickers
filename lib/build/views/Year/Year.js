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
exports.Year = exports.useStyles = void 0;
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = (0, styles_1.makeStyles)(function (theme) { return ({
    root: {
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        '&:focus': {
            color: theme.palette.primary.main,
            fontWeight: theme.typography.fontWeightMedium,
        },
    },
    yearSelected: {
        margin: '10px 0',
        fontWeight: theme.typography.fontWeightMedium,
    },
    yearDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint,
    },
}); }, { name: 'MuiPickersYear' });
var Year = function (_a) {
    var _b;
    var onSelect = _a.onSelect, forwardedRef = _a.forwardedRef, value = _a.value, selected = _a.selected, disabled = _a.disabled, children = _a.children, other = __rest(_a, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children"]);
    var classes = (0, exports.useStyles)();
    var handleClick = React.useCallback(function () { return onSelect(value); }, [onSelect, value]);
    return (React.createElement(Typography_1.default, __assign({ role: "button", component: "div", tabIndex: disabled ? -1 : 0, onClick: handleClick, onKeyPress: handleClick, color: selected ? 'primary' : undefined, variant: selected ? 'h5' : 'subtitle1', children: children, ref: forwardedRef, className: (0, clsx_1.default)(classes.root, (_b = {},
            _b[classes.yearSelected] = selected,
            _b[classes.yearDisabled] = disabled,
            _b)) }, other)));
};
exports.Year = Year;
exports.Year.displayName = 'Year';
exports.default = React.forwardRef(function (props, ref) { return (React.createElement(exports.Year, __assign({}, props, { forwardedRef: ref }))); });
