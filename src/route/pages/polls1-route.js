import React from 'react';
import TopNav from '../../components/nav/topnav';
import SideNav from '../../components/nav/sidenav';
import Polls from '../../pages/polls/subpage/createPolls';

const style = {
  padding: 20,
  paddingLeft: 30,
  paddingTop: 10,
};

export default function Polls1Route() {
  return (
    <div>
      <div className='row space-between'>
        <div className=''>
          <SideNav />
        </div>

        <div className='col-10'>
          <div style={style}>
            <TopNav text={'create poll'} />
            <Polls />
          </div>
        </div>
      </div>
    </div>
  );
}
