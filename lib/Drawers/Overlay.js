(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', '../Helpers/Portal'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('../Helpers/Portal'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.Portal);
    global.Overlay = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _Portal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Portal2 = _interopRequireDefault(_Portal);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Overlay = function (_PureComponent) {
    _inherits(Overlay, _PureComponent);

    function Overlay() {
      _classCallCheck(this, Overlay);

      return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
    }

    _createClass(Overlay, [{
      key: 'getChildContext',
      value: function getChildContext() {
        // Always want the overlay to render in a separate subtree until 1.1.0
        return { isInPortal: false };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            active = _props.active,
            visible = _props.visible,
            renderNode = _props.renderNode,
            onClick = _props.onClick;

        return _react2.default.createElement(
          _Portal2.default,
          { visible: visible, renderNode: renderNode },
          _react2.default.createElement('div', {
            className: (0, _classnames2.default)('md-overlay md-overlay--drawer md-pointer--hover', {
              'md-overlay--active': active
            }),
            onClick: onClick
          })
        );
      }
    }]);

    return Overlay;
  }(_react.PureComponent);

  Overlay.propTypes = {
    active: _propTypes2.default.bool,
    visible: _propTypes2.default.bool.isRequired,
    renderNode: _propTypes2.default.object,
    onClick: _propTypes2.default.func
  };
  Overlay.childContextTypes = {
    isInPortal: _propTypes2.default.bool
  };
  exports.default = Overlay;
});