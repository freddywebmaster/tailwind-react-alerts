"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  AlertsContext
} = require("../context/alerts/context");

const {
  useContext
} = require("react");

const {
  ALERT_BORDER_TYPE,
  AlertBorderConfig,
  ALERT_CONTENT_TYPE,
  AlertContentConfig,
  AlertSimpleConfig,
  ALERT_SIMPLE_TYPE
} = require("../context/alerts/constants");

const useAlert = () => {
  const {
    addAlert
  } = useContext(AlertsContext);

  const aBorder = function aBorder() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AlertBorderConfig;
    addAlert(_objectSpread(_objectSpread(_objectSpread({}, AlertBorderConfig), config), {}, {
      type: ALERT_BORDER_TYPE
    }));
  };

  const aContent = function aContent() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AlertContentConfig;
    addAlert(_objectSpread(_objectSpread(_objectSpread({}, AlertContentConfig), config), {}, {
      type: ALERT_CONTENT_TYPE
    }));
  };

  const aSimple = function aSimple() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : AlertSimpleConfig;
    addAlert(_objectSpread(_objectSpread(_objectSpread({}, AlertSimpleConfig), config), {}, {
      type: ALERT_SIMPLE_TYPE
    }));
  };

  return {
    aBorder,
    aContent,
    aSimple
  };
};

module.exports = useAlert;