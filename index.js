const { default: useAlert } = require("./dist/hooks/useAlert");

const { default: AlertProvider } = require("./dist/context/alerts/state");

module.exports = {
  useAlert,
  AlertProvider,
};
