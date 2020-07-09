import React from 'react';
import './components.css';
import filter from './../../../assets/social/filter.svg';
import search from './../../../assets/social/search.svg';
import arrow from './../../../assets/social/arrow.svg';

function Filter() {
  return (
    <div className='filter row space-evenly col-12'>
      <div className='select-tag col-3'>
        <select name='slect' id=''>
          <option value='' selected disabled>
            Category
          </option>
          <option value=''>another option</option>
        </select>
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

      <div className='filter-div pointer col-2 row'>
        <img src={filter} alt='filter icon' width='60px' className='filter-icon' />
        <p>Filters</p>
        <img src={arrow} alt='filter icon' className='drop-icon' />
      </div>
    </div>
  );
}

export default Filter;
