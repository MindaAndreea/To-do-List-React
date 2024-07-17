import React from 'react';
import './ToDo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ToDo = (props) => {
  return (
    <div className='todo'>
      <div>{props.taskText}</div>
      <div className='icons'>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} className='editIcon'/>
          <FontAwesomeIcon icon={faTrash} className='deleteIcon'/>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
