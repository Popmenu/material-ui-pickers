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
exports.MonthSelection = exports.useStyles = void 0;
var React = __importStar(require("react"));
var Month_1 = __importDefault(require("./Month"));
var styles_1 = require("@material-ui/core/styles");
var useUtils_1 = require("../../_shared/hooks/useUtils");
exports.useStyles = (0, styles_1.makeStyles)({
    container: {
        width: 310,
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'stretch',
    },
}, { name: 'MuiPickersMonthSelection' });
var MonthSelection = function (_a) {
    var disablePast = _a.disablePast, disableFuture = _a.disableFuture, minDate = _a.minDate, maxDate = _a.maxDate, date = _a.date, onMonthChange = _a.onMonthChange, onChange = _a.onChange;
    var utils = (0, useUtils_1.useUtils)();
    var classes = (0, exports.useStyles)();
    var currentMonth = utils.getMonth(date);
    var shouldDisableMonth = function (month) {
        var now = utils.date();
        var utilMinDate = utils.date(minDate);
        var utilMaxDate = utils.date(maxDate);
        var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
        var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
        var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
        var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
        return isBeforeFirstEnabled || isAfterLastEnabled;
    };
    var onMonthSelect = React.useCallback(function (month) {
        var newDate = utils.setMonth(date, month);
        onChange(newDate, true);
        if (onMonthChange) {
            onMonthChange(newDate);
        }
    }, [date, onChange, onMonthChange, utils]);
    return (React.createElement("div", { className: classes.container }, utils.getMonthArray(date).map(function (month) {
        var monthNumber = utils.getMonth(month);
        var monthText = utils.format(month, 'MMM');
        return (React.createElement(Month_1.default, { key: monthText, value: monthNumber, selected: monthNumber === currentMonth, onSelect: onMonthSelect, disabled: shouldDisableMonth(month) }, monthText));
    })));
};
exports.MonthSelection = MonthSelection;
