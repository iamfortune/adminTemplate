import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import CampaignStage2 from '../../pages/campaigns/sub-pages/index2';

const style = {
  padding: 20,
  paddingLeft: 30,
};

export default function Campaign2Route() {
  return (
    <div>
      <div className='row space-between'>
        <div className=''>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav
              text={'ArtCulture Lead Gen'}
              text2={'Select a template from templates'}
            />
            <CampaignStage2 />
          </div>
        </div>
      </div>
    </div>
  );
}
