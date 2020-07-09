import React from 'react';
import pinterest from './../../assets/social/pinterest-icon.svg';
import twitter from './../../assets/social/twitter.svg';
import facebook from './../../assets/social/facebook2.svg';
import './ov2.css';
import OverlayButton from './overlayButton';

export default function Overlay2(props) {

  return (
    <div className='overlay'>
      <div className='ov2-card relative'>
        <div className='btn-ov2 red-close'>
          <OverlayButton close={props.close} />
        </div>
        <div className='SocialCardIcon'>
          <img src={facebook} alt='' />
          <p className='ov2-name'>Facebook</p>
        </div>
        <div className='SocialCardIcon'>
          <img src={twitter} alt='' />
          <p className='ov2-name'>Twitter</p>
        </div>
        <div className='SocialCardIcon'>
          <img src={pinterest} alt='' />
          <p className='ov2-name'>Pinterest</p>
        </div>
      </div>
    </div>
  );
}
