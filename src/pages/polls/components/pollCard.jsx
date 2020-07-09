import React, { useState } from 'react';
import './components.css';
import PollsInput from './input';
import Pollcardslot from './pollcardslot';
import ButtonWhite from '../../../components/button/button';
import ButtonColored from '../../../components/button/buttonColored';

export default function PollCard() {
  let [slotArr, setSort] = useState(['hi']);
  const handleClick = () => {
    setSort(() => {
      return [...slotArr, 'hi'];
    });
    console.log(slotArr);
  };

  return (
    <React.Fragment>
      <div className='pollCard mt-big'>
        <PollsInput
          label={'Poll Question*'}
          type={'text'}
          placeholder={'Poll question'}
          required={'true'}
        />

        <div id='slot'>
          {slotArr.map((item, index) => (
            <Pollcardslot num={index + 1} />
          ))}
        </div>
      </div>

      <div className='pollCardButton row'>
        <ButtonWhite onClick={handleClick} label={'Add More +'} />
        <div className='ml'>
          <a href="/polls-stage2">
          <ButtonColored label={'Next'} />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
