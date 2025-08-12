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
exports.styles = exports.ClockPointer = void 0;
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var ClockType_1 = __importDefault(require("../../constants/ClockType"));
var styles_1 = require("@material-ui/core/styles");
var ClockPointer = /** @class */ (function (_super) {
    __extends(ClockPointer, _super);
    function ClockPointer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            toAnimateTransform: false,
            previousType: undefined,
        };
        _this.getAngleStyle = function () {
            var _a = _this.props, value = _a.value, isInner = _a.isInner, type = _a.type;
            var max = type === ClockType_1.default.HOURS ? 12 : 60;
            var angle = (360 / max) * value;
            if (type === ClockType_1.default.HOURS && value > 12) {
                angle -= 360; // round up angle to max 360 degrees
            }
            return {
                height: isInner ? '26%' : '40%',
                transform: "rotateZ(".concat(angle, "deg)"),
            };
        };
        return _this;
    }
    ClockPointer.prototype.render = function () {
        var _a, _b;
        var _c = this.props, classes = _c.classes, hasSelected = _c.hasSelected;
        return (React.createElement("div", { style: this.getAngleStyle(), className: (0, clsx_1.default)(classes.pointer, (_a = {},
                _a[classes.animateTransform] = this.state.toAnimateTransform,
                _a)) },
            React.createElement("div", { className: (0, clsx_1.default)(classes.thumb, (_b = {},
                    _b[classes.noPoint] = hasSelected,
                    _b)) })));
    };
    ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
        if (nextProps.type !== state.previousType) {
            return {
                toAnimateTransform: true,
                previousType: nextProps.type,
            };
        }
        return {
            toAnimateTransform: false,
            previousType: nextProps.type,
        };
    };
    return ClockPointer;
}(React.Component));
exports.ClockPointer = ClockPointer;
var styles = function (theme) {
    return (0, styles_1.createStyles)({
        pointer: {
            width: 2,
            backgroundColor: theme.palette.primary.main,
            position: 'absolute',
            left: 'calc(50% - 1px)',
            bottom: '50%',
            transformOrigin: 'center bottom 0px',
        },
        animateTransform: {
            transition: theme.transitions.create(['transform', 'height']),
        },
        thumb: {
            width: 4,
            height: 4,
            backgroundColor: theme.palette.primary.contrastText,
            borderRadius: '100%',
            position: 'absolute',
            top: -21,
            left: -15,
            border: "14px solid ".concat(theme.palette.primary.main),
            boxSizing: 'content-box',
        },
        noPoint: {
            backgroundColor: theme.palette.primary.main,
        },
    });
};
exports.styles = styles;
exports.default = (0, styles_1.withStyles)(exports.styles, {
    name: 'MuiPickersClockPointer',
})(ClockPointer);
