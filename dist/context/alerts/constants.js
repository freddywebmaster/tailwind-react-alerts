"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icons = exports.AlertSimpleConfig = exports.AlertContentConfig = exports.AlertBorderConfig = exports.ALERT_SIMPLE_TYPE = exports.ALERT_CONTENT_TYPE = exports.ALERT_BORDER_TYPE = void 0;
const icons = {
  info: "fa-solid fa-circle-info",
  exclamation: "fa-solid fa-circle-exclamation",
  error: "fa-solid fa-circle-xmark",
  warning: "fa-solid fa-triangle-exclamation",
  question: "fa-solid fa-circle-question",
  success: "fa-solid fa-circle-check"
};
/* ALERT BORDER CONSTANTS */

exports.icons = icons;
const ALERT_BORDER_TYPE = "border";
exports.ALERT_BORDER_TYPE = ALERT_BORDER_TYPE;
const AlertBorderConfig = {
  color: "blue",
  icon: "info",
  autoClose: 4000,
  text: "This is a default text of alert :)",
  animate: "animate__fadeInRight",
  animateOut: "animate__fadeOut"
};
/*ALERT CONTENT CONSTANTS */

exports.AlertBorderConfig = AlertBorderConfig;
const ALERT_CONTENT_TYPE = "content";
exports.ALERT_CONTENT_TYPE = ALERT_CONTENT_TYPE;
const AlertContentConfig = {
  color: "blue",
  icon: "info",
  autoClose: 0,
  title: "This is a default title of alert",
  text: "This is a default text of alert :)",
  animate: "animate__flipInX",
  animateOut: "animate__fadeOut",
  textBtn: "View more",
  textBtnDismiss: "Dismiss",
  iconBtn: "fa-solid fa-eye",
  onClickBtn: () => console.log("clicked")
};
/* ALERT SIMPLE CONSTANTS */

exports.AlertContentConfig = AlertContentConfig;
const ALERT_SIMPLE_TYPE = "ALERT_SIMPLE_TYPE";
exports.ALERT_SIMPLE_TYPE = ALERT_SIMPLE_TYPE;
const AlertSimpleConfig = {
  color: "blue",
  autoClose: 0,
  text: "Info! Change a few things up and try submitting again.",
  animate: "animate__fadeInRight",
  animateOut: "animate__fadeOut",
  icon: "info",
  showIcon: true,
  showBtnDismiss: true
};
exports.AlertSimpleConfig = AlertSimpleConfig;