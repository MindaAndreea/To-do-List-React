import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.clickFunction}>
      {props.textBtn}
    </button>
  );
};

export default Button;
