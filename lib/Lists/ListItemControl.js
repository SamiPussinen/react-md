(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', './ListItemText', './TileAddon'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('./ListItemText'), require('./TileAddon'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.ListItemText, global.TileAddon);
    global.ListItemControl = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _ListItemText, _TileAddon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _ListItemText2 = _interopRequireDefault(_ListItemText);

  var _TileAddon2 = _interopRequireDefault(_TileAddon);

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

  var ListItemControl = function (_PureComponent) {
    _inherits(ListItemControl, _PureComponent);

    function ListItemControl() {
      _classCallCheck(this, ListItemControl);

      return _possibleConstructorReturn(this, (ListItemControl.__proto__ || Object.getPrototypeOf(ListItemControl)).apply(this, arguments));
    }

    _createClass(ListItemControl, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            className = _props.className,
            tileStyle = _props.tileStyle,
            tileClassName = _props.tileClassName,
            primaryAction = _props.primaryAction,
            secondaryAction = _props.secondaryAction,
            primaryText = _props.primaryText,
            secondaryText = _props.secondaryText,
            threeLines = _props.threeLines,
            leftIcon = _props.leftIcon,
            leftAvatar = _props.leftAvatar,
            rightIcon = _props.rightIcon,
            rightAvatar = _props.rightAvatar,
            props = _objectWithoutProperties(_props, ['className', 'tileStyle', 'tileClassName', 'primaryAction', 'secondaryAction', 'primaryText', 'secondaryText', 'threeLines', 'leftIcon', 'leftAvatar', 'rightIcon', 'rightAvatar']);

        var control = _react.Children.only(primaryAction || secondaryAction);
        var text = _react2.default.createElement(_ListItemText2.default, {
          key: 'text',
          primaryText: control.props.label || primaryText,
          secondaryText: secondaryText,
          className: (0, _classnames2.default)({
            'md-tile-content--left-icon': leftIcon,
            'md-tile-content--left-avatar': leftAvatar,
            'md-tile-content--left-button': primaryAction,
            'md-tile-content--right-padding': primaryAction
          })
        });
        control = (0, _react.cloneElement)(control, {
          className: (0, _classnames2.default)('md-list-control', {
            'md-list-control--right': secondaryAction
          }, control.props.className),
          label: text
        });

        var leftNode = _react2.default.createElement(_TileAddon2.default, {
          key: 'left-addon',
          icon: leftIcon,
          avatar: leftAvatar
        });

        var rightNode = _react2.default.createElement(_TileAddon2.default, {
          key: 'right-addon',
          icon: rightIcon,
          avatar: rightAvatar
        });

        var icond = !!leftIcon || !!rightIcon;
        var avatard = !!leftAvatar || !!rightAvatar;

        return _react2.default.createElement(
          'li',
          _extends({}, props, { className: (0, _classnames2.default)('md-list-item', className) }),
          _react2.default.createElement(
            'div',
            {
              style: tileStyle,
              className: (0, _classnames2.default)('md-list-tile md-text', {
                'md-list-tile--icon': !secondaryText && icond && !avatard,
                'md-list-tile--avatar': !secondaryText && avatard,
                'md-list-tile--two-lines': secondaryText && !threeLines,
                'md-list-tile--three-lines': secondaryText && threeLines,
                'md-list-tile--control-left': primaryAction,
                'md-list-tile--control-right': secondaryAction
              }, tileClassName)
            },
            leftNode,
            control,
            rightNode
          )
        );
      }
    }]);

    return ListItemControl;
  }(_react.PureComponent);

  ListItemControl.propTypes = {
    /**
     * An optional style to apply to the `.md-list-item`.
     */
    style: _propTypes2.default.object,

    /**
     * An optional className to apply to the `.md-list-item`.
     */
    className: _propTypes2.default.string,

    /**
     * An optional style to apply to the `.md-list-tile`.
     */
    tileStyle: _propTypes2.default.object,

    /**
     * An optional className to apply to the `.md-list-tile`.
     */
    tileClassName: _propTypes2.default.string,

    /**
     * The primary text to display in the `ListItemControl`. The `primaryAction` or
     * `secondaryAction` will end up getting the `label` prop injected into it with
     * a combination of the `primaryText` and `secondaryText`. If the `primaryAction`
     * or `secondaryAction` already have a label prop, the `label` prop will be used
     * as the `primaryText`.
     */
    primaryText: _propTypes2.default.node,

    /**
     * An optional secondary text that can be displayed in the label of the `primaryAction`
     * or `secondaryAction`.
     */
    secondaryText: _propTypes2.default.node,

    /**
     * Boolean if the primary and secondary text will span three lines.
     */
    threeLines: _propTypes2.default.bool,

    /**
     * The primary action of the `ListItemControl`. This _should_ normally
     * be a type of `SelectionControl`
     */
    primaryAction: _propTypes2.default.element,

    /**
     * The secondary action of the `ListItemControl`. This _should_ normally
     * be a type of `SelectionControl`. If it is a selection control,
     * make sure to add the `labelBefore` prop to get correct positioning.
     */
    secondaryAction: _propTypes2.default.element,

    /**
     * An optional `FontIcon` to display to the left of the action.
     */
    leftIcon: _propTypes2.default.node,

    /**
     * An optional `Avatar` to display to the left of the action.
     */
    leftAvatar: _propTypes2.default.node,

    /**
     * An optional `FontIcon` to display to the right of the action.
     */
    rightIcon: _propTypes2.default.node,

    /**
     * An optional `FontIcon` to display to the right of the action.
     */
    rightAvatar: _propTypes2.default.node
  };
  exports.default = ListItemControl;
});