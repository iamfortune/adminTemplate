import React from 'react';
import './components.css';

function PollsInput(props) {
  return (
    <div className='col-12'>
      <label>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        className='pollsInput'
      />
    </div>
  );
}

export default PollsInput;
