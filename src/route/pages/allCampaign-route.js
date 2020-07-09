import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import CampaignStage3 from '../../pages/campaigns/sub-pages/index3';

const style = {
  padding: 20,
  paddingLeft: 30,
};

export default function AllCampaignRoute() {
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
          </div>
        </div>
      </div>
    </div>
  );
}
