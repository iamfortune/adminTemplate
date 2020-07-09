import React from 'react';
import './button.css';

function ButtonWhite(props) {
  return (
    <div>
      <button type={props.type} onClick={props.onClick} form={props.form}>
        {props.label}
      </button>
    </div>
  );
}

export default ButtonWhite;
