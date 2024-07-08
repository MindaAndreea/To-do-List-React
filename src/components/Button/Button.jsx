import React from 'react';
import "./Button.css";

const Button = (props) => {
  return (
      <button className='button'>{props.textBtn}</button>
  )
}

export default Button;