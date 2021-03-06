(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', '../constants/CSSTransitionGroupTick'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('../constants/CSSTransitionGroupTick'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames, global.CSSTransitionGroupTick);
    global.Ink = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _CSSTransitionGroupTick) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

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

  var Ink = function (_PureComponent) {
    _inherits(Ink, _PureComponent);

    function Ink(props) {
      _classCallCheck(this, Ink);

      var _this = _possibleConstructorReturn(this, (Ink.__proto__ || Object.getPrototypeOf(Ink)).call(this, props));

      _this.state = {
        active: false,
        expanded: false,
        pulsing: false,
        leaving: false
      };
      return _this;
    }

    _createClass(Ink, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (!this.props.aborted && nextProps.aborted) {
          if (this._timeout) {
            clearTimeout(this._timeout);
          }

          if (this._abort) {
            this._abort();
          }

          this.setState({ active: false, expanding: false, pulsing: false, leaving: false });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
      }
    }, {
      key: 'componentWillEnter',
      value: function componentWillEnter(cb) {
        var _this2 = this;

        if (this.props.aborted) {
          cb();
          return;
        }

        var _props = this.props,
            transitionOverlap = _props.transitionOverlap,
            transitionEnterTimeout = _props.transitionEnterTimeout;

        this._abort = cb;

        this._timeout = setTimeout(function () {
          _this2._timeout = setTimeout(function () {
            _this2._timeout = null;
            _this2._abort = null;

            cb();
          }, transitionEnterTimeout - transitionOverlap);

          _this2.setState({ expanded: true });
        }, _CSSTransitionGroupTick2.default);

        this.setState({ active: true });
      }
    }, {
      key: 'componentDidEnter',
      value: function componentDidEnter() {
        var _this3 = this;

        this._timeout = setTimeout(function () {
          _this3._timeout = null;

          _this3.setState({ pulsing: true });
        }, this.props.transitionEnterTimeout);
      }
    }, {
      key: 'componentWillLeave',
      value: function componentWillLeave(cb) {
        var _this4 = this;

        if (this.props.aborted) {
          cb();
          return;
        }

        if (this._timeout) {
          clearTimeout(this._timeout);
        }

        this._abort = cb;
        this._timeout = setTimeout(function () {
          _this4._timeout = null;

          cb();
        }, this.props.transitionLeaveTimeout);

        this.setState({ pulsing: false, leaving: true });
      }
    }, {
      key: 'componentDidLeave',
      value: function componentDidLeave() {
        if (!this.props.aborted && this.props.onRemove) {
          this.props.onRemove();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            style = _props2.style,
            className = _props2.className,
            left = _props2.left,
            top = _props2.top,
            size = _props2.size;
        var _state = this.state,
            active = _state.active,
            expanded = _state.expanded,
            pulsing = _state.pulsing,
            leaving = _state.leaving;


        return _react2.default.createElement('span', {
          style: Object.assign({}, style, {
            left: left,
            top: top,
            height: size,
            width: size
          }),
          className: (0, _classnames2.default)('md-ink', {
            'md-ink--active': active,
            'md-ink--expanded': expanded,
            'md-ink--pulsing': pulsing,
            'md-ink--leaving': leaving
          }, className)
        });
      }
    }]);

    return Ink;
  }(_react.PureComponent);

  Ink.propTypes = {
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    aborted: _propTypes2.default.bool,
    onRemove: _propTypes2.default.func,
    left: _propTypes2.default.number.isRequired,
    top: _propTypes2.default.number.isRequired,
    size: _propTypes2.default.number.isRequired,
    transitionOverlap: _propTypes2.default.number.isRequired,
    transitionEnterTimeout: _propTypes2.default.number.isRequired,
    transitionLeaveTimeout: _propTypes2.default.number.isRequired
  };
  exports.default = Ink;
});