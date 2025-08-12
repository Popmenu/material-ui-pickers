"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Picker_1 = require("./Picker");
var Wrapper_1 = require("../wrappers/Wrapper");
function makePickerWithState(_a) {
    var Input = _a.Input, useState = _a.useState, useOptions = _a.useOptions, getCustomProps = _a.getCustomProps, DefaultToolbarComponent = _a.DefaultToolbarComponent;
    function PickerWithStateImpl(props) {
        var allowKeyboardControl = props.allowKeyboardControl, ampm = props.ampm, animateYearScrolling = props.animateYearScrolling, autoOk = props.autoOk, dateRangeIcon = props.dateRangeIcon, disableFuture = props.disableFuture, disablePast = props.disablePast, disableToolbar = props.disableToolbar, emptyLabel = props.emptyLabel, format = props.format, forwardedRef = props.forwardedRef, hideTabs = props.hideTabs, initialFocusedDate = props.initialFocusedDate, invalidDateMessage = props.invalidDateMessage, invalidLabel = props.invalidLabel, labelFunc = props.labelFunc, leftArrowButtonProps = props.leftArrowButtonProps, leftArrowIcon = props.leftArrowIcon, loadingIndicator = props.loadingIndicator, maxDate = props.maxDate, maxDateMessage = props.maxDateMessage, minDate = props.minDate, minDateMessage = props.minDateMessage, minutesStep = props.minutesStep, onAccept = props.onAccept, onChange = props.onChange, onClose = props.onClose, onMonthChange = props.onMonthChange, onOpen = props.onOpen, onYearChange = props.onYearChange, openTo = props.openTo, orientation = props.orientation, renderDay = props.renderDay, rightArrowButtonProps = props.rightArrowButtonProps, rightArrowIcon = props.rightArrowIcon, shouldDisableDate = props.shouldDisableDate, strictCompareDates = props.strictCompareDates, timeIcon = props.timeIcon, _a = props.ToolbarComponent, ToolbarComponent = _a === void 0 ? DefaultToolbarComponent : _a, value = props.value, variant = props.variant, views = props.views, other = __rest(props, ["allowKeyboardControl", "ampm", "animateYearScrolling", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "disableToolbar", "emptyLabel", "format", "forwardedRef", "hideTabs", "initialFocusedDate", "invalidDateMessage", "invalidLabel", "labelFunc", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "variant", "views"]);
        var injectedProps = getCustomProps ? getCustomProps(props) : {};
        var options = useOptions(props);
        var _b = useState(props, options), pickerProps = _b.pickerProps, inputProps = _b.inputProps, wrapperProps = _b.wrapperProps;
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
exports.makePickerWithState = makePickerWithState;
