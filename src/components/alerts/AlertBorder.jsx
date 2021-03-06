const { useEffect, useContext, useRef } = require("react");
const { AlertsContext } = require("../../context/alerts/context");
const { icons } = require('../../context/alerts/constants');
const { alertBorderTheme : colors } = require('../../context/alerts/themes');
import React from 'react';
const AlertBorder = ({ data }) => {
  const AlertRef = useRef();

  const { removeAlert } = useContext(AlertsContext);

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
      <div className={`animate__animated ${data.animate}`}>
        <div
          style={{ animationDuration: `${data.autoClose / 1000}s` }}
          className={`anim-bar border-t-4 ${
            colors[data.color].border[0]
          } ${colors[data.color].bg[0]}`}
        ></div>
      </div>
      <div
        className={`flex p-4 mb-4 ${
          colors[data.color].bg[0]
        } animate__animated ${data.animate}`}
      >
        <i
          className={`${icons[data.icon]} flex-shrink-0 w-5 h-5 ${
            colors[data.color].text[1]
          }`}
        ></i>

        <div
          className={`ml-3 text-sm font-medium ${colors[data.color].text[1]}`}
        >
          {data.text || "no text on alert"}
        </div>
        <button
          type="button"
          onClick={() => deleteThisAlert()}
          className={`ml-auto -mx-1.5 -my-1.5 ${colors[data.color].bg[0]} ${
            colors[data.color].text[0]
          } rounded-lg focus:ring-2 ${colors[data.color].ring[0]} p-1.5 ${
            colors[data.color].bg[2]
          } inline-flex h-8 w-8`}
        >
          <span className="sr-only">Dismiss</span>
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

module.exports = AlertBorder;