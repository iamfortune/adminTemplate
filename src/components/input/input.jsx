import React from 'react';
import mark from '../../assets/done.svg';
import './input.css';

function Input(props) {
  return (
    <div className='input'>
      <div className='input__icon'>
        <img style={{width: 25}} src={props.icon} alt='' />
      </div>
      <div className='input__tag'>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          minLength='1'
          name={props.id}
          id={props.id}
          required
        />

        <div className='mark'>
          <img src={mark} width='35px' alt='' />
        </div>
      </div>
    </div>
  );
}

export default Input;
