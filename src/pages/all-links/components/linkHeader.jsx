import React from 'react';
import ButtonColored from '../../../components/button/buttonColored';
import './components.css';

export default function LinkHeader() {
  return (
    <div>
      <div className='row linkHeader space-between mt-big'>
        <p>All Links</p>
        <div className='linkHeadBtn row'>
          <ButtonColored label={'Create New +'} />
          <div className='second linkHeadBtn ml'>
            <ButtonColored label={'Export Links'} />
          </div>
        </div>
      </div>
    </div>
  );
}
