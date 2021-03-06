(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './stripTime'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./stripTime'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.stripTime);
    global.isMonthBefore = mod.exports;
  }
})(this, function (exports, _stripTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isMonthBefore;

  var _stripTime2 = _interopRequireDefault(_stripTime);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Checks if a date is the month before another date without time
   *
   * @param {Date} date the date to check if it is before the other
   * @param {Date} toCompare the date to compare to
   * @return true if the date is before the other date's first day of month.
   */
  function isMonthBefore(date, toCompare) {
    if (!date || !toCompare) {
      return false;
    }

    var d1 = (0, _stripTime2.default)(new Date(date.getFullYear(), date.getMonth(), 1));
    var d2 = (0, _stripTime2.default)(new Date(toCompare.getFullYear(), toCompare.getMonth() - 1, 1));
    return d1 > d2;
  }
});