const { useContext } = require("react");
const { AlertsContext } = require("../../context/alerts/context");
const {
  ALERT_BORDER_TYPE,
  ALERT_CONTENT_TYPE,
  ALERT_SIMPLE_TYPE
} = require("../../context/alerts/constants");
const AlertBorder = require("../alerts/AlertBorder");
const AlertContent = require("../alerts/AlertContent");
const AlertSimple = require("../alerts/AlertSimple");
import React from 'react';
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

module.exports = AlertsContainer