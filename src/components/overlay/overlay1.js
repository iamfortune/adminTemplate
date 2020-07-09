import React from 'react';
import './overlay.css';
import OverlayButton from './overlayButton';
// import '../../../node_modules/fontawesome/index';

function Overlay1(props) {


  const submitOv1 = (e)=>{
    e.preventDefault()
    window.location.href = '/campaign-stage2'
  }

  return (
    <div className='overlay'>
      <div className='layer'>
        <OverlayButton close={props.closeOverlay} />
        <div className='inner'>
          <div className='comp'>
            <p className='over-head'>Name your Campaign</p>
            <form actions='/campaign-stage2' onSubmit={submitOv1} className='search'>
              <input id='search' type='text' label='' required />

              <button type='submit' className='create'>
                Create
              </button>
            </form>
            <div className='cont'>
              <p className='caution'>CLICK TO WATCH A QUICK DEMO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overlay1;
