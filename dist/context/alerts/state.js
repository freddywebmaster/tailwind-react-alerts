"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  AlertsContext
} = require("./context");

const {
  useReducer
} = require("react");

const AlertsReducer = require("./reducer");

const {
  ADD_ALERT,
  REMOVE_ALERT
} = require("./types");

const {
  nanoid
} = require("nanoid");

const AlertsContainer = require("../../components/layout/AlertsContainer");

const AlertsProvider = props => {
  const initialState = {
    alerts: []
  };
  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  async function addAlert(configs) {
    const idAlert = await nanoid(10);
    dispatch({
      type: ADD_ALERT,
      payload: _objectSpread({
        id: idAlert
      }, configs)
    });
  }

  function removeAlert(idAlert) {
    console.log("Eliminando alerta con id: ".concat(idAlert));
    dispatch({
      type: REMOVE_ALERT,
      payload: idAlert
    });
  }

  return /*#__PURE__*/_react.default.createElement(AlertsContext.Provider, {
    value: {
      alerts: state.alerts,
      addAlert,
      removeAlert
    }
  }, /*#__PURE__*/_react.default.createElement(AlertsContainer, null), props.children);
};

module.exports = AlertsProvider;