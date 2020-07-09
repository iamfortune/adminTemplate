import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import Dashboard from '../../pages/dashboard';

const style = {
  padding: 20,
  paddingLeft: 30,
  paddingTop: 10,
};

function DashboardRoute() {
  return (
    <div>
      <div className='row space-between'>
        <div className=''>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav />
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardRoute;
