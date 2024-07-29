import React from "react";
import "./ToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const ToDo = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            onClick={handleClickOpen}
          />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this task?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={() => {
              props.deleteTask(props.id);
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ToDo;
