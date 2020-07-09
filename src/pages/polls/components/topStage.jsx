import React from 'react';
import './components.css';

export default function PollTopStage() {
  return (
    <div className='topStage mt-big'>
      <div className='first-one row'>
        <p className='num'>1</p>

        <p className='text'>POLL QUESTION</p>

        <span className='line'></span>
      </div>

      <div className='second-one row'>
        <p className='num'>2</p>

        <p className='text'>BUTTON SETTINGS</p>
      </div>
    </div>
  );
}
