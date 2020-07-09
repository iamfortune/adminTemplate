import React from 'react';
import './components.css';

function TopSect() {
  return (
    <div className='row topSect'>
      <div className='first-one row'>
        <p className='num'>1</p>

        <p className='text'>PICK A LEAD MAGNET</p>

        <span className='line'></span>
      </div>

      <div className='second-one row'>
        <p className='num'>2</p>

        <p className='text'>PICK AND EDIT TEMPLATE</p>

        <span className='line'></span>
      </div>

      <div className='third-one row'>
        <p className='num'>3</p>

        <p className='text'>GO VIRAL</p>
      </div>
    </div>
  );
}

export default TopSect;
