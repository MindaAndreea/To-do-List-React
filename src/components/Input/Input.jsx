import React, { useState } from "react";
import "./Input.css";
import Button from "../Button/Button";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim()) {
      props.addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleInputValue}
        onKeyDown={handleKeyDown}
      />
      <Button textBtn={props.textBtn} clickFunction={handleAddTask} />
    </div>
  );
};

export default Input;
