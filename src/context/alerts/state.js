import { AlertsContext } from "./context";
import React, { useReducer } from "react";
import AlertsReducer from "./reducer";
import { ADD_ALERT, REMOVE_ALERT } from "./types";
import { nanoid } from "nanoid";
import AlertsContainer from "../../components/layout/AlertsContainer";
import '../../index.css';

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
export default AlertsProvider;