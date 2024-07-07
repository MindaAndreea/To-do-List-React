import React from 'react';
import "./Card.css";
import Input from '../Input/Input';
import Task from '../Task/Task';

const Card = () => {
  return (
    <div className='card'>
        <h1>Get Things Done!</h1>
        <Input />
        <Task />
    </div>
  )
}

export default Card;
