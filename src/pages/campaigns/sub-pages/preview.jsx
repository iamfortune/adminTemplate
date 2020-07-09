import React from 'react';
import PreviewForm from '../components/previewForm';
import img from './../../../assets/web/5.jpg';
import './../campaign.css';

const imgStyle = {
  height: '100%',
  width: '100%',
  boxShadow: '0 1px 40px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.8) inset',
};

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

function CampaignStage2Preview() {
  return (
    <div>
      <div className='previewCampFlex space-between'>
        <div className='col-9' style={style}>
          <img src={img} alt='' style={imgStyle} />
        </div>
        <div className='col-3'>
          <PreviewForm />
        </div>
      </div>
    </div>
  );
}

export default CampaignStage2Preview;
