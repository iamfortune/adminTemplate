import React from 'react';
import './check.css'
function Checkbox(props) {
  return (
    <div className='checkbox'>
      <input type='checkbox' name={props.id} id={props.id} />
      <label htmlFor={props.id}></label> <span>{props.label}</span>
    </div>
  );
}

export default Checkbox;
