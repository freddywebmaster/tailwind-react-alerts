"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("../../context/alerts/context");

var _constants = require("../../context/alerts/constants");

var _AlertBorder = _interopRequireDefault(require("../alerts/AlertBorder"));

var _AlertContent = _interopRequireDefault(require("../alerts/AlertContent"));

var _AlertSimple = _interopRequireDefault(require("../alerts/AlertSimple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AlertsContainer = () => {
  const {
    alerts
  } = (0, _react.useContext)(_context.AlertsContext);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute top-0 w-full overflow-hidden"
  }, alerts.length !== 0 && alerts.map(alert => {
    switch (alert.type) {
      case _constants.ALERT_BORDER_TYPE:
        return /*#__PURE__*/_react.default.createElement(_AlertBorder.default, {
          data: alert,
          key: alert.id
        });

      case _constants.ALERT_CONTENT_TYPE:
        return /*#__PURE__*/_react.default.createElement(_AlertContent.default, {
          data: alert,
          key: alert.id
        });

      case _constants.ALERT_SIMPLE_TYPE:
        return /*#__PURE__*/_react.default.createElement(_AlertSimple.default, {
          data: alert,
          key: alert.id
        });

      default:
        break;
    }
  }));
};

var _default = AlertsContainer;
exports.default = _default;