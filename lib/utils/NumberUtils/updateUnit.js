(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.updateUnit = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = updateUnit;
  /**
   * Takes in a css unit (px, rem, em, etc) or a number and applies a function to the
   * number part of the unit.
   *
   * If the unit was a number to start with and a `toUnit` is given, the number will
   * be given the `toUnit`. Otherwise the number will be returned.
   *
   * If the unit was a string, the original units will be applied back to the updated
   * unit's value.
   *
   * @param {number|String} unit - the unit to apply a function to.
   * @param {function} fn - the function to apply to the number.
   * @param {String=} toUnit - an optional unit to cast the updated unit to.
   *
   * @return {String|number} the updated unit.
   */
  function updateUnit(unit, fn, toUnit) {
    var updated = fn(parseInt(unit, 10));

    if (typeof unit === 'number') {
      return toUnit ? '' + updated + toUnit : updated;
    }

    return '' + updated + unit.replace(/[0-9]/g, '');
  }
});