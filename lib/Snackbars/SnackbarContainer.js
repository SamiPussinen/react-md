(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'react-dom', 'react-transition-group/CSSTransitionGroup', 'react-prop-types/lib/deprecated', '../utils/getField', '../constants/CSSTransitionGroupTick', './isInvalidAnimate', '../Helpers/Portal', './Snackbar'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('react-dom'), require('react-transition-group/CSSTransitionGroup'), require('react-prop-types/lib/deprecated'), require('../utils/getField'), require('../constants/CSSTransitionGroupTick'), require('./isInvalidAnimate'), require('../Helpers/Portal'), require('./Snackbar'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactDom, global.CSSTransitionGroup, global.deprecated, global.getField, global.CSSTransitionGroupTick, global.isInvalidAnimate, global.Portal, global.Snackbar);
    global.SnackbarContainer = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _reactDom, _CSSTransitionGroup, _deprecated, _getField, _CSSTransitionGroupTick, _isInvalidAnimate, _Portal, _Snackbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

  var _deprecated2 = _interopRequireDefault(_deprecated);

  var _getField2 = _interopRequireDefault(_getField);

  var _CSSTransitionGroupTick2 = _interopRequireDefault(_CSSTransitionGroupTick);

  var _isInvalidAnimate2 = _interopRequireDefault(_isInvalidAnimate);

  var _Portal2 = _interopRequireDefault(_Portal);

  var _Snackbar2 = _interopRequireDefault(_Snackbar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

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

  var CHAINED_TOAST_DELAY = 50;

  /**
   * The `Snackbar` component is used for displaying a concise and small message to the user about
   * an operation performed.
   *
   * > The main component for the `Snackbar` is actually named the `SnackbarContainer`, so you need
   * to make sure the import is `react-md/lib/Snackbars` or `react-md/lib/Snackbars/SnackbarContainer`.
   * The first import is preferable.
   */

  var SnackbarContainer = function (_PureComponent) {
    _inherits(SnackbarContainer, _PureComponent);

    function SnackbarContainer(props) {
      _classCallCheck(this, SnackbarContainer);

      var _this = _possibleConstructorReturn(this, (SnackbarContainer.__proto__ || Object.getPrototypeOf(SnackbarContainer)).call(this, props));

      var visible = !!props.toasts.length;
      _this.state = {
        visible: visible,
        toast: null
      };

      _this._isMultiline = _this._isMultiline.bind(_this);
      _this._initAndToast = _this._initAndToast.bind(_this);
      _this._setContainer = _this._setContainer.bind(_this);
      _this._createSwapTimer = _this._createSwapTimer.bind(_this);
      _this._createLeaveTimer = _this._createLeaveTimer.bind(_this);
      return _this;
    }

    _createClass(SnackbarContainer, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var toasts = this.props.toasts;

        if (toasts.length) {
          this._initAndToast(toasts[0]);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _nextProps$toasts = _slicedToArray(nextProps.toasts, 1),
            toast = _nextProps$toasts[0];

        var _props$toasts = _slicedToArray(this.props.toasts, 1),
            prevToast = _props$toasts[0];

        if (toast === prevToast || toast === this.state.toast) {
          return;
        }

        if (!toast) {
          this._createLeaveTimer();
        } else if (!this.state.visible) {
          this._initAndToast(toast);
        } else {
          this._createSwapTimer(toast);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this._initTimeout) {
          clearTimeout(this._initTimeout);
        }

        if (this._leaveTimeout) {
          clearTimeout(this._leaveTimeout);
        }

        if (this._swapTimeout) {
          clearTimeout(this._swapTimeout);
        }

        if (this._dismissTimeout) {
          clearTimeout(this._dismissTimeout);
        }
      }
    }, {
      key: '_setContainer',
      value: function _setContainer(container) {
        this._container = (0, _reactDom.findDOMNode)(container);
      }
    }, {
      key: '_isMultiline',
      value: function _isMultiline(toast) {
        var container = this._container;
        if (container === null) {
          return false;
        }

        var message = document.createElement('p');
        message.classList.add('md-snackbar--toast');
        message.innerHTML = toast.text;

        var snackbar = void 0;
        if (toast.action) {
          message.classList.add('md-snackbar--action');

          snackbar = document.createElement('section');
          snackbar.className = 'md-snackbar';
          snackbar.appendChild(message);

          var action = document.createElement('button');
          action.innerHTML = typeof toast.action === 'string' ? toast.action : toast.action.label;
          action.className = 'md-btn md-btn--flat md-btn--text md-btn--snackbar';
          snackbar.appendChild(action);
        } else {
          snackbar = message;
        }

        // Only style we really want from the .md-snackbar
        snackbar.style.maxWidth = '568px';

        container.appendChild(snackbar);
        var multiline = message.offsetHeight > 20;
        container.removeChild(snackbar);

        return multiline;
      }
    }, {
      key: '_initAndToast',
      value: function _initAndToast(toast) {
        var _this2 = this;

        this._initTimeout = setTimeout(function () {
          _this2._initTimeout = null;

          _this2.setState({ toast: toast, multiline: _this2._isMultiline(toast) });
        }, _CSSTransitionGroupTick2.default);

        this.setState({ visible: true });
      }
    }, {
      key: '_createLeaveTimer',
      value: function _createLeaveTimer() {
        var _this3 = this;

        var time = this.props.transitionLeaveTimeout;

        this._leaveTimeout = setTimeout(function () {
          _this3._leaveTimeout = null;

          _this3.setState({ visible: false });
        }, time + _CSSTransitionGroupTick2.default);

        this.setState({ toast: null });
      }
    }, {
      key: '_createSwapTimer',
      value: function _createSwapTimer(toast) {
        var _this4 = this;

        this._swapTimeout = setTimeout(function () {
          _this4._swapTimeout = null;

          _this4.setState({ toast: toast, multiline: _this4._isMultiline(toast) });
        }, this.props.transitionLeaveTimeout + CHAINED_TOAST_DELAY);

        this.setState({ toast: null });
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            visible = _state.visible,
            toast = _state.toast,
            multiline = _state.multiline;

        var _props = this.props,
            transitionName = _props.transitionName,
            transitionEnterTimeout = _props.transitionEnterTimeout,
            transitionLeaveTimeout = _props.transitionLeaveTimeout,
            dismiss = _props.dismiss,
            onDismiss = _props.onDismiss,
            lastChild = _props.lastChild,
            props = _objectWithoutProperties(_props, ['transitionName', 'transitionEnterTimeout', 'transitionLeaveTimeout', 'dismiss', 'onDismiss', 'lastChild']);

        delete props.toasts;
        delete props.renderNode;
        var renderNode = (0, _getField2.default)(this.props, this.context, 'renderNode');

        var snackbar = void 0;
        if (toast) {
          snackbar = _react2.default.createElement(_Snackbar2.default, _extends({}, props, {
            key: 'snackbar',
            leaveTimeout: transitionLeaveTimeout,
            toast: toast,
            multiline: multiline,
            onDismiss: onDismiss || dismiss
          }));
        }

        return _react2.default.createElement(
          _Portal2.default,
          { visible: visible, renderNode: renderNode, lastChild: lastChild },
          _react2.default.createElement(
            _CSSTransitionGroup2.default,
            {
              ref: this._setContainer,
              key: 'container',
              className: 'md-snackbar-container',
              transitionName: transitionName,
              transitionEnterTimeout: transitionEnterTimeout,
              transitionLeaveTimeout: transitionLeaveTimeout
            },
            snackbar
          )
        );
      }
    }]);

    return SnackbarContainer;
  }(_react.PureComponent);

  SnackbarContainer.propTypes = {
    /**
     * An id for the Snackbar once a toast has been added and is visible. This is a recommended
     * prop for accessibility concerns. If it is ommitted, the id will become `'snackbarAlert'`
     * when there is no action on the toast, or `'snackbarAlertDialog'` when there is an action
     * on the toast.
     */
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

    /**
     * An optional style to apply to the snackbar once it appears.
     */
    style: _propTypes2.default.object,

    /**
     * An optional className to apply to the snackbar once it appears.
     */
    className: _propTypes2.default.string,

    /**
     * An immutable controlled queue of toasts that should appear in the snackbar.
     * The snackbar will always display the first toast in this list. When the user has
     * either clicked the action of the toast, or the `autohideTimeout` has been reached,
     * the `onDismiss` function will be called. The `onDismiss` function should remove the
     * the first toast and return a new list of remaining toasts.
     *
     * ```js
     * let toasts = [];
     * const onDismiss = () => {
     *   const [, ...remainingToasts] = toasts;
     *   toasts = remainingToasts;
     * };
     * ```
     */
    toasts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      /**
       * The text to display in the toast.
       */
      text: _propTypes2.default.node.isRequired,

      /**
       * An optional action to take. If this value is a string, the `label` for the
       * button will be this value, Otherwise, all the keys in the action object will
       * be applied to the `Button`.
       */
      action: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.shape({
        onClick: _propTypes2.default.func,
        label: _propTypes2.default.node.isRequired
      })])
    })).isRequired,

    /**
     * A function to call that will dismiss a toast. This will automatically be bound to
     * any toast that has an `action` and it will also be called when the `autohideTimeout`
     * has been reached.
     */
    onDismiss: _propTypes2.default.func.isRequired,

    /**
     * Boolean if the snackbar's toasts should automatically be dismissed after the
     * `autohideTimeout` has been reached.
     */
    autohide: _propTypes2.default.bool,

    /**
     * The amount of time before the snackbar should be dequeued and the next toast
     * should be displayed.
     */
    autohideTimeout: _propTypes2.default.number.isRequired,

    /**
     * The transition name to use for the snackbar appearing and disappearing.
     */
    transitionName: _propTypes2.default.string.isRequired,

    /**
     * The transition time for the snackbar to enter. This should match the `$md-snackbar-transition-time`
     * sass variable.
     */
    transitionEnterTimeout: _propTypes2.default.number.isRequired,

    /**
     * The transition time for the snackbar to leave. This should match the `$md-snackbar-transition-time`
     * sass variable.
     */
    transitionLeaveTimeout: _propTypes2.default.number.isRequired,

    /**
     * When the app contains a floating action button that is fixed to the bottom of the screen,
     * you should set this to be a ref of the floating action button. When a snackbar appears,
     * the FAB will be moved to not overlay the snackbar.
     */
    fab: function fab(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

      if (!propValue) {
        return null;
      }

      if (propType !== 'object' || typeof propValue.render !== 'function' || (0, _isInvalidAnimate2.default)(propValue)) {
        var componentNameSafe = componentName || '<<anonymous>>';
        var propFullNameSafe = propFullName || propName;
        return new Error('Invalid ' + location + ' `' + propFullNameSafe + '` supplied to `' + componentNameSafe + '`, expected a ' + 'ref to a floating `Button` component. This should not be a DOMElement from `findDOMNode` but instead ' + 'the React ref object.');
      }

      return null;
    },

    /**
     * An optional DOM node to render the Snackbar in. If this is omitted, it will render as the first
     * child in the `body`.
     */
    renderNode: _propTypes2.default.object,

    /**
     * Boolean if the snackbar should render as the last child in the `renderNode` or `body` instead of
     * as the first.
     */
    lastChild: _propTypes2.default.bool,
    dismiss: (0, _deprecated2.default)(_propTypes2.default.func, 'Use `onDismiss` instead')
  };
  SnackbarContainer.defaultProps = {
    autohide: true,
    toasts: [],
    autohideTimeout: 3000,
    transitionName: 'md-snackbar',
    transitionEnterTimeout: 300,
    transitionLeaveTimeout: 300
  };
  SnackbarContainer.contextTypes = {
    renderNode: _propTypes2.default.object
  };
  exports.default = SnackbarContainer;
});