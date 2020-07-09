import React from 'react';
import './components.css';
import search from './../../../assets/social/search.svg';

export default function LeadsHeader() {
  return (
    <div className='leadsHeader col-12 m'>
      <div className='row space-between col-12'>
        <div className='col-4'>
          <p>All Leads</p>
          <p>You can choose to export your leads</p>
        </div>

        <div className='row col-6'>
          <div className='row leadsSlider col-5'>
            <div>Tags</div>
            <div> Export CSV</div>
          </div>

          <div className='ml leadsSearch col-8'>
            <div className='searchTop row relative col-12'>
              <input
                type='text'
                name='search'
                placeholder='Find lead '
                id='search'
              />
              <img src={search} alt='search icon' className='absolute' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
