(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '../utils/PropTypes/componentDeprecated', './Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('../utils/PropTypes/componentDeprecated'), require('./Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.componentDeprecated, global.Button);
    global.FlatButton = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _componentDeprecated, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _componentDeprecated2 = _interopRequireDefault(_componentDeprecated);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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

  var FlatButton = function (_PureComponent) {
    _inherits(FlatButton, _PureComponent);

    function FlatButton() {
      _classCallCheck(this, FlatButton);

      return _possibleConstructorReturn(this, (FlatButton.__proto__ || Object.getPrototypeOf(FlatButton)).apply(this, arguments));
    }

    _createClass(FlatButton, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(_Button2.default, _extends({}, this.props, { flat: true }));
      }
    }]);

    return FlatButton;
  }(_react.PureComponent);

  FlatButton.propTypes = {
    /**
     * The label to display in the button.
     */
    label: _propTypes2.default.node.isRequired,

    /**
     * An optional className to apply to the button.
     */
    className: _propTypes2.default.string,

    /**
     * Boolean if the icon should be displayed before the label.
     */
    iconBefore: _propTypes2.default.bool,

    /**
     * A `FontIcon` to display in the button. It can be placed before
     * or after the label.
     */
    children: _propTypes2.default.node,

    /**
     * The button type.
     */
    type: _propTypes2.default.string,

    /**
     * Boolean if the button should be styled with the primary color.
     */
    primary: _propTypes2.default.bool,

    /**
     * Boolean if the button should be styled with the secondary color.
     */
    secondary: _propTypes2.default.bool,

    /**
     * Boolean if the button is disabled.
     */
    disabled: _propTypes2.default.bool,

    /**
     * An optional href to convert the button into a link button.
     */
    href: _propTypes2.default.string,

    /**
     * An optional function to call when the button is clicked.
     */
    onClick: _propTypes2.default.func,

    deprecated: (0, _componentDeprecated2.default)('The behavior of the `FlatButton` can be achieved with the `Button` component ' + 'without the additional bundle size. Switch to the `Button` compnent and add a ' + 'prop `flat`.')
  };
  FlatButton.defaultProps = {
    type: 'button',
    iconBefore: true
  };
  exports.default = FlatButton;
});