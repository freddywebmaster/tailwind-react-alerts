const { AlertsContext } = require("../context/alerts/context");
const { useContext } = require("react");
const {
  ALERT_BORDER_TYPE,
  AlertBorderConfig,
  ALERT_CONTENT_TYPE,
  AlertContentConfig,
  AlertSimpleConfig,
  ALERT_SIMPLE_TYPE,
} = require("../context/alerts/constants");

const useAlert = () => {
  const { addAlert } = useContext(AlertsContext);

  const aBorder = (config = AlertBorderConfig) => {
    addAlert({ ...AlertBorderConfig, ...config, type: ALERT_BORDER_TYPE });
  };

  const aContent = (config = AlertContentConfig) => {
    addAlert({
      ...AlertContentConfig,
      ...config,
      type: ALERT_CONTENT_TYPE,
    });
  };

  const aSimple = (config = AlertSimpleConfig) => {
    addAlert({
      ...AlertSimpleConfig,
      ...config,
      type: ALERT_SIMPLE_TYPE,
    });
  };

  return {
    aBorder,
    aContent,
    aSimple,
  };
};

module.exports = useAlert;