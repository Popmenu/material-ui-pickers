import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import * as React from 'react';
import React__default from 'react';
import * as PropTypes from 'prop-types';
import { Day } from './Day.js';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles, createStyles } from '@material-ui/core/styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import IconButton from '@material-ui/core/IconButton';
import { u as useUtils } from './useUtils-ba232af6.js';
import SvgIcon from '@material-ui/core/SvgIcon';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Popover from '@material-ui/core/Popover';

/** Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}

var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && arrayIncludes(views, 'month') && arrayIncludes(views, 'year');
};
var getFormatByViews = function getFormatByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return utils.yearFormat;
  }

  if (isYearAndMonthViews(views)) {
    return utils.yearMonthFormat;
  }

  return utils.dateFormat;
};

var DayWrapper = function DayWrapper(_ref) {
  var children = _ref.children,
      value = _ref.value,
      disabled = _ref.disabled,
      onSelect = _ref.onSelect,
      dayInCurrentMonth = _ref.dayInCurrentMonth,
      other = _objectWithoutProperties(_ref, ["children", "value", "disabled", "onSelect", "dayInCurrentMonth"]);

  var handleClick = React.useCallback(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return React.createElement("div", _extends({
    role: "presentation",
    onClick: dayInCurrentMonth && !disabled ? handleClick : undefined,
    onKeyPress: dayInCurrentMonth && !disabled ? handleClick : undefined
  }, other), children);
};

var DayWrapper$1 = DayWrapper;

var animationDuration = 350;
var useStyles$2 = makeStyles(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: animationDuration,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)'
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)'
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-200%)',
      transition: slideTransition
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(200%)',
      transition: slideTransition
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});

var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      transKey = _ref.transKey,
      slideDirection = _ref.slideDirection,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className;
  var classes = useStyles$2();
  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes['slideEnter-' + slideDirection],
    // @ts-ignore
    exitActive: classes['slideExitActiveLeft-' + slideDirection]
  };
  var nodeRef = React.useRef(null);
  return React.createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return React.cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, React.createElement(CSSTransition, {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey + slideDirection,
    timeout: animationDuration,
    classNames: transitionClasses,
    nodeRef: nodeRef,
    children: children
  }));
};

var SlideTransition$1 = SlideTransition;

var ArrowLeftIcon = function ArrowLeftIcon(props) {
  return React__default.createElement(SvgIcon, props, React__default.createElement("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var ArrowRightIcon = function ArrowRightIcon(props) {
  return React__default.createElement(SvgIcon, props, React__default.createElement("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), React__default.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }));
};

var useStyles$1 = makeStyles(function (theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing(0.5),
      marginBottom: theme.spacing(1)
    },
    transitionContainer: {
      width: '100%',
      overflow: 'hidden',
      height: 23
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 16
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      textAlign: 'center',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersCalendarHeader'
});
var defaultLeftArrowIcon = React.createElement(ArrowLeftIcon, null);
var defaultRightArrowIcon = React.createElement(ArrowRightIcon, null);
var CalendarHeader = function CalendarHeader(_ref) {
  var currentMonth = _ref.currentMonth,
      onMonthChange = _ref.onMonthChange,
      _ref$leftArrowIcon = _ref.leftArrowIcon,
      leftArrowIcon = _ref$leftArrowIcon === void 0 ? defaultLeftArrowIcon : _ref$leftArrowIcon,
      _ref$rightArrowIcon = _ref.rightArrowIcon,
      rightArrowIcon = _ref$rightArrowIcon === void 0 ? defaultRightArrowIcon : _ref$rightArrowIcon,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      _ref$disablePrevMonth = _ref.disablePrevMonth,
      disablePrevMonth = _ref$disablePrevMonth === void 0 ? false : _ref$disablePrevMonth,
      _ref$disableNextMonth = _ref.disableNextMonth,
      disableNextMonth = _ref$disableNextMonth === void 0 ? false : _ref$disableNextMonth,
      slideDirection = _ref.slideDirection;
  var utils = useUtils();
  var classes = useStyles$1();
  var theme = useTheme();
  var rtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(currentMonth), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(currentMonth), 'right');
  };

  return React.createElement("div", null, React.createElement("div", {
    className: classes.switchHeader
  }, React.createElement(IconButton, _extends({}, leftArrowButtonProps, {
    disabled: disablePrevMonth,
    onClick: selectPreviousMonth,
    className: classes.iconButton
  }), rtl ? rightArrowIcon : leftArrowIcon), React.createElement(SlideTransition$1, {
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, function (nodeRef) {
    return React.createElement(Typography, {
      ref: nodeRef,
      align: "center",
      variant: "body1"
    }, utils.getCalendarHeaderText(currentMonth));
  }), React.createElement(IconButton, _extends({}, rightArrowButtonProps, {
    disabled: disableNextMonth,
    onClick: selectNextMonth,
    className: classes.iconButton
  }), rtl ? leftArrowIcon : rightArrowIcon)), React.createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, index) {
    return React.createElement(Typography, {
      key: index // eslint-disable-line react/no-array-index-key
      ,
      variant: "caption",
      className: classes.dayLabel
    }, day);
  })));
};
CalendarHeader.displayName = 'CalendarHeader';
process.env.NODE_ENV !== "production" ? CalendarHeader.propTypes = {
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  disablePrevMonth: PropTypes.bool,
  disableNextMonth: PropTypes.bool
} : void 0;
var CalendarHeader$1 = CalendarHeader;

var DIALOG_WIDTH = 310;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 305;

var useStyles = makeStyles(function (theme) {
  return {
    staticWrapperRoot: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(_ref) {
  var children = _ref.children;
  var classes = useStyles();
  return React.createElement("div", {
    className: classes.staticWrapperRoot,
    children: children
  });
};

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      classes = _ref.classes,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      onSetToday = _ref.onSetToday,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      clearable = _ref.clearable,
      showTodayButton = _ref.showTodayButton;
      _ref.showTabs;
      var wider = _ref.wider,
      other = _objectWithoutProperties(_ref, ["children", "classes", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

  return React.createElement(Dialog, _extends({
    role: "dialog",
    onClose: onDismiss,
    classes: {
      paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
    }
  }, other), React.createElement(DialogContent, {
    children: children,
    className: classes.dialog
  }), React.createElement(DialogActions, {
    classes: {
      root: clsx((clearable || showTodayButton) && classes.withAdditionalAction)
    }
  }, clearable && React.createElement(Button, {
    color: "primary",
    onClick: onClear
  }, clearLabel), showTodayButton && React.createElement(Button, {
    color: "primary",
    onClick: onSetToday
  }, todayLabel), cancelLabel && React.createElement(Button, {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), okLabel && React.createElement(Button, {
    color: "primary",
    onClick: onAccept
  }, okLabel)));
};
ModalDialog.displayName = 'ModalDialog';
var styles$1 = createStyles({
  dialogRoot: {
    minWidth: DIALOG_WIDTH
  },
  dialogRootWider: {
    minWidth: DIALOG_WIDTH_WIDER
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
});
var ModalDialog$1 = withStyles(styles$1, {
  name: 'MuiPickersModal'
})(ModalDialog);

var useIsomorphicEffect = typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.key];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useKeyDown(active, keyHandlers) {
  var keyHandlersRef = React.useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
}

var ModalWrapper = function ModalWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      _ref$okLabel = _ref.okLabel,
      okLabel = _ref$okLabel === void 0 ? 'OK' : _ref$okLabel,
      _ref$cancelLabel = _ref.cancelLabel,
      cancelLabel = _ref$cancelLabel === void 0 ? 'Cancel' : _ref$cancelLabel,
      _ref$clearLabel = _ref.clearLabel,
      clearLabel = _ref$clearLabel === void 0 ? 'Clear' : _ref$clearLabel,
      _ref$todayLabel = _ref.todayLabel,
      todayLabel = _ref$todayLabel === void 0 ? 'Today' : _ref$todayLabel,
      _ref$showTodayButton = _ref.showTodayButton,
      showTodayButton = _ref$showTodayButton === void 0 ? false : _ref$showTodayButton,
      _ref$clearable = _ref.clearable,
      clearable = _ref$clearable === void 0 ? false : _ref$clearable,
      DialogProps = _ref.DialogProps,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      InputComponent = _ref.InputComponent,
      DateInputProps = _ref.DateInputProps,
      onClear = _ref.onClear,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      other = _objectWithoutProperties(_ref, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "InputComponent", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday"]);

  useKeyDown(open, {
    Enter: onAccept
  });
  return React.createElement(React.Fragment, null, React.createElement(InputComponent, _extends({}, other, DateInputProps)), React.createElement(ModalDialog$1, _extends({
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearLabel: clearLabel,
    todayLabel: todayLabel,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    clearable: clearable,
    showTodayButton: showTodayButton,
    children: children
  }, DialogProps)));
};
process.env.NODE_ENV !== "production" ? ModalWrapper.propTypes = {
  okLabel: PropTypes.node,
  cancelLabel: PropTypes.node,
  clearLabel: PropTypes.node,
  clearable: PropTypes.bool,
  todayLabel: PropTypes.node,
  showTodayButton: PropTypes.bool,
  DialogProps: PropTypes.object
} : void 0;

var InlineWrapper = function InlineWrapper(_ref) {
  var open = _ref.open;
      _ref.wider;
      var children = _ref.children,
      PopoverProps = _ref.PopoverProps;
      _ref.onClear;
      var onDismiss = _ref.onDismiss;
      _ref.onSetToday;
      var onAccept = _ref.onAccept;
      _ref.showTabs;
      var DateInputProps = _ref.DateInputProps,
      InputComponent = _ref.InputComponent,
      other = _objectWithoutProperties(_ref, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "InputComponent"]);

  var ref = React.useRef();
  useKeyDown(open, {
    Enter: onAccept
  });
  return React.createElement(React.Fragment, null, React.createElement(InputComponent, _extends({}, other, DateInputProps, {
    inputRef: ref
  })), React.createElement(Popover, _extends({
    open: open,
    onClose: onDismiss,
    anchorEl: ref.current,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: children
  }, PopoverProps)));
};
process.env.NODE_ENV !== "production" ? InlineWrapper.propTypes = {
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  PopoverProps: PropTypes.object
} : void 0;

function getWrapperFromVariant(variant) {
  switch (variant) {
    case 'inline':
      return InlineWrapper;

    case 'static':
      return StaticWrapper;

    default:
      return ModalWrapper;
  }
}
var VariantContext = React.createContext(null);
var Wrapper = function Wrapper(_ref) {
  var variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["variant"]);

  var Component = getWrapperFromVariant(variant);
  return React.createElement(VariantContext.Provider, {
    value: variant || 'dialog'
  }, React.createElement(Component, props));
};

var withUtils = function withUtils() {
  return function (Component) {
    var WithUtils = function WithUtils(props) {
      var utils = useUtils();
      return React.createElement(Component, _extends({
        utils: utils
      }, props));
    };

    WithUtils.displayName = "WithUtils(".concat(Component.displayName || Component.name, ")");
    return WithUtils;
  };
};

var KeyDownListener = function KeyDownListener(_ref) {
  var onKeyDown = _ref.onKeyDown;
  React.useEffect(function () {
    window.addEventListener('keydown', onKeyDown);
    return function () {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
  return null;
};

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      slideDirection: 'left',
      currentMonth: _this.props.utils.startOfMonth(_this.props.date),
      loadingQueue: 0
    };

    _this.pushToLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue + 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.popFromLoadingQueue = function () {
      var loadingQueue = _this.state.loadingQueue;
      loadingQueue = loadingQueue <= 0 ? 0 : loadingQueue - 1;

      _this.setState({
        loadingQueue: loadingQueue
      });
    };

    _this.handleChangeMonth = function (newMonth, slideDirection) {
      _this.setState({
        currentMonth: newMonth,
        slideDirection: slideDirection
      });

      if (_this.props.onMonthChange) {
        var returnVal = _this.props.onMonthChange(newMonth);

        if (returnVal) {
          _this.pushToLoadingQueue();

          returnVal.then(function () {
            _this.popFromLoadingQueue();
          });
        }
      }
    };

    _this.validateMinMaxDate = function (day) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          utils = _this$props.utils,
          disableFuture = _this$props.disableFuture,
          disablePast = _this$props.disablePast;
      var now = utils.date();
      return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate)));
    };

    _this.shouldDisablePrevMonth = function () {
      var _this$props2 = _this.props,
          utils = _this$props2.utils,
          disablePast = _this$props2.disablePast,
          minDate = _this$props2.minDate;
      var now = utils.date();
      var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utils.date(minDate)) ? now : utils.date(minDate));
      return !utils.isBefore(firstEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableNextMonth = function () {
      var _this$props3 = _this.props,
          utils = _this$props3.utils,
          disableFuture = _this$props3.disableFuture,
          maxDate = _this$props3.maxDate;
      var now = utils.date();
      var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utils.date(maxDate)) ? now : utils.date(maxDate));
      return !utils.isAfter(lastEnabledMonth, _this.state.currentMonth);
    };

    _this.shouldDisableDate = function (day) {
      var shouldDisableDate = _this.props.shouldDisableDate;
      return _this.validateMinMaxDate(day) || Boolean(shouldDisableDate && shouldDisableDate(day));
    };

    _this.handleDaySelect = function (day) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var _this$props4 = _this.props,
          date = _this$props4.date,
          utils = _this$props4.utils;

      _this.props.onChange(utils.mergeDateAndTime(day, date), isFinish);
    };

    _this.moveToDay = function (day) {
      var utils = _this.props.utils;

      if (day && !_this.shouldDisableDate(day)) {
        if (utils.getMonth(day) !== utils.getMonth(_this.state.currentMonth)) {
          _this.handleChangeMonth(utils.startOfMonth(day), 'left');
        }

        _this.handleDaySelect(day, false);
      }
    };

    _this.handleKeyDown = function (event) {
      var _this$props5 = _this.props,
          theme = _this$props5.theme,
          date = _this$props5.date,
          utils = _this$props5.utils;
      runKeyHandler(event, {
        ArrowUp: function ArrowUp() {
          return _this.moveToDay(utils.addDays(date, -7));
        },
        ArrowDown: function ArrowDown() {
          return _this.moveToDay(utils.addDays(date, 7));
        },
        ArrowLeft: function ArrowLeft() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? -1 : 1));
        },
        ArrowRight: function ArrowRight() {
          return _this.moveToDay(utils.addDays(date, theme.direction === 'ltr' ? 1 : -1));
        }
      });
    };

    _this.renderWeeks = function () {
      var _this$props6 = _this.props,
          utils = _this$props6.utils,
          classes = _this$props6.classes;
      var weeks = utils.getWeekArray(_this.state.currentMonth);
      return weeks.map(function (week) {
        return React.createElement("div", {
          key: "week-".concat(week[0].toString()),
          className: classes.week
        }, _this.renderDays(week));
      });
    };

    _this.renderDays = function (week) {
      var _this$props7 = _this.props,
          date = _this$props7.date,
          renderDay = _this$props7.renderDay,
          utils = _this$props7.utils;
      var now = utils.date();
      var selectedDate = utils.startOfDay(date);
      var currentMonthNumber = utils.getMonth(_this.state.currentMonth);
      return week.map(function (day) {
        var disabled = _this.shouldDisableDate(day);

        var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
        var dayComponent = React.createElement(Day, {
          disabled: disabled,
          current: utils.isSameDay(day, now),
          hidden: !isDayInCurrentMonth,
          selected: utils.isSameDay(selectedDate, day)
        }, utils.getDayText(day));

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
        }

        return React.createElement(DayWrapper$1, {
          value: day,
          key: day.toString(),
          disabled: disabled,
          dayInCurrentMonth: isDayInCurrentMonth,
          onSelect: _this.handleDaySelect
        }, dayComponent);
      });
    };

    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props8 = this.props,
          date = _this$props8.date,
          minDate = _this$props8.minDate,
          maxDate = _this$props8.maxDate,
          utils = _this$props8.utils,
          disablePast = _this$props8.disablePast,
          disableFuture = _this$props8.disableFuture;

      if (this.shouldDisableDate(date)) {
        var closestEnabledDate = findClosestEnabledDate({
          date: date,
          utils: utils,
          minDate: utils.date(minDate),
          maxDate: utils.date(maxDate),
          disablePast: Boolean(disablePast),
          disableFuture: Boolean(disableFuture),
          shouldDisableDate: this.shouldDisableDate
        });
        this.handleDaySelect(closestEnabledDate, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          currentMonth = _this$state.currentMonth,
          slideDirection = _this$state.slideDirection;
      var _this$props9 = this.props,
          classes = _this$props9.classes,
          allowKeyboardControl = _this$props9.allowKeyboardControl,
          leftArrowButtonProps = _this$props9.leftArrowButtonProps,
          leftArrowIcon = _this$props9.leftArrowIcon,
          rightArrowButtonProps = _this$props9.rightArrowButtonProps,
          rightArrowIcon = _this$props9.rightArrowIcon,
          loadingIndicator = _this$props9.loadingIndicator;
      var loadingElement = loadingIndicator ? loadingIndicator : React.createElement(CircularProgress, null);
      return React.createElement(React.Fragment, null, allowKeyboardControl && this.context !== 'static' && React.createElement(KeyDownListener, {
        onKeyDown: this.handleKeyDown
      }), React.createElement(CalendarHeader$1, {
        currentMonth: currentMonth,
        slideDirection: slideDirection,
        onMonthChange: this.handleChangeMonth,
        leftArrowIcon: leftArrowIcon,
        leftArrowButtonProps: leftArrowButtonProps,
        rightArrowIcon: rightArrowIcon,
        rightArrowButtonProps: rightArrowButtonProps,
        disablePrevMonth: this.shouldDisablePrevMonth(),
        disableNextMonth: this.shouldDisableNextMonth()
      }), React.createElement(SlideTransition$1, {
        slideDirection: slideDirection,
        transKey: currentMonth.toString(),
        className: classes.transitionContainer
      }, function (nodeRef) {
        return _this2.state.loadingQueue > 0 ? React.createElement("div", {
          ref: nodeRef,
          className: classes.progressContainer
        }, loadingElement) : React.createElement("div", {
          ref: nodeRef
        }, _this2.renderWeeks());
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, state) {
      var utils = nextProps.utils,
          nextDate = nextProps.date;

      if (!utils.isEqual(nextDate, state.lastDate)) {
        var nextMonth = utils.getMonth(nextDate);
        var lastDate = state.lastDate || nextDate;
        var lastMonth = utils.getMonth(lastDate);
        return {
          lastDate: nextDate,
          currentMonth: nextProps.utils.startOfMonth(nextDate),
          // prettier-ignore
          slideDirection: nextMonth === lastMonth ? state.slideDirection : utils.isAfterDay(nextDate, lastDate) ? 'left' : 'right'
        };
      }

      return null;
    }
  }]);

  return Calendar;
}(React.Component);
Calendar.contextType = VariantContext;
process.env.NODE_ENV !== "production" ? Calendar.propTypes = {
  renderDay: PropTypes.func,
  shouldDisableDate: PropTypes.func,
  allowKeyboardControl: PropTypes.bool
} : void 0;
Calendar.defaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  disablePast: false,
  disableFuture: false,
  allowKeyboardControl: true
};
var styles = function styles(theme) {
  return {
    transitionContainer: {
      minHeight: 36 * 6,
      marginTop: theme.spacing(1.5)
    },
    progressContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};
var Calendar$1 = withStyles(styles, {
  name: 'MuiPickersCalendar',
  withTheme: true
})(withUtils()(Calendar));

export { Calendar$1 as C, DIALOG_WIDTH as D, VariantContext as V, Wrapper as W, arrayIncludes as a, VIEW_HEIGHT as b, DIALOG_WIDTH_WIDER as c, isYearAndMonthViews as d, Calendar as e, getFormatByViews as g, isYearOnlyView as i, styles as s, useIsomorphicEffect as u };
//# sourceMappingURL=Calendar-9c3971b9.js.map
