import React, { useState } from "react";
import "./Card.css";
import Input from "../Input/Input";
import ToDo from "../ToDo/ToDo";

const Card = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="card">
      <h1 className="card-title">Get Things Done</h1>
      <Input
        placeholderText="What is the task today?"
        textBtn="Add task"
        addTodo={addTodo}
      />
      {todos.map((todo, index) => (
        <ToDo taskText={todo} key={index} />
      ))}
    </div>
  );
};

export default Card;
