import React from 'react';
import pinterest from './../../assets/social/pinterest-icon.svg';
import twitter from './../../assets/social/twitter.svg';
import facebook from './../../assets/social/Facebook_icon.svg';
import './overlay3.css';
import OverlayButton from './overlayButton';

function OverLay3(props) {
  return (
    <div className='overlay'>
          <div>
              <div className='wrapper'>
                  <OverlayButton
                  close={props.close}
                  />
                  <div className='title-box box'>
                      <div className='title'>Customize your post</div>
                  </div>
                  <div className='pinterest-box box'>
                      <div className='pinterest-logo logo'>
                          <img
                              src={pinterest}
                              alt='pinterest icon'
                              width='80px'
                              height='80px'
                          />
                      </div>
                      <div className='pinterest-content content'>
                          <div className='content-1'>Link to share</div>
                          <div className='content-2'>
                              <input type='text' placeholder='input link here' />
                          </div>
                          <div className='content-3'>
                              <div className='thumbnail'></div>
                              <div className='thumb-txt'>Upload thumbnail</div>
                          </div>
                      </div>
                  </div>
                  <div className='twitter-box box'>
                      <div className='twitter-logo logo'>
                          <img src={twitter} width='80px' alt='twitter icon' />
                      </div>
                      <div className='twitter-content content'>
                          <textarea
                              name='twitter-text'
                              id='twitter-text'
                              cols='30'
                              rows='10'
                              placeholder='Share this'
                          ></textarea>
                      </div>
                  </div>
                  <div className='facebook-box box'>
                      <div className='facebook-logo logo'>
                          <img src={facebook} alt='facebook' width='80px' height='80px' />
                      </div>
                      <div className='facebook-content content'>
                          <div className='content-1'>
                              <div className='content-head'>Schedule</div>
                              <div className='content-subheading'>Set a time to post</div>
                          </div>
                          <div className='content-2'>
                              <select>
                                  <option value='opt-1'>Post Later</option>
                                  <option value='opt-2'>Post Now</option>
                                  <option value='opt-3'>Post Next Year</option>
                              </select>
                          </div>
                          <div className='content-3'>
                              <input type='date' name='post-date' id='post-date' />
                          </div>
                      </div>
                  </div>
                  <div className='post-box '>
                      <input type='submit' value='POST' />
                  </div>
              </div>
          </div>
    </div>
  );
}

export default OverLay3;
