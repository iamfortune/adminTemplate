import React, { useState } from 'react';
import './components.css';
import PollsInput from './input';

function PollButtonCard() {
  let [colorVal, setColorVal] = useState('#ffffff');

  const setColor = (event) => {
    setColorVal(event.target.value);
  };

  return (
    <React.Fragment>
      <div className='pollCard mt-big'>
        <PollsInput
          label={'Button Text'}
          type={'text'}
          placeholder={''}
          required={'false'}
        />

        <div className='row space-between col-12 mt'>
          <p className='tracking col-6'>Tracking Code:</p>
          <div className='bg-pollButton row col-6'>
            <label htmlFor='pollBg'> Background Color:</label>
            <input
              type='color'
              name=''
              onChange={setColor}
              id='pollBg'
              value={colorVal}
            />
            <span className='colorVal'>{colorVal}</span>
          </div>
        </div>
        <div className='row space-between'>
          <div className='col-6'>
            <div>
              <label htmlFor='header'>Header</label>
              <textarea
                name='header'
                id='header'
                cols='30'
                rows='10'
                className='col-12'
              ></textarea>
            </div>
          </div>

          <div className='col-6'>
            <div>
              <label htmlFor='footer'>Footer</label>
              <textarea
                className='footer'
                name='footer'
                id='footer'
                cols='30'
                rows='10'
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PollButtonCard;
