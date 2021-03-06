(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../../constants/keyCodes', '../closest', '../isFormPartRole'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../../constants/keyCodes'), require('../closest'), require('../isFormPartRole'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.keyCodes, global.closest, global.isFormPartRole);
    global.handleKeyboardAccessibility = mod.exports;
  }
})(this, function (exports, _keyCodes, _closest, _isFormPartRole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = handleKeyboardAccessibility;

  var _closest2 = _interopRequireDefault(_closest);

  var _isFormPartRole2 = _interopRequireDefault(_isFormPartRole);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * A utility function for adding keyboard accessibility to elements that are not a natively
   * clickable (div, span, etc). When the space or enter key is pressed while focusing the
   * element, different flows will happen.
   *
   * - space - The click event will be triggered and the default page scrolling behavior of the
   *      spacebar will be prevented
   * - enter - If the element has a form role ('checkbox' or 'radio'), the click event will not
   *      be triggered. Instead, it will find out if the element is inside a form. If it is, it
   *      will emulate the default behavior of attempting to submit the form. If the element does
   *      not have a form role, the click event will be triggered.
   *
   * @param {Event} e - the keydown event
   * @param {function} onClick - the on click event to be triggered if space or enter was pressed
   * @param {boolean=true} listenToEnter - boolean if the enter key should be used to trigger the
   *      the click event. Even if this is true, the click event will not be triggered if the role
   *      is for a form role.
   * @param {boolean=true} listenToSpace - boolean if the space key should be used to trigger the
   *      click event.
   * @return {Boolean} true if the enter or space keys were pressed while their listener is also active.
   */
  function handleKeyboardAccessibility(e, onClick) {
    var listenToEnter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var listenToSpace = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var key = e.which || e.keyCode;
    var space = listenToSpace && key === _keyCodes.SPACE;
    var enter = key === _keyCodes.ENTER;

    var tagName = e.target.tagName;

    if (space && tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
      // it is valid to press space in text fields
      // Stop page scrolling
      e.preventDefault();
    }

    if (enter && (0, _isFormPartRole2.default)(e.target)) {
      var form = (0, _closest2.default)(e.target, 'form');
      var submit = form ? form.querySelector('*[type="submit"]') : null;
      if (submit) {
        submit.click();
      }

      return true;
    }

    if (enter && listenToEnter || space) {
      onClick(e);

      return true;
    }

    return false;
  }
});