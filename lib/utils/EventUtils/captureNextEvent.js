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
    global.captureNextEvent = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = captureNextEvent;
  /**
   * This function will capture the next event and stop propagation during the
   * bubbling cycle of events. This is really only useful if you want to stop
   * the default behavior of chained events.
   *
   * @param {String} type - The event type to capture.
   * @param {Object|func=} target - Either the DOM node to target, a callback function
   *      to call once the event has been captured, or undefined. If this is undefined,
   *      the event will be captured on the window.
   * @param {func=} callback - An optional callback function to call once the event
   *      has been captured.
   */
  function captureNextEvent(type, target, callback) {
    var el = typeof target !== 'function' && target ? target : window;
    var cb = typeof target === 'function' ? target : callback;

    var capture = function capture(e) {
      e.stopPropagation();
      if (cb) {
        cb(e);
      }

      el.removeEventListener(type, capture, true);
    };

    el.addEventListener(type, capture, true);
  }
});