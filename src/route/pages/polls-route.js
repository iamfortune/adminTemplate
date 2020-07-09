import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import AllPolls from '../../pages/polls';

const style = {
  padding: 20,
  paddingLeft: 30,
  paddingTop: 10,
};

export default function PollsRoute() {
  return (
    <div>
      <div className='row space-between'>
        <div className=''>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav />
            <AllPolls />
          </div>
        </div>
      </div>
    </div>
  );
}
