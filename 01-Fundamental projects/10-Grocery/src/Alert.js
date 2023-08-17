import React from "react";

const Alert = ({ type, msg }) => {
  return <p className={`alert-${type} alert`}>{msg}</p>;
};

export default Alert;
