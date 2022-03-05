"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _context = require("../context/alerts/context");

var _react = require("react");

var _constants = require("../context/alerts/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const useAlert = () => {
  const {
    addAlert
  } = (0, _react.useContext)(_context.AlertsContext);

  const aBorder = function aBorder() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.AlertBorderConfig;
    addAlert(_objectSpread(_objectSpread(_objectSpread({}, _constants.AlertBorderConfig), config), {}, {
      type: _constants.ALERT_BORDER_TYPE
    }));
  };

  const aContent = function aContent() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.AlertContentConfig;
    addAlert(_objectSpread(_objectSpread(_objectSpread({}, _constants.AlertContentConfig), config), {}, {
      type: _constants.ALERT_CONTENT_TYPE
    }));
  };

  const aSimple = function aSimple() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.AlertSimpleConfig;
    addAlert(_objectSpread(_objectSpread(_objectSpread({}, _constants.AlertSimpleConfig), config), {}, {
      type: _constants.ALERT_SIMPLE_TYPE
    }));
  };

  return {
    aBorder,
    aContent,
    aSimple
  };
};

var _default = useAlert;
exports.default = _default;