(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', './contextTypes'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('./contextTypes'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.contextTypes);
    global.TableBody = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _contextTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _contextTypes2 = _interopRequireDefault(_contextTypes);

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

  var TableBody = function (_Component) {
    _inherits(TableBody, _Component);

    function TableBody() {
      _classCallCheck(this, TableBody);

      return _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
    }

    _createClass(TableBody, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            children = _props.children,
            className = _props.className,
            props = _objectWithoutProperties(_props, ['children', 'className']);

        var _context = this.context,
            selectedRows = _context.selectedRows,
            toggleSelectedRow = _context.toggleSelectedRow;


        var rows = children ? _react.Children.map(_react.Children.toArray(children), function (row, i) {
          var uncontrolled = typeof row.props.selected === 'undefined';

          // Update the row to inject the selected prop from context if it is uncontrolled.
          // Also update the onCheckbox click function to additionally toggle the row if uncontrolled.
          return _react2.default.cloneElement(row, _extends({}, row.props, {
            index: i,
            selected: uncontrolled ? selectedRows[i] : row.props.selected,
            onCheckboxClick: function onCheckboxClick(checked, e) {
              if (row.props.onCheckboxClick) {
                row.props.onCheckboxClick(i, checked, e);
              }

              if (uncontrolled) {
                toggleSelectedRow(i);
              }
            }
          }));
        }) : null;

        return _react2.default.createElement(
          'tbody',
          _extends({}, props, { className: (0, _classnames2.default)('md-table-body', className) }),
          rows
        );
      }
    }]);

    return TableBody;
  }(_react.Component);

  TableBody.propTypes = {
    /**
     * An optional style to apply to the tbody.
     */
    style: _propTypes2.default.object,

    /**
     * An optional className to apply to the tbody.
     */
    className: _propTypes2.default.string,

    /**
     * A list or a single item of `TableRow` components to render.
     */
    children: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.arrayOf(_propTypes2.default.element)])
  };
  TableBody.contextTypes = _contextTypes2.default;
  exports.default = TableBody;
});