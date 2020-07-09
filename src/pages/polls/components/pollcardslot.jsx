import React from 'react';
import PollsInput from './input';

export default function Pollcardslot(props) {
  return (
    <div className='pollcardslot'>
      <div className='row space-between col-12'>
        <div className='col-4'>
          <PollsInput
            label={'Option ' + props.num + '*'}
            type={'text'}
            placeholder={'option '+ props.num}
            required={'true'}
          />
        </div>
        <div className='col-4'>
          <PollsInput
            label={'URL'}
            type={'url'}
            placeholder={'URL'}
            required={'false'}
          />
        </div>

        <div className='col-4'>
          <PollsInput
            label={'Display Image:'}
            type={'file'}
            placeholder={'No File Chosen'}
            required={'false'}
          />
        </div>
      </div>
    </div>
  );
}
