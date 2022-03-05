import { icons } from "../../context/alerts/constants";
import React, { useContext, useRef, useEffect } from "react";
import { AlertsContext } from "../../context/alerts/context";
import { alertContentTheme as colors } from "../../context/alerts/themes";

const AlertContent = ({ data }) => {
  const { removeAlert } = useContext(AlertsContext);

  const AlertRef = useRef();

  const deleteThisAlert = () => {
    AlertRef.current.classList.add("animate__animated");
    AlertRef.current.classList.add(data.animateOut);
    setTimeout(() => {
      removeAlert(data.id);
    }, 1000);
  };

  useEffect(() => {
    if (data.autoClose <= 0) return;
    const intervalo = setInterval(() => {
      console.log("paso el tiempo");
      deleteThisAlert();
      clearInterval(intervalo);
    }, data.autoClose);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div ref={AlertRef}>
      <div
        className={`p-4 mb-4 animate__animated ${data.animate} ${
          colors[data.color].bg[1]
        } rounded-lg`}
      >
        <div className="flex items-center">
          <i className={`${icons[data.icon]} mr-2 w-5 h-5 ${colors[data.color].text[0]}`}></i>

          <h3 className={`text-lg font-medium ${colors[data.color].text[0]}`}>
            {data.title || "This is a info alert"}
          </h3>
        </div>
        <div className={`mt-2 mb-4 text-sm ${colors[data.color].text[0]}`}>
          {data.text || "Texto de prueba"}
        </div>
        <div className="flex">
          <button
            onClick={data.onClickBtn}
            type="button"
            className={`${colors[data.color].text[1]} ${
              colors[data.color].bg[0]
            } ${colors[data.color].hover[0]} focus:ring-4 ${
              colors[data.color].ring[0]
            } font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center`}
          >
            <i className={`${data.iconBtn} -ml-0.5 mr-2 h-4 w-4 mt-1`}></i>

            {data.textBtn || "View more"}
          </button>
          <button
            onClick={deleteThisAlert}
            type="button"
            className={`${colors[data.color].text[0]} bg-transparent border ${
              colors[data.color].border[0]
            } ${colors[data.color].hover[0]} ${
              colors[data.color].hover[1]
            } focus:ring-4 ${
              colors[data.color].ring[0]
            } font-medium rounded-lg text-xs px-3 py-1.5 text-center`}
          >
            {data.textBtnDismiss || "Dismiss"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertContent;