"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../context/alerts/constants");

var _context = require("../../context/alerts/context");

var _themes = require("../../context/alerts/themes");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AlertSimple = _ref => {
  let {
    data
  } = _ref;
  const AlertRef = (0, _react.useRef)();
  const {
    removeAlert
  } = (0, _react.useContext)(_context.AlertsContext);

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
    className: "flex animate__animated ".concat(data.animate, " p-4 mb-4 ").concat(_themes.alertSimpleTheme[data.color].bg[0], " rounded-lg")
  }, data.showIcon && /*#__PURE__*/_react.default.createElement("i", {
    className: "".concat(_constants.icons[data.icon], " flex-shrink-0 w-5 h-5 ").concat(_themes.alertSimpleTheme[data.color].text[0])
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-3 text-sm font-medium ".concat(_themes.alertSimpleTheme[data.color].text[0])
  }, data.text || "text of alert"), data.showBtnDismiss && /*#__PURE__*/_react.default.createElement("button", {
    onClick: deleteThisAlert,
    type: "button",
    className: "ml-auto -mx-1.5 -my-1.5 ".concat(_themes.alertSimpleTheme[data.color].bg[0], " ").concat(_themes.alertSimpleTheme[data.color].text[1], " rounded-lg focus:ring-2 ").concat(_themes.alertSimpleTheme[data.color].focus[0], " p-1.5 ").concat(_themes.alertSimpleTheme[data.color].hover[0], " inline-flex h-8 w-8")
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

var _default = AlertSimple;
exports.default = _default;