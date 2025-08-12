export { C as Calendar } from './Calendar-9c3971b9.js';
export { Day } from './Day.js';
export { ClockView, default as TimePickerView } from './ClockView.js';
export { C as Clock } from './Clock-2b616cba.js';
export { P as Picker } from './Picker-cfe3e7c1.js';
import { u as usePickerState } from './makePickerWithState-6ce3fc8a.js';
export { m as makePickerWithState, a as useKeyboardPickerState, u as usePickerState, v as validate } from './makePickerWithState-6ce3fc8a.js';
export { a as MuiPickersContext, M as MuiPickersUtilsProvider, u as useUtils } from './useUtils-ba232af6.js';
export { D as DatePicker, K as KeyboardDatePicker } from './DatePicker-2990c4ba.js';
export { K as KeyboardTimePicker, T as TimePicker } from './TimePicker-89e55330.js';
export { D as DateTimePicker, K as KeyboardDateTimePicker } from './DateTimePicker-55fd4326.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/inherits';
import 'react';
import 'prop-types';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectWithoutProperties';
import '@material-ui/core/Typography';
import 'clsx';
import '@material-ui/core/styles';
import 'react-transition-group';
import '@material-ui/core/IconButton';
import '@material-ui/core/SvgIcon';
import '@material-ui/core/CircularProgress';
import '@material-ui/core/Button';
import '@material-ui/core/DialogActions';
import '@material-ui/core/DialogContent';
import '@material-ui/core/Dialog';
import '@material-ui/core/Popover';
import '@babel/runtime/helpers/esm/defineProperty';
import '@babel/runtime/helpers/esm/slicedToArray';
import '@material-ui/core/Toolbar';
import '@material-ui/core/TextField';
import '@material-ui/core/InputAdornment';
import 'rifm';
import './TimePickerToolbar-0b022be2.js';
import '@material-ui/core/Grid';
import '@material-ui/core/Tab';
import '@material-ui/core/Tabs';
import '@material-ui/core/Paper';

function useStaticState(_ref) {
  var value = _ref.value,
      _ref$autoOk = _ref.autoOk,
      autoOk = _ref$autoOk === void 0 ? true : _ref$autoOk,
      onChange = _ref.onChange,
      defaultFormat = _ref.defaultFormat;

  var _usePickerState = usePickerState({
    value: value,
    onChange: onChange,
    autoOk: autoOk
  }, {
    // just a random format, mostly always not needed for users
    getDefaultFormat: function getDefaultFormat() {
      return defaultFormat || 'MM/dd/yyyy';
    }
  }),
      pickerProps = _usePickerState.pickerProps,
      wrapperProps = _usePickerState.wrapperProps,
      inputProps = _usePickerState.inputProps;

  return {
    pickerProps: pickerProps,
    wrapperProps: wrapperProps,
    inputProps: inputProps
  };
}

export { useStaticState };
//# sourceMappingURL=index.js.map
