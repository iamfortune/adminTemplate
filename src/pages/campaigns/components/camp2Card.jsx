import React from 'react';
import './components.css';

function Camp2Card(props) {
  return (
    <div
      className='camp2-card'
      style={{ backgroundImage: `url(${props.img})`, borderRadius: 20 }}
    >
      <div className='camp2-card-inner'>
        <div className='camp2-overlay'>
          <div className='camp2-button'>
            <a href="/campaign-stage3">
              <button>Select</button>
            </a>

            <a href="/campaign-preview">
              <button>Preview</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Camp2Card;
