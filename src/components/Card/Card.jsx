import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
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

  const editTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.taskId === id ? { ...todo, edit: !todo.edit } : todo
      )
    );
    console.log(todos);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.taskId !== id));
  };

  return (
    <div className="card">
      <h1 className="card-title">Get Things Done</h1>
      <Input
        placeholderText="What is the task today?"
        textBtn="Add task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) =>
        todo.edit ? (
          <Input
            placeholderText="What is the task today?"
            textBtn="Add task"
            addTodo={addTodo}
          />
        ) : (
          <ToDo
            taskText={todo.taskDescription}
            key={index}
            id={todo.taskId}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        )
      )}
    </div>
  );
};

export default Card;
