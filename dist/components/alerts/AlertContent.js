"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  icons
} = require("../../context/alerts/constants");

const {
  useContext,
  useRef,
  useEffect
} = require("react");

const {
  AlertsContext
} = require("../../context/alerts/context");

const {
  alertContentTheme: colors
} = require("../../context/alerts/themes");

const AlertContent = _ref => {
  let {
    data
  } = _ref;
  const {
    removeAlert
  } = useContext(AlertsContext);
  const AlertRef = useRef();

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
    className: "p-4 mb-4 animate__animated ".concat(data.animate, " ").concat(colors[data.color].bg[1], " rounded-lg")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(icons[data.icon], " mr-2 w-5 h-5 ").concat(colors[data.color].text[0])
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-lg font-medium ".concat(colors[data.color].text[0])
  }, data.title || "This is a info alert")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2 mb-4 text-sm ".concat(colors[data.color].text[0])
  }, data.text || "Texto de prueba"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: data.onClickBtn,
    type: "button",
    className: "".concat(colors[data.color].text[1], " ").concat(colors[data.color].bg[0], " ").concat(colors[data.color].hover[0], " focus:ring-4 ").concat(colors[data.color].ring[0], " font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center")
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(data.iconBtn, " -ml-0.5 mr-2 h-4 w-4 mt-1")
  }), data.textBtn || "View more"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: deleteThisAlert,
    type: "button",
    className: "".concat(colors[data.color].text[0], " bg-transparent border ").concat(colors[data.color].border[0], " ").concat(colors[data.color].hover[0], " ").concat(colors[data.color].hover[1], " focus:ring-4 ").concat(colors[data.color].ring[0], " font-medium rounded-lg text-xs px-3 py-1.5 text-center")
  }, data.textBtnDismiss || "Dismiss"))));
};

module.exports = AlertContent;