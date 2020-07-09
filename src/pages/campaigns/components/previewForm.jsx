import React, { useState } from 'react';
import './pvForm.css';
import upload from './../../../assets/upload/upload.svg';
import trash from './../../../assets/upload/trash.svg';
import ButtonWhite from '../../../components/button/button';

export default function PreviewForm() {
  let [colorVal, setColorVal] = useState('#ffffff');

  const setColor = (event) => {
    setColorVal(event.target.value);
  };

  return (
    <div className='pvForm'>
      <div className='pvForm-header'>
        <p>
          Page <br />
          Content
        </p>

        <div className='div '>
          <p>Page Background</p>

          <div className='colorSetDiv'>
            <input type='color' name='' onChange={setColor} id='colorSet' value={ colorVal} />
            <span className='colorVal'>{colorVal}</span>
          </div>
        </div>
      </div>

      <div className='pvForm-subhead '>
        <div className='row'>
          <div className='bg-upload'>
            <p>Background Image</p>
            <div className='row'>
              <button>
                <img src={upload} alt='' />
              </button>
              <button>
                <img src={trash} alt='' />
              </button>
            </div>
          </div>
          <div className=' ml logo-upload'>
            <p>Logo Image</p>
            <div className='row'>
              <button>
                <img src={upload} alt='' />
              </button>
              <button>
                <img src={trash} alt='' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='pvForm-vidUrl block '>
        <label htmlFor='videoUrl'>Video Url</label>
        <input
          type='url'
          name='videoUrl'
          placeholder='add your video url'
          id='videoUrl'
        />
      </div>

      <div className='pvForm-responder block '>
        <label htmlFor='responder'>Auto Responder</label>
        <select name='' id=''>
          <option value='' disabled selected>
            Please select your auto responder
          </option>
          <option value=''>option</option>
        </select>
      </div>

      <div className='pvForm-Tag block '>
        <label htmlFor='Tag'>Tag</label>
        <select name='' id=''>
          <option value='' disabled selected>
            Please select your auto responder
          </option>
          <option value=''>option</option>
        </select>
      </div>
      <div className='redirect-url'>
        <p>Redirect/Thank You Page</p>

        <div className='pvForm-radio '>
          <div className='row space-between relative'>
            <div className='div-message radio'>
              <input
                type='radio'
                name='redirect'
                id='message'
                checked={true}
                readOnly
              />
              <label htmlFor='message' className='messageLabel'>Message</label>
              <div className='close-message col-12'>
                <label htmlFor='messageText'>Message</label>
                <textarea
                  name='messateText'
                  id='messateText'
                  cols='30'
                  rows='6'
                ></textarea>
                <div className='download-final mt'>
                  <ButtonWhite label={'Download'} />
                </div>
              </div>
            </div>

            <div className='div-url max-content radio'>
              <input type='radio' name='redirect' id='url' />
              <label htmlFor='url' className='urlLabel'>Url</label>
              <div className='close-url col-12'>
                <label htmlFor='urlText'>Url</label>
                <input type='url' name='urlText' id='urlText' />
                <div className='download-final mt'>
                  <ButtonWhite label={'Download'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
