import React from 'react';
import ButtonColored from '../../../components/button/buttonColored';
import './components.css'

export default function TopHeader() {
  return (
    <div className='row space-between topHeader mt-big'>
      <p>All Polls</p>

      <a href="/polls-stage1">
      <ButtonColored label={'create poll +'} />
      </a>
    </div>
  );
}
