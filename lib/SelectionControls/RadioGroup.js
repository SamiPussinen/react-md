(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-prop-types/lib/deprecated', './SelectionControlGroup'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-prop-types/lib/deprecated'), require('./SelectionControlGroup'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.deprecated, global.SelectionControlGroup);
    global.RadioGroup = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _deprecated, _SelectionControlGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _SelectionControlGroup2 = _interopRequireDefault(_SelectionControlGroup);

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

  var RadioGroup = function (_PureComponent) {
    _inherits(RadioGroup, _PureComponent);

    function RadioGroup() {
      _classCallCheck(this, RadioGroup);

      return _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
    }

    _createClass(RadioGroup, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            props = _objectWithoutProperties(_props, ['children']);

        delete props.id;
        delete props.defaultValue;

        var _props2 = this.props,
            id = _props2.id,
            defaultValue = _props2.defaultValue;

        if (!id) {
          id = props.name + 'RadiosUniquePlease';
        }

        if (typeof props.value === 'undefined') {
          if (typeof defaultValue === 'undefined') {
            defaultValue = _react.Children.map(children, function (_ref) {
              var value = _ref.props.value;
              return value;
            })[0];
          }
        }

        var controls = _react.Children.map(children, function (radio) {
          var props = Object.assign({}, radio.props);
          delete props.checkedIcon;
          delete props.uncheckedIcon;
          delete props.checkedIconChildren;
          delete props.checkedIconClassName;
          delete props.uncheckedIconChildren;
          delete props.uncheckedIconClassName;
          return _extends({}, props);
        });
        return _react2.default.createElement(_SelectionControlGroup2.default, _extends({}, props, { id: id, defaultValue: defaultValue, type: 'radio', controls: controls }));
      }
    }]);

    return RadioGroup;
  }(_react.PureComponent);

  RadioGroup.propTypes = {
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    defaultValue: _propTypes2.default.string,
    className: _propTypes2.default.string,
    children: _propTypes2.default.arrayOf(_propTypes2.default.node).isRequired,
    inline: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,

    _deprecated: (0, _deprecated2.default)(_propTypes2.default.bool, 'Use the `SelectionControlGroup` component instead')
  };
  exports.default = RadioGroup;
});