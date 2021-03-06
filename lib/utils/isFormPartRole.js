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
    global.isFormPartRole = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFormPartRole;
  /**
   * A simple utility function to determine if an element has a role that should
   * be used as a form part. This is mostly used for changing the behavior of keyboard
   * events.
   *
   * A form part role is one of the following:
   * - checkbox
   * - radio
   * - listbox
   * - input
   *
   * @param {HTMLElement} el - the element to check.
   * @return {boolean} true if the element is considered an element part of a form.
   */
  function isFormPartRole(el) {
    if (!el) {
      return false;
    } else if (el.nodeName === 'INPUT') {
      return true;
    }

    var role = el.getAttribute('role');
    return role === 'checkbox' || role === 'radio' || role === 'listbox';
  }
});