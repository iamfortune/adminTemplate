import React, { useState } from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import CampaignStage3 from '../../pages/campaigns/sub-pages/index3';
import OverLay3 from '../../components/overlay/Overlay3';
import Overlay2 from '../../components/overlay/overlay2';

const style = {
  padding: 20,
  paddingTop: 10,
  paddingLeft: 30,
};

export default function AllCampaign3Route() {
  const [overlay2, setOverlay2] = useState(true);
  const [overlay, setOverlay] = useState(false);

  const closeOv = (e) => {
    setOverlay(false);
  };


  const showSecond = (e) => {
    setOverlay(true);
    setOverlay2(false)
  };
  

  return (
    <div>
      <div className='row space-between'>
        <div className=''>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav
              text={'All Campaign'}
              text2={'Pick and edit your campaign'}
            />

            <CampaignStage3 />
            {overlay2 ? <Overlay2
            close ={showSecond}
            /> : null}
            {overlay ? <OverLay3 closeOverlay4={closeOv} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
