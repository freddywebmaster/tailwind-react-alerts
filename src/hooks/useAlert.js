import { AlertsContext } from "../context/alerts/context";
import { useContext } from "react";
import {
  ALERT_BORDER_TYPE,
  AlertBorderConfig,
  ALERT_CONTENT_TYPE,
  AlertContentConfig,
  AlertSimpleConfig,
  ALERT_SIMPLE_TYPE,
} from "../context/alerts/constants";

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
export default useAlert;