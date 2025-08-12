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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatePickerToolbar = exports.useStyles = void 0;
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var ToolbarButton_1 = __importDefault(require("../_shared/ToolbarButton"));
var PickerToolbar_1 = __importDefault(require("../_shared/PickerToolbar"));
var useUtils_1 = require("../_shared/hooks/useUtils");
var styles_1 = require("@material-ui/core/styles");
var date_utils_1 = require("../_helpers/date-utils");
exports.useStyles = (0, styles_1.makeStyles)({
    toolbar: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    toolbarLandscape: {
        padding: 16,
    },
    dateLandscape: {
        marginRight: 16,
    },
}, { name: 'MuiPickersDatePickerRoot' });
var DatePickerToolbar = function (_a) {
    var _b, _c;
    var date = _a.date, views = _a.views, setOpenView = _a.setOpenView, isLandscape = _a.isLandscape, openView = _a.openView;
    var utils = (0, useUtils_1.useUtils)();
    var classes = (0, exports.useStyles)();
    var isYearOnly = React.useMemo(function () { return (0, date_utils_1.isYearOnlyView)(views); }, [views]);
    var isYearAndMonth = React.useMemo(function () { return (0, date_utils_1.isYearAndMonthViews)(views); }, [views]);
    return (React.createElement(PickerToolbar_1.default, { isLandscape: isLandscape, className: (0, clsx_1.default)((_b = {},
            _b[classes.toolbar] = !isYearOnly,
            _b[classes.toolbarLandscape] = isLandscape,
            _b)) },
        React.createElement(ToolbarButton_1.default, { variant: isYearOnly ? 'h3' : 'subtitle1', onClick: function () { return setOpenView('year'); }, selected: openView === 'year', label: utils.getYearText(date) }),
        !isYearOnly && !isYearAndMonth && (React.createElement(ToolbarButton_1.default, { variant: "h4", selected: openView === 'date', onClick: function () { return setOpenView('date'); }, align: isLandscape ? 'left' : 'center', label: utils.getDatePickerHeaderText(date), className: (0, clsx_1.default)((_c = {}, _c[classes.dateLandscape] = isLandscape, _c)) })),
        isYearAndMonth && (React.createElement(ToolbarButton_1.default, { variant: "h4", onClick: function () { return setOpenView('month'); }, selected: openView === 'month', label: utils.getMonthText(date) }))));
};
exports.DatePickerToolbar = DatePickerToolbar;
