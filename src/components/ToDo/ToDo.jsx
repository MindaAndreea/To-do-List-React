import React from "react";
import "./ToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ToDo = (props) => {
  return (
    <div className="todo">
      <div className="task">{props.taskText}</div>
      <div className="icons">
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="editIcon"
            onClick={() => {
              props.editTask(props.id);
            }}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="deleteIcon"
            onClick={() => {
              props.deleteTask(props.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDo;
