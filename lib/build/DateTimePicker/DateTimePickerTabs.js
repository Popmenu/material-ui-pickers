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
exports.DateTimePickerTabs = exports.useStyles = void 0;
var React = __importStar(require("react"));
var Tab_1 = __importDefault(require("@material-ui/core/Tab"));
var Tabs_1 = __importDefault(require("@material-ui/core/Tabs"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var TimeIcon_1 = require("../_shared/icons/TimeIcon");
var DateRangeIcon_1 = require("../_shared/icons/DateRangeIcon");
var styles_1 = require("@material-ui/core/styles");
var viewToTabIndex = function (openView) {
    if (openView === 'date' || openView === 'year') {
        return 'date';
    }
    return 'time';
};
var tabIndexToView = function (tab) {
    if (tab === 'date') {
        return 'date';
    }
    return 'hours';
};
exports.useStyles = (0, styles_1.makeStyles)(function (theme) {
    // prettier-ignore
    var tabsBackground = theme.palette.type === 'light'
        ? theme.palette.primary.main
        : theme.palette.background.default;
    return {
        tabs: {
            color: theme.palette.getContrastText(tabsBackground),
            backgroundColor: tabsBackground,
        },
    };
}, { name: 'MuiPickerDTTabs' });
var defaultDateRangeIcon = React.createElement(DateRangeIcon_1.DateRangeIcon, null);
var defaultTimeIcon = React.createElement(TimeIcon_1.TimeIcon, null);
var DateTimePickerTabs = function (_a) {
    var view = _a.view, onChange = _a.onChange, _b = _a.dateRangeIcon, dateRangeIcon = _b === void 0 ? defaultDateRangeIcon : _b, _c = _a.timeIcon, timeIcon = _c === void 0 ? defaultTimeIcon : _c;
    var classes = (0, exports.useStyles)();
    var theme = (0, styles_1.useTheme)();
    var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';
    var handleChange = function (e, value) {
        if (value !== viewToTabIndex(view)) {
            onChange(tabIndexToView(value));
        }
    };
    return (React.createElement(Paper_1.default, null,
        React.createElement(Tabs_1.default, { variant: "fullWidth", value: viewToTabIndex(view), onChange: handleChange, className: classes.tabs, indicatorColor: indicatorColor },
            React.createElement(Tab_1.default, { value: "date", icon: React.createElement(React.Fragment, null, dateRangeIcon) }),
            React.createElement(Tab_1.default, { value: "time", icon: React.createElement(React.Fragment, null, timeIcon) }))));
};
exports.DateTimePickerTabs = DateTimePickerTabs;
exports.default = exports.DateTimePickerTabs;
