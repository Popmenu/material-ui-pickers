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
exports.useStyles = void 0;
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var react_transition_group_1 = require("react-transition-group");
var animationDuration = 350;
exports.useStyles = (0, styles_1.makeStyles)(function (theme) {
    var slideTransition = theme.transitions.create('transform', {
        duration: animationDuration,
        easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)',
    });
    return {
        transitionContainer: {
            display: 'block',
            position: 'relative',
            '& > *': {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
            },
        },
        'slideEnter-left': {
            willChange: 'transform',
            transform: 'translate(100%)',
        },
        'slideEnter-right': {
            willChange: 'transform',
            transform: 'translate(-100%)',
        },
        slideEnterActive: {
            transform: 'translate(0%)',
            transition: slideTransition,
        },
        slideExit: {
            transform: 'translate(0%)',
        },
        'slideExitActiveLeft-left': {
            willChange: 'transform',
            transform: 'translate(-200%)',
            transition: slideTransition,
        },
        'slideExitActiveLeft-right': {
            willChange: 'transform',
            transform: 'translate(200%)',
            transition: slideTransition,
        },
    };
}, { name: 'MuiPickersSlideTransition' });
var SlideTransition = function (_a) {
    var children = _a.children, transKey = _a.transKey, slideDirection = _a.slideDirection, _b = _a.className, className = _b === void 0 ? null : _b;
    var classes = (0, exports.useStyles)();
    var transitionClasses = {
        exit: classes.slideExit,
        enterActive: classes.slideEnterActive,
        // @ts-ignore
        enter: classes['slideEnter-' + slideDirection],
        // @ts-ignore
        exitActive: classes['slideExitActiveLeft-' + slideDirection],
    };
    var nodeRef = React.useRef(null);
    return (React.createElement(react_transition_group_1.TransitionGroup, { className: (0, clsx_1.default)(classes.transitionContainer, className), childFactory: function (element) {
            return React.cloneElement(element, {
                classNames: transitionClasses,
            });
        } },
        React.createElement(react_transition_group_1.CSSTransition, { mountOnEnter: true, unmountOnExit: true, key: transKey + slideDirection, timeout: animationDuration, classNames: transitionClasses, nodeRef: nodeRef, children: children })));
};
exports.default = SlideTransition;
