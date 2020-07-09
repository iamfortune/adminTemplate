import React from 'react';
import PollsTableHead from './components/allPollsTableHead';
import PollTableData from './components/pollTableData';
import TopHeader from './components/topHeader';
import Overlay4 from '../../components/overlay/Overlay4';
import Overlay2 from '../../components/overlay/overlay2';
import OverLay3 from '../../components/overlay/Overlay3';
import { useState } from 'react';

export default function AllPolls() {
  const [overlay, setOverlay] = useState(false);
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

  const showOv = (e) => {
    setOverlay(true);
  };

  const closeOv = (e) => {
    setOverlay(false);
  };

  const closeViral = () => {
    setViral(false)
  }
  return (
    <div>
      <TopHeader />
      <PollsTableHead>
        <PollTableData
          showShare={showShare}
          viralClick={goViral}
          showOv={showOv}
          question={'Who is Artculture BMC'}
          link={'https://clkrd.co/21s5tfl7'}
          date={'25-01-2020'}
          answer={'56'}
        />

        <PollTableData
          showShare={showShare}
          viralClick={goViral}
          showOv={showOv}
          question={'Whats your definition of success '}
          link={'https://clkrd.co/21s5tfl7'}
          date={'25-01-2020'}
          answer={'56'}
        />
      </PollsTableHead>

      {shareOverlay ? <Overlay2 close={closeShare} /> : null}
      {overlay ? <Overlay4 close={closeOv} /> : null}
      {viral ? <OverLay3 close={closeViral} /> : null}
    </div>
  );
}
