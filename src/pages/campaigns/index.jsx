import React from 'react';
import TopSect from './components/topSect';
import Filter from './components/filter';
import CampaignCard from './components/card';
import Overlay1 from '../../components/overlay/overlay1';
import { useState } from 'react';

const style = {
  marginBottom: 20,
  marginTop: 20,
  height: 'max-content'
};

function Campaign() {
  const [overlay, setOverlay] = useState(false);

  const displayOv1 = (e) => {
    e.preventDefault();
    setOverlay(true);
  };

  const closeOv1 = (e) => {
    e.preventDefault();
    setOverlay(false);
  };

  return (
    <div>
      <div className='row space-between' style={style}>
        <div>
          <TopSect />
        </div>
        <div className='col-5'>
          <Filter />
        </div>
      </div>

      <div className='row col-12 space-between wrap'>
        <div className='col-4'>
          <CampaignCard onClick={displayOv1} />
        </div>
        <div className='col-4'>
          <CampaignCard onClick={displayOv1} />
        </div>
        <div className='col-4'>
          <CampaignCard onClick={displayOv1} />
        </div>
      </div>

      <div className='row col-12 mt space-between wrap'>
        <div className='col-4'>
          <CampaignCard onClick={displayOv1} />
        </div>
        <div className='col-4'>
          <CampaignCard onClick={displayOv1} />
        </div>
        <div className='col-4'>
          <CampaignCard onClick={displayOv1} />
        </div>
      </div>
      {overlay ? <Overlay1 closeOverlay={closeOv1} /> : null}
    </div>
  );
}

export default Campaign;
