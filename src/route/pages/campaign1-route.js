import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import Campaign from '../../pages/campaigns';

const style = {
  padding: 20,
  paddingLeft: 30,
};

export default function Campaign1Route() {
  return (
    <div>
      <div className='row space-between'>
        <div className='col-2'>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav
              text={'New Campaign'}
              text2={'Select a lead magnet to get started'}
            />
            <Campaign />
          </div>
        </div>
      </div>
    </div>
  );
}
