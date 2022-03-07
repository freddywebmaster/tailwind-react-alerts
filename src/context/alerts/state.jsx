const { AlertsContext } = require("./context");
const { useReducer } = require("react");
const AlertsReducer = require("./reducer");
const { ADD_ALERT, REMOVE_ALERT } = require("./types");
const { nanoid } = require("nanoid");
const AlertsContainer = require("../../components/layout/AlertsContainer");
import React from 'react';

const AlertsProvider = (props) => {
  const initialState = {
    alerts: [],
  };

  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  async function addAlert(configs) {
    const idAlert = await nanoid(10);

    dispatch({
      type: ADD_ALERT,
      payload: { id: idAlert, ...configs },
    });
  }

  function removeAlert(idAlert) {
    console.log(`Eliminando alerta con id: ${idAlert}`);
    dispatch({
      type: REMOVE_ALERT,
      payload: idAlert,
    });
  }

  return (
    <AlertsContext.Provider
      value={{
        alerts: state.alerts,
        addAlert,
        removeAlert,
      }}
    >
      <AlertsContainer />
      {props.children}
    </AlertsContext.Provider>
  );
};

module.exports = AlertsProvider;