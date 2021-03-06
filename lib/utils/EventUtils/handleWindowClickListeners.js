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
    global.handleWindowClickListeners = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = handleWindowClickListeners;
  var mobileSafari = void 0;

  /**
   * Since mobile safari doesn't delegate click events to the window (it only does touch events),
   * this utility function will hack a fix to allow the delegation by updaging the body's cursor
   * to be a pointer.
   *
   * Hopefully this can be removed one day....
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile
   * @param {function} cb - the callback function to use for a window click event.
   * @param {boolean} enabled - boolean if the click event is enabled.
   */
  function handleWindowClickListeners(cb) {
    var enabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (typeof mobileSafari === 'undefined' && typeof window !== 'undefined') {
      var ua = window.navigator.userAgent;
      var iOS = ua.match(/iP(ad|hone)/i);
      var webkit = ua.match(/WebKit/i);
      mobileSafari = iOS && webkit && !ua.match(/CriOS/i);

      if (mobileSafari) {
        document.body.style.cursor = 'pointer';
      }
    }

    var listener = window[(enabled ? 'add' : 'remove') + 'EventListener'];
    listener('click', cb);
  }
});