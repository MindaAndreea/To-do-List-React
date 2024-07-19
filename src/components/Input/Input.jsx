import React, { useState } from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTask = () => {};
  return (
    <div className="input">
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleInputValue}
      />
      <Button textBtn={props.textBtn} clickFunction={props.addTodo} />
    </div>
  );
};

export default Input;
