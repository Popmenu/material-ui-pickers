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
exports.YearSelection = exports.useStyles = void 0;
var React = __importStar(require("react"));
var Year_1 = __importDefault(require("./Year"));
var styles_1 = require("@material-ui/core/styles");
var useUtils_1 = require("../../_shared/hooks/useUtils");
var Wrapper_1 = require("../../wrappers/Wrapper");
exports.useStyles = (0, styles_1.makeStyles)({
    container: {
        height: 300,
        overflowY: 'auto',
    },
}, { name: 'MuiPickersYearSelection' });
var YearSelection = function (_a) {
    var date = _a.date, onChange = _a.onChange, onYearChange = _a.onYearChange, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture, animateYearScrolling = _a.animateYearScrolling;
    var utils = (0, useUtils_1.useUtils)();
    var classes = (0, exports.useStyles)();
    var currentVariant = React.useContext(Wrapper_1.VariantContext);
    var selectedYearRef = React.useRef(null);
    React.useEffect(function () {
        if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
            try {
                selectedYearRef.current.scrollIntoView({
                    block: currentVariant === 'static' ? 'nearest' : 'center',
                    behavior: animateYearScrolling ? 'smooth' : 'auto',
                });
            }
            catch (e) {
                // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
                selectedYearRef.current.scrollIntoView();
            }
        }
    }, []); // eslint-disable-line
    var currentYear = utils.getYear(date);
    var onYearSelect = React.useCallback(function (year) {
        var newDate = utils.setYear(date, year);
        if (onYearChange) {
            onYearChange(newDate);
        }
        onChange(newDate, true);
    }, [date, onChange, onYearChange, utils]);
    return (React.createElement("div", { className: classes.container }, utils.getYearRange(minDate, maxDate).map(function (year) {
        var yearNumber = utils.getYear(year);
        var selected = yearNumber === currentYear;
        return (React.createElement(Year_1.default, { key: utils.getYearText(year), selected: selected, value: yearNumber, onSelect: onYearSelect, ref: selected ? selectedYearRef : undefined, disabled: Boolean((disablePast && utils.isBeforeYear(year, utils.date())) ||
                (disableFuture && utils.isAfterYear(year, utils.date()))) }, utils.getYearText(year)));
    })));
};
exports.YearSelection = YearSelection;
