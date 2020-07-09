import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import Settings from '../../pages/settings';

const style = {
  padding: 20,
  paddingLeft: 30,
};

export default function SettingsRoute() {
  return (
    <div>
      <div className='row space-between'>
        <div className=''>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav />
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}
