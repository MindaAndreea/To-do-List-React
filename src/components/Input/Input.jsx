import React from 'react';
import "./Input.css";
import Button from '../Button/Button';

const Input = (props) => {
  return (
    <div className="input">
        <input type="text" placeholder={props.placeholderText} />
        <Button textBtn={props.textBtn}/>
    </div>
  )
}

export default Input;