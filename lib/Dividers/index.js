(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Divider'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Divider'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Divider);
    global.index = mod.exports;
  }
})(this, function (exports, _Divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Divider2 = _interopRequireDefault(_Divider);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _Divider2.default;
});