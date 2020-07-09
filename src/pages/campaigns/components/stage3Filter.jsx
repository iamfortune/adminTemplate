import React from 'react';
import './components.css';
import search from './../../../assets/social/search.svg';

function FilterStage3() {
  return (
    <div className='filter row space-evenly col-12'>
      <div className='button col-5'>
        <a href='/new-campaign'>
          <button>Create Campaign+</button>
        </a>
      </div>

      <div className='searchTop row relative col-7'>
        <input
          type='text'
          name='search'
          placeholder='Find lead magnet '
          id='search'
        />
        <img src={search} alt='search icon' className='absolute' />
      </div>
    </div>
  );
}

export default FilterStage3;
