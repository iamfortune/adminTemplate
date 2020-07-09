import React from 'react';
import PlainInput from '../../../components/input/plainInput';
import ButtonColored from '../../../components/button/buttonColored';
import './components.css';

function Shortenlink() {
  return (
    <div className='shorten-link'>
      <div className='link__search'>
        <form action=''>
          <div className='relative row'>
            <div className='link__main--search'>
              <PlainInput
                type={'text'}
                placeholder={'paste a link to shorten it '}
              />
            </div>
            <div className='link__search--button'>
              <ButtonColored label={'Shorten'} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Shortenlink;
