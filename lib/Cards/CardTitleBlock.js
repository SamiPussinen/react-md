(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.classnames);
    global.CardTitleBlock = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

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

  var CardTitleBlock = function (_PureComponent) {
    _inherits(CardTitleBlock, _PureComponent);

    function CardTitleBlock() {
      _classCallCheck(this, CardTitleBlock);

      return _possibleConstructorReturn(this, (CardTitleBlock.__proto__ || Object.getPrototypeOf(CardTitleBlock)).apply(this, arguments));
    }

    _createClass(CardTitleBlock, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            id = _props.id,
            subtitle = _props.subtitle,
            avatar = _props.avatar;
        var title = this.props.title;

        title = _react2.default.createElement(
          'h2',
          {
            id: id,
            className: (0, _classnames2.default)('md-card-title--title md-text', {
              'md-card-title--large': !avatar
            })
          },
          title
        );

        if (!subtitle) {
          return title;
        }

        return _react2.default.createElement(
          'div',
          { className: 'md-card-title--title-block' },
          title,
          _react2.default.createElement(
            'h3',
            { className: 'md-card-title--title md-text--secondary' },
            subtitle
          )
        );
      }
    }]);

    return CardTitleBlock;
  }(_react.PureComponent);

  CardTitleBlock.propTypes = {
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    title: _propTypes2.default.node.isRequired,
    subtitle: _propTypes2.default.node,
    avatar: _propTypes2.default.bool
  };
  exports.default = CardTitleBlock;
});