import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import PollButton from '../../pages/polls/subpage/pollButton';

const style = {
  padding: 20,
  paddingLeft: 30,
};

export default function Polls2Route() {
  return (
    <div>
      <div className='row space-between'>
        <div className=''>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav text={'Create Poll'} />

            <PollButton />
          </div>
        </div>
      </div>
    </div>
  );
}
