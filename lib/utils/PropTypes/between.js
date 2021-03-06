(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../NumberUtils/isBetween'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../NumberUtils/isBetween'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isBetween);
    global.between = mod.exports;
  }
})(this, function (exports, _isBetween) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = between;

  var _isBetween2 = _interopRequireDefault(_isBetween);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Validates that a number is between a min and max value.
   *
   * @param {function} validator - The number validator to use.
   * @param {number} min - The min number to use.
   * @param {number} max - The max number to use.
   * @return {Error} the prop type error or null
   */
  function between(validator, min, max) {
    return function validate(props, propName, componentName, location, propFullName) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;

      for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
        args[_key - 5] = arguments[_key];
      }

      var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
      var value = props[propName];
      if (!err && typeof value !== 'undefined' && !(0, _isBetween2.default)(value, min, max)) {
        err = new Error('You provided a `' + propFullNameSafe + '` ' + location + ' to the ' + componentNameSafe + ' that was ' + ('not within the range from \'' + min + ' - ' + max + '\'. `' + propFullNameSafe + '`: ' + value + '.'));
      }

      return err;
    };
  } /** @module PropTypes/between */
});