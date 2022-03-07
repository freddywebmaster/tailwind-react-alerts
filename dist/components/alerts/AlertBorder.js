"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  useEffect,
  useContext,
  useRef
} = require("react");

const {
  AlertsContext
} = require("../../context/alerts/context");

const {
  icons
} = require('../../context/alerts/constants');

const {
  alertBorderTheme: colors
} = require('../../context/alerts/themes');

const AlertBorder = _ref => {
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
    className: "animate__animated ".concat(data.animate)
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      animationDuration: "".concat(data.autoClose / 1000, "s")
    },
    className: "anim-bar border-t-4 ".concat(colors[data.color].border[0], " ").concat(colors[data.color].bg[0])
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex p-4 mb-4 ".concat(colors[data.color].bg[0], " animate__animated ").concat(data.animate)
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(icons[data.icon], " flex-shrink-0 w-5 h-5 ").concat(colors[data.color].text[1])
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-3 text-sm font-medium ".concat(colors[data.color].text[1])
  }, data.text || "no text on alert"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: () => deleteThisAlert(),
    className: "ml-auto -mx-1.5 -my-1.5 ".concat(colors[data.color].bg[0], " ").concat(colors[data.color].text[0], " rounded-lg focus:ring-2 ").concat(colors[data.color].ring[0], " p-1.5 ").concat(colors[data.color].bg[2], " inline-flex h-8 w-8")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Dismiss"), /*#__PURE__*/_react.default.createElement("svg", {
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

module.exports = AlertBorder;