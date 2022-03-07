"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  useEffect,
  useRef,
  useContext
} = require("react");

const {
  icons
} = require("../../context/alerts/constants");

const {
  AlertsContext
} = require("../../context/alerts/context");

const {
  alertSimpleTheme: colors
} = require("../../context/alerts/themes");

const AlertSimple = _ref => {
  let {
    data
  } = _ref;
  const AlertRef = useRef();
  const {
    removeAlert
  } = useContext(AlertsContext);

  const deleteThisAlert = () => {
    AlertRef.current.classList.add("animate__animated");
    AlertRef.current.classList.add(data.animateOut);
    setTimeout(() => {
      removeAlert(data.id);
    }, 1000);
  };

  useEffect(() => {
    if (data.autoClose <= 0) return;
    const intervalo = setInterval(() => {
      console.log("paso el tiempo");
      deleteThisAlert();
      clearInterval(intervalo);
    }, data.autoClose);
    return () => clearInterval(intervalo);
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: AlertRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex animate__animated ".concat(data.animate, " p-4 mb-4 ").concat(colors[data.color].bg[0], " rounded-lg")
  }, data.showIcon && /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(icons[data.icon], " flex-shrink-0 w-5 h-5 ").concat(colors[data.color].text[0])
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-3 text-sm font-medium ".concat(colors[data.color].text[0])
  }, data.text || "text of alert"), data.showBtnDismiss && /*#__PURE__*/_react.default.createElement("button", {
    onClick: deleteThisAlert,
    type: "button",
    className: "ml-auto -mx-1.5 -my-1.5 ".concat(colors[data.color].bg[0], " ").concat(colors[data.color].text[1], " rounded-lg focus:ring-2 ").concat(colors[data.color].focus[0], " p-1.5 ").concat(colors[data.color].hover[0], " inline-flex h-8 w-8")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Close"), /*#__PURE__*/_react.default.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })))));
};

module.exports = AlertSimple;