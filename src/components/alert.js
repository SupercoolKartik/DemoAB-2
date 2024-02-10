import React from "react";

const Alert = (props) => {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div className="fixed-top" style={{ top: "72px" }}>
      {props.alert && (
        <div className={`alert alert-${props.alert.type} `} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>:
          {" " + props.alert.message}
        </div>
      )}
    </div>
  );
};

export default Alert;
