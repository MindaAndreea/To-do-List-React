import React, { useState, useEffect } from "react";
import "./EditInput.css";
import Button from "../Button/Button";

const EditInput = (props) => {
  const [inputValue, setInputValue] = useState(props.taskDescription);
  const [buttonText, setButtonText] = useState("Edit task");

  useEffect(() => {
    if (inputValue !== props.taskDescription) {
      setButtonText("Save task");
    } else {
      setButtonText("Edit task");
    }
  }, [inputValue, props.taskDescription]);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditTask = () => {
    props.editTodo(inputValue, props.id);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleEditTask();
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
      <Button textBtn={buttonText} clickFunction={handleEditTask} />
    </div>
  );
};

export default EditInput;
