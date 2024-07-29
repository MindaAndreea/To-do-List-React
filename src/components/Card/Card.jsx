import React, { useState, useEffect } from "react";
import "./Card.css";
import Input from "../Input/Input";
import EditInput from "../EditInput/EditInput";
import ToDo from "../ToDo/ToDo";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { taskId: uuidv4(), taskDescription: todo, edit: false },
    ]);
  };

  const editTaskMode = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.taskId === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.taskId !== id));
  };

  const editTask = (taskDesc, id) => {
    setTodos(
      todos.map((todo) =>
        todo.taskId === id
          ? { ...todo, taskDescription: taskDesc, edit: !todo.edit }
          : todo
      )
    );
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="card">
      <h1 className="card-title">Get Things Done</h1>
      <Input
        placeholderText="What is the task today?"
        textBtn="Add task"
        addTodo={addTodo}
      />
      {todos.map((todo) =>
        todo.edit ? (
          <EditInput
            key={todo.taskId}
            id={todo.taskId}
            placeholderText="Edit your task"
            textBtn="Edit task"
            editTodo={editTask}
            taskDescription={todo.taskDescription}
          />
        ) : (
          <ToDo
            taskText={todo.taskDescription}
            key={todo.taskId}
            id={todo.taskId}
            editTask={editTaskMode}
            deleteTask={deleteTask}
          />
        )
      )}
    </div>
  );
};

export default Card;
