import React from 'react';
import LinkHeader from './components/linkHeader';
import Thead from './components/thead';
import Tdata from './components/tdata';
import { useState } from 'react';
import Overlay2 from '../../components/overlay/overlay2';
import OverLay3 from '../../components/overlay/Overlay3';

export const AllLinks = () => {
  const [shareOverlay, setShareOverlay] = useState(false);
  const [viral, setViral] = useState(false)

  const showShare = (e) => {
    setShareOverlay(true)
  }

  const goViral = (e) => {
    setViral(true)
  }

  const closeShare = (e) => {
    setShareOverlay(false)
  }
  const closeViral = () => {
    setViral(false)
  }
  return (
    <div className='allLinks'>
      <LinkHeader />
      <Thead>
        <Tdata
          showShare={showShare}
          viralClick={goViral}
          id={1}
          data={'Slow Space - Slow Food for the Built Environment'}
          date={'May 20, 2020'}
        />
        <Tdata
          showShare={showShare}
          viralClick={goViral}
          id={2}
          data={'Slow Space - Slow Food for the Built Environment'}
          date={'May 17, 2020'}
        />
      </Thead>
      {shareOverlay ? <Overlay2 close={closeShare} /> : null}
      {viral ? <OverLay3 close={closeViral} /> : null}
    </div>
  );
};
