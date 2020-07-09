import React from 'react';
import './nav.css';
import TopSect from '../../pages/campaigns/components/topSect';
import PreviewSlider from './previewSlider';

function TopNav(props) {
  return (
    <nav className='nav-btn row space-between'>
      {props.preview ? (
        <div className='col-8 preview'>
          <TopSect />
        </div>
      ) : (
        <div className='col-4'>
          <p className='topNav-big'>{props.text}</p>
          <p className='topNav-small'>{props.text2}</p>
        </div>
      )}

      {props.preview ? (
        <div className='col-2'>
          <PreviewSlider />
        </div>
      ) : (
        <div className='sliding-button col-5'>
          <div>
            <div>Agency Access</div>
            <div>Reseller Access</div>
          </div>
        </div>
      )}

      <div className='profile col-3'>
        <div className='pic'></div>
        <div className='name'>Austin Ejem</div>
        <div className='dot'></div>
      </div>
    </nav>
  );
}

export default TopNav;
