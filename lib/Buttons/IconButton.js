(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', '../utils/PropTypes/componentDeprecated', '../FontIcons/FontIcon', '../Tooltips/injectTooltip', './Button'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('../utils/PropTypes/componentDeprecated'), require('../FontIcons/FontIcon'), require('../Tooltips/injectTooltip'), require('./Button'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.componentDeprecated, global.FontIcon, global.injectTooltip, global.Button);
    global.IconButton = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _componentDeprecated, _FontIcon, _injectTooltip, _Button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _componentDeprecated2 = _interopRequireDefault(_componentDeprecated);

  var _FontIcon2 = _interopRequireDefault(_FontIcon);

  var _injectTooltip2 = _interopRequireDefault(_injectTooltip);

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

  function _objectWithoutProperties(obj, keys) {
    var target = {};

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
      target[i] = obj[i];
    }

    return target;
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

  var IconButton = function (_PureComponent) {
    _inherits(IconButton, _PureComponent);

    function IconButton() {
      _classCallCheck(this, IconButton);

      return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
    }

    _createClass(IconButton, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            iconClassName = _props.iconClassName,
            children = _props.children,
            tooltip = _props.tooltip,
            floating = _props.floating,
            props = _objectWithoutProperties(_props, ['iconClassName', 'children', 'tooltip', 'floating']);

        delete props.tooltipLabel;
        delete props.tooltipPosition;

        return _react2.default.createElement(
          _Button2.default,
          _extends({}, props, { icon: !floating, floating: floating }),
          tooltip,
          _react2.default.createElement(
            _FontIcon2.default,
            { iconClassName: iconClassName },
            children
          )
        );
      }
    }]);

    return IconButton;
  }(_react.PureComponent);

  IconButton.propTypes = {
    /**
     * The className to use for rendering the `FontIcon`.
     */
    iconClassName: _propTypes2.default.string,

    /**
     * Any children to use to render the `FontIcon`.
     */
    children: _propTypes2.default.node,

    /**
     * An optional className to apply to the button.
     */
    className: _propTypes2.default.string,

    /**
     * The button type.
     */
    type: _propTypes2.default.string,

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
    /**
     * Boolean if the IconButton is floating
    floating: PropTypes.bool,
     /**
     * An optional label to use if you would like a tooltip to display
     * on hover or touch hold.
     */
    tooltipLabel: _propTypes2.default.node,

    /**
     * The position that the tooltip should be displayed relative to
     * the button.
     */
    tooltipPosition: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),

    /**
     * An optional amount of delay before the tooltip appears.
     */
    tooltipDelay: _propTypes2.default.number,

    // Inject from injectTooltip
    tooltip: _propTypes2.default.node,
    floating: _propTypes2.default.bool,

    deprecated: (0, _componentDeprecated2.default)('The behavior of the `IconButton` can be achieved with the `Button` component ' + 'without the additional bundle size. Switch to the `Button` compnent and add a ' + 'prop `icon`.')
  };
  IconButton.defaultProps = {
    type: 'button'
  };
  exports.default = (0, _injectTooltip2.default)(IconButton);
});