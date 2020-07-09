import React from 'react';
import TopNav from '../../components/nav/topnav';
import CampaignStage2Preview from '../../pages/campaigns/sub-pages/preview';

const style = {
  padding: 20,
  paddingLeft: 30,
};

export default function Campaign3Route() {
  return (
    <div>
        <div style={style}>
          <TopNav preview={true} />
          <CampaignStage2Preview />
        </div>
    </div>
  );
}
