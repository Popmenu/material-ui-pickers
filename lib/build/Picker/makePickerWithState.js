"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePickerWithState = makePickerWithState;
var React = __importStar(require("react"));
var Picker_1 = require("./Picker");
var Wrapper_1 = require("../wrappers/Wrapper");
function makePickerWithState(_a) {
    var Input = _a.Input, useState = _a.useState, useOptions = _a.useOptions, getCustomProps = _a.getCustomProps, DefaultToolbarComponent = _a.DefaultToolbarComponent;
    function PickerWithStateImpl(props) {
        var _a = props, allowKeyboardControl = _a.allowKeyboardControl, ampm = _a.ampm, animateYearScrolling = _a.animateYearScrolling, autoOk = _a.autoOk, dateRangeIcon = _a.dateRangeIcon, disableFuture = _a.disableFuture, disablePast = _a.disablePast, disableToolbar = _a.disableToolbar, emptyLabel = _a.emptyLabel, format = _a.format, forwardedRef = _a.forwardedRef, hideTabs = _a.hideTabs, initialFocusedDate = _a.initialFocusedDate, invalidDateMessage = _a.invalidDateMessage, invalidLabel = _a.invalidLabel, labelFunc = _a.labelFunc, leftArrowButtonProps = _a.leftArrowButtonProps, leftArrowIcon = _a.leftArrowIcon, loadingIndicator = _a.loadingIndicator, maxDate = _a.maxDate, maxDateMessage = _a.maxDateMessage, minDate = _a.minDate, minDateMessage = _a.minDateMessage, minutesStep = _a.minutesStep, onAccept = _a.onAccept, onChange = _a.onChange, onClose = _a.onClose, onMonthChange = _a.onMonthChange, onOpen = _a.onOpen, onYearChange = _a.onYearChange, openTo = _a.openTo, orientation = _a.orientation, renderDay = _a.renderDay, rightArrowButtonProps = _a.rightArrowButtonProps, rightArrowIcon = _a.rightArrowIcon, shouldDisableDate = _a.shouldDisableDate, strictCompareDates = _a.strictCompareDates, timeIcon = _a.timeIcon, _b = _a.ToolbarComponent, ToolbarComponent = _b === void 0 ? DefaultToolbarComponent : _b, value = _a.value, variant = _a.variant, views = _a.views, other = __rest(_a, ["allowKeyboardControl", "ampm", "animateYearScrolling", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "disableToolbar", "emptyLabel", "format", "forwardedRef", "hideTabs", "initialFocusedDate", "invalidDateMessage", "invalidLabel", "labelFunc", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "variant", "views"]);
        var injectedProps = getCustomProps ? getCustomProps(props) : {};
        var options = useOptions(props);
        var _c = useState(props, options), pickerProps = _c.pickerProps, inputProps = _c.inputProps, wrapperProps = _c.wrapperProps;
        return (React.createElement(Wrapper_1.Wrapper, __assign({ variant: variant, InputComponent: Input, DateInputProps: inputProps }, injectedProps, wrapperProps, other),
            React.createElement(Picker_1.Picker, __assign({}, pickerProps, { allowKeyboardControl: allowKeyboardControl, ampm: ampm, animateYearScrolling: animateYearScrolling, dateRangeIcon: dateRangeIcon, disableFuture: disableFuture, disablePast: disablePast, disableToolbar: disableToolbar, hideTabs: hideTabs, leftArrowButtonProps: leftArrowButtonProps, leftArrowIcon: leftArrowIcon, loadingIndicator: loadingIndicator, maxDate: maxDate, minDate: minDate, minutesStep: minutesStep, onMonthChange: onMonthChange, onYearChange: onYearChange, openTo: openTo, orientation: orientation, renderDay: renderDay, rightArrowButtonProps: rightArrowButtonProps, rightArrowIcon: rightArrowIcon, shouldDisableDate: shouldDisableDate, strictCompareDates: strictCompareDates, timeIcon: timeIcon, ToolbarComponent: ToolbarComponent, views: views }))));
    }
    var PickerWithState = /** @class */ (function (_super) {
        __extends(PickerWithState, _super);
        function PickerWithState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PickerWithState.prototype.render = function () {
            return React.createElement(PickerWithStateImpl, __assign({}, this.props));
        };
        return PickerWithState;
    }(React.Component));
    return PickerWithState;
}
