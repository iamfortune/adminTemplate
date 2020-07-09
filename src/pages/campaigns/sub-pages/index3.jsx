import React from 'react';
import TopSect from '../components/topSect';
import './../campaign.css';
import FilterStage3 from '../components/stage3Filter';
import TableStage3 from '../components/stage3Table';
import TableData from '../components/tableData';
import { useState } from 'react';
import Overlay4 from '../../../components/overlay/Overlay4';
import Overlay2 from '../../../components/overlay/overlay2';
import OverLay3 from '../../../components/overlay/Overlay3';

const style = {
  marginBottom: 20,
  marginTop: 20,
};

export default function CampaignStage3() {
  const [overlay, setOverlay] = useState(false);
  const [shareOverlay, setShareOverlay] = useState(false);
  const [viral, setViral] = useState(false)

  const showShare = (e)=>{
    setShareOverlay(true)
  }

  const goViral = (e)=>{
    setViral(true)
  }

  const closeShare = (e)=>{
    setShareOverlay(false)
  }

  const showOv = (e) => {
    setOverlay(true);
  };

  const closeOv = (e) => {
    setOverlay(false);
  };

  const closeViral = ()=>{
    setViral(false)
  }

  return (
    <div className='campaign-3'>
      <div className='row space-between' style={style}>
        <div>
          <TopSect />
        </div>
        <div className='col-5'>
          <FilterStage3 />
        </div>
      </div>

      <div>
        <TableStage3>
          <TableData
            showShare = {showShare}
            viralClick ={goViral}
            showOv={showOv}
            campaign={'Artculture Lead Ma...'}
            link={'https://clkrd.co/21s5tfl7'}
          />
          <TableData
            showShare = {showShare}
            viralClick ={goViral}
            showOv={showOv}
            campaign={'Artculture Lead Ma...'}
            link={'https://clkrd.co/21s5tfl7'}
          />
          <TableData
            showShare = {showShare}
            viralClick ={goViral}
            showOv={showOv}
            campaign={'Artculture Lead Ma...'}
            link={'https://clkrd.co/21s5tfl7'}
          />
          <TableData
            showShare = {showShare}
            viralClick ={goViral}
            showOv={showOv}
            campaign={'Artculture Lead Ma...'}
            link={'https://clkrd.co/21s5tfl7'}
          />
        </TableStage3>
      </div>
      {shareOverlay ? <Overlay2 close = {closeShare} /> : null}
      {overlay ? <Overlay4 close={closeOv} /> : null}
      {viral ? <OverLay3 close={closeViral} /> : null}
    </div>
  );
}
