import React from 'react';
import './components.css';
import gear from './../../../assets/social/gear.svg';

function CampaignCard(props) {
  return (
    <button className='camp-card relative'>
      <div className='o-icon'>
        <img src={gear} alt='' />
      </div>
      <div className='row space-between col-12 relative'>
        <div className='card-img-sect col-6'>
          <div className='card-img'></div>
        </div>
        <div className='card-text-sect col-6'>
          <div className='title-1'>
            <p>Lorem ipsum</p>
          </div>
          <div className=' card-text'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem
              ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <p onClick={props.onClick} className='card-button pointer col-12'>
            Select
          </p>
        </div>
      </div>
    </button>
  );
}

export default CampaignCard;
