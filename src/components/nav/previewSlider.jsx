import React from 'react';
import './nav.css';

export default function PreviewSlider() {
  return (
    <div className='previewSlider max-content'>
      <div className='previewFlex'>
        View
        <a href='/campaign-stage3' className='dark'>Save</a>
        <a href='/campaign-stage2'>Back</a>
      </div>
    </div>
  );
}
