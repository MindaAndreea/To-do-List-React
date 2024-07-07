import React from 'react';
import "./Input.css";
import Button from '../Button/Button';

const Input = () => {
  return (
    <div className="input">
        <input type="text" placeholder='What is the task today?' />
        <Button />
    </div>
  )
}

export default Input;