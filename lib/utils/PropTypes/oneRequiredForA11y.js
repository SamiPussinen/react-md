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
    global.oneRequiredForA11y = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = oneRequiredForA11y;
  /**
   * This validator checks that either the current prop is defined and valid or that one of the
   * other given prop names are defined. If it fails it returns an error for a11y.
   *
   * @param {function} validator - The React PropTypes validator to use for the given prop.
   * @param {String[]} otherPropNames - Any other prop names to validate against.
   * @return {Error} an error or null
   */
  function oneRequiredForA11y(validator) {
    for (var _len = arguments.length, otherPropNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      otherPropNames[_key - 1] = arguments[_key];
    }

    return function validate(props, propName, componentName, location, propFullName) {
      var componentNameSafe = componentName || '<<anonymous>>';
      var propFullNameSafe = propFullName || propName;
      var allPropNames = [propFullNameSafe].concat(otherPropNames);

      for (var _len2 = arguments.length, args = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
        args[_key2 - 5] = arguments[_key2];
      }

      var err = validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
      if (!err && !allPropNames.filter(function (pn) {
        return typeof props[pn] !== 'undefined';
      }).length) {
        err = new Error('One of the following props are required to make ' + componentNameSafe + ' accessible ' + ('for users of assistive technologies such as screen readers. `' + allPropNames.join('`, ') + '`.'));
      }

      return err;
    };
  }
});