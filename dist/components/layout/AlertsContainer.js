"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  useContext
} = require("react");

const {
  AlertsContext
} = require("../../context/alerts/context");

const {
  ALERT_BORDER_TYPE,
  ALERT_CONTENT_TYPE,
  ALERT_SIMPLE_TYPE
} = require("../../context/alerts/constants");

const AlertBorder = require("../alerts/AlertBorder");

const AlertContent = require("../alerts/AlertContent");

const AlertSimple = require("../alerts/AlertSimple");

const AlertsContainer = () => {
  const {
    alerts
  } = useContext(AlertsContext);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute top-0 w-full overflow-hidden"
  }, alerts.length !== 0 && alerts.map(alert => {
    switch (alert.type) {
      case ALERT_BORDER_TYPE:
        return /*#__PURE__*/_react.default.createElement(AlertBorder, {
          data: alert,
          key: alert.id
        });

      case ALERT_CONTENT_TYPE:
        return /*#__PURE__*/_react.default.createElement(AlertContent, {
          data: alert,
          key: alert.id
        });

      case ALERT_SIMPLE_TYPE:
        return /*#__PURE__*/_react.default.createElement(AlertSimple, {
          data: alert,
          key: alert.id
        });

      default:
        break;
    }
  }));
};

module.exports = AlertsContainer;