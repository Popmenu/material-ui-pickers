export { C as Calendar } from './Calendar-5ae95df2.js';
export { Day } from './Day.js';
export { ClockView, default as TimePickerView } from './ClockView.js';
export { C as Clock } from './Clock-0f03784f.js';
export { P as Picker } from './Picker-1bf4e366.js';
import { u as usePickerState } from './makePickerWithState-ce3d3769.js';
export { m as makePickerWithState, a as useKeyboardPickerState, v as validate } from './makePickerWithState-ce3d3769.js';
export { a as MuiPickersContext, M as MuiPickersUtilsProvider, u as useUtils } from './useUtils-fea50872.js';
export { DatePicker, KeyboardDatePicker } from './DatePicker.js';
export { KeyboardTimePicker, TimePicker } from './TimePicker.js';
export { DateTimePicker, KeyboardDateTimePicker } from './DateTimePicker.js';
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
import './TimePickerToolbar-ae9b01a9.js';
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

export { usePickerState, useStaticState };
//# sourceMappingURL=index.js.map
