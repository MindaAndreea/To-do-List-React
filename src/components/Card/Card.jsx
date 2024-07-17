import React from 'react';
import "./Card.css";
import Input from '../Input/Input';
import ToDo from '../ToDo/ToDo';

const Card = () => {
  return (
    <div className='card'>
        <h1 className='card-title'>Get Things Done</h1>
        <Input placeholderText = "What is the task today?" textBtn="Add task"/>
        <ToDo taskText="task 1"/>
        <ToDo taskText="task 2"/>
        <ToDo taskText="task 3"/>
    </div>
  )
}

export default Card;
