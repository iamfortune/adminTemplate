import React from 'react';
import './overlay4.css';

function Overlay4(props) {
    return (
      <div className='overlay'>
        <div>
          <div className="container">
            <button onClick={props.close} className="ov4 close">
              X
            </button>
            <div className="wrapper">
              <div className="content">
                <div className="pop-up boxes">
                  <p className="field">Pop-up Behaviour</p>
                  <div className="insert">
                    <input
                      type="number"
                      name="behaviour"
                      id=""
                      placeholder="Select Behaviour"
                    />
                  </div>
                </div>
                <div className="effect-box boxes">
                  <p className="field">Effect</p>
                  <div className="insert">
                    <input
                      type="number"
                      name="behaviour"
                      id=""
                      placeholder="Select Effect"
                    />
                  </div>
                </div>
                <div className="copy-code boxes">
                  <p className="field">Copy embed code</p>
                  <textarea name="code" className="code"></textarea>
                </div>
                <div className="post-box">
                  <input type="submit" value="SAVE" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Overlay4;