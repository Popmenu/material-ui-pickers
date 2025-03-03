"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatByViews = exports.isYearAndMonthViews = exports.isYearOnlyView = exports.findClosestEnabledDate = void 0;
var utils_1 = require("./utils");
var findClosestEnabledDate = function (_a) {
    var date = _a.date, utils = _a.utils, minDate = _a.minDate, maxDate = _a.maxDate, disableFuture = _a.disableFuture, disablePast = _a.disablePast, shouldDisableDate = _a.shouldDisableDate;
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
    }
    // fallback to today if no enabled days
    return utils.date();
};
exports.findClosestEnabledDate = findClosestEnabledDate;
var isYearOnlyView = function (views) {
    return views.length === 1 && views[0] === 'year';
};
exports.isYearOnlyView = isYearOnlyView;
var isYearAndMonthViews = function (views) {
    return views.length === 2 && (0, utils_1.arrayIncludes)(views, 'month') && (0, utils_1.arrayIncludes)(views, 'year');
};
exports.isYearAndMonthViews = isYearAndMonthViews;
var getFormatByViews = function (views, utils) {
    if ((0, exports.isYearOnlyView)(views)) {
        return utils.formats.year;
    }
    if ((0, exports.isYearAndMonthViews)(views)) {
        return utils.formats.monthAndYear;
    }
    return utils.formats.fullDate;
};
exports.getFormatByViews = getFormatByViews;
