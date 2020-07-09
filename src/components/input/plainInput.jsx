import React from 'react';
import './input.css';

function PlainInput(props) {
  return (
    <div className='plainInput'>
      <input type={props.type} placeholder={props.placeholder}  />
    </div>
  );
}

export default PlainInput;
