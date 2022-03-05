"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../context/alerts/constants");

var _react = _interopRequireWildcard(require("react"));

var _context = require("../../context/alerts/context");

var _themes = require("../../context/alerts/themes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AlertContent = _ref => {
  let {
    data
  } = _ref;
  const {
    removeAlert
  } = (0, _react.useContext)(_context.AlertsContext);
  const AlertRef = (0, _react.useRef)();

  const deleteThisAlert = () => {
    AlertRef.current.classList.add("animate__animated");
    AlertRef.current.classList.add(data.animateOut);
    setTimeout(() => {
      removeAlert(data.id);
    }, 1000);
  };

  (0, _react.useEffect)(() => {
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
    className: "p-4 mb-4 animate__animated ".concat(data.animate, " ").concat(_themes.alertContentTheme[data.color].bg[1], " rounded-lg")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(_constants.icons[data.icon], " mr-2 w-5 h-5 ").concat(_themes.alertContentTheme[data.color].text[0])
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-lg font-medium ".concat(_themes.alertContentTheme[data.color].text[0])
  }, data.title || "This is a info alert")), /*#__PURE__*/_react.default.createElement("div", {
    className: "mt-2 mb-4 text-sm ".concat(_themes.alertContentTheme[data.color].text[0])
  }, data.text || "Texto de prueba"), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: data.onClickBtn,
    type: "button",
    className: "".concat(_themes.alertContentTheme[data.color].text[1], " ").concat(_themes.alertContentTheme[data.color].bg[0], " ").concat(_themes.alertContentTheme[data.color].hover[0], " focus:ring-4 ").concat(_themes.alertContentTheme[data.color].ring[0], " font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center")
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(data.iconBtn, " -ml-0.5 mr-2 h-4 w-4 mt-1")
  }), data.textBtn || "View more"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: deleteThisAlert,
    type: "button",
    className: "".concat(_themes.alertContentTheme[data.color].text[0], " bg-transparent border ").concat(_themes.alertContentTheme[data.color].border[0], " ").concat(_themes.alertContentTheme[data.color].hover[0], " ").concat(_themes.alertContentTheme[data.color].hover[1], " focus:ring-4 ").concat(_themes.alertContentTheme[data.color].ring[0], " font-medium rounded-lg text-xs px-3 py-1.5 text-center")
  }, data.textBtnDismiss || "Dismiss"))));
};

var _default = AlertContent;
exports.default = _default;