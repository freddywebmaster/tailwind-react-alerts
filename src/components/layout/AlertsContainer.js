import React, { useContext } from "react";
import { AlertsContext } from "../../context/alerts/context";
import {
  ALERT_BORDER_TYPE,
  ALERT_CONTENT_TYPE,
  ALERT_SIMPLE_TYPE
} from "../../context/alerts/constants";
import AlertBorder from "../alerts/AlertBorder";
import AlertContent from "../alerts/AlertContent";
import AlertSimple from "../alerts/AlertSimple";

const AlertsContainer = () => {
  const { alerts } = useContext(AlertsContext);

  return (
    <div className="absolute top-0 w-full overflow-hidden">
      {alerts.length !== 0 &&
        alerts.map((alert) => {
          switch (alert.type) {
            case ALERT_BORDER_TYPE:
              return <AlertBorder data={alert} key={alert.id} />;
            case ALERT_CONTENT_TYPE:
              return <AlertContent data={alert} key={alert.id} />;
            case ALERT_SIMPLE_TYPE:
              return <AlertSimple data={alert} key={alert.id} />;
            default:
              break;
          }
        })}
    </div>
  );
};

export default AlertsContainer;
