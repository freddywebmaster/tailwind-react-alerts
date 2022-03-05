"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _context = require("./context");

var _react = _interopRequireWildcard(require("react"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _types = require("./types");

var _nanoid = require("nanoid");

var _AlertsContainer = _interopRequireDefault(require("../../components/layout/AlertsContainer"));

require("../../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const AlertsProvider = props => {
  const initialState = {
    alerts: []
  };
  const [state, dispatch] = (0, _react.useReducer)(_reducer.default, initialState);

  async function addAlert(configs) {
    const idAlert = await (0, _nanoid.nanoid)(10);
    dispatch({
      type: _types.ADD_ALERT,
      payload: _objectSpread({
        id: idAlert
      }, configs)
    });
  }

  function removeAlert(idAlert) {
    console.log("Eliminando alerta con id: ".concat(idAlert));
    dispatch({
      type: _types.REMOVE_ALERT,
      payload: idAlert
    });
  }

  return /*#__PURE__*/_react.default.createElement(_context.AlertsContext.Provider, {
    value: {
      alerts: state.alerts,
      addAlert,
      removeAlert
    }
  }, /*#__PURE__*/_react.default.createElement(_AlertsContainer.default, null), props.children);
};

var _default = AlertsProvider;
exports.default = _default;