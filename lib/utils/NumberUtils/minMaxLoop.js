(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.minMaxLoop = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = minMaxLoop;
  /**
   * Keeps a number within the min and max values. When the number becomes less
   * than the min, it will loop around and be the max value. When the number is
   * greater than the max, it will loop around and be the min value.
   *
   * @param {Number} current - the current number
   * @param {Number} min - the minimum number allowed
   * @param {Number} max - the maximum number allowed
   * @param {Boolean} increment - boolean if the value should be incremented or decremented by
   *    1.
   * @return {Number} the next number
   */
  function minMaxLoop(current, min, max) {
    var increment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var next = current + (increment ? 1 : -1);
    if (max < next) {
      next = min;
    } else if (next < min) {
      next = max;
    }

    return next;
  }
});