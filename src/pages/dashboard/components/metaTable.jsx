import React from 'react';
import './components.css';
import edit from './../../../assets/meta/pen.svg';
import stats from './../../../assets/meta/chart.svg';
import del from './../../../assets/meta/trash.svg';
import { useState } from 'react';
import Overlay2 from '../../../components/overlay/overlay2';
import OverLay3 from '../../../components/overlay/Overlay3';

function MetaTable() {
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
  const closeViral = () => {
    setViral(false)
  }
  return (
    <div className='meta'>
      <table class='table col-12'>
        <thead>
          <tr className=' left-text'>
            <th scope='col'>Fav</th>
            <th scope='col'>Campaign</th>
            <th scope='col'>Date</th>
            <th scope='col'></th>
            <th scope='col'></th>
          </tr>
        </thead>
        <div className='mb'></div>
        <tbody className='meta-body'>
          <tr>
            <td>
              <div className='square-check'>
                <input
                  type='checkbox'
                  className='squarecheck'
                  name='squarecheck'
                  id='squarecheck'
                />
                <label htmlFor='squarecheck'>
                  <div className='squarecheck-label'>
                    <div className='inner-check'></div>
                  </div>
                </label>
              </div>
            </td>
            <td>Slow Space - Slow Food for the Built Environment</td>
            <td>
              <p className='date'>May 20, 2020</p>
            </td>
            <td>
              <div className=' row uppercase edit-delete-btn'>
                <div className='row'>
                  <p>Edit</p>
                  <div className='img-wrapper'>
                    <img src={edit} alt='' />
                  </div>
                </div>
                <div className='row'>
                  <p>Delete</p>
                  <img src={del} width='13px' alt='' />
                </div>
                <div className='row'>
                  <p>Stats</p>
                  <img src={stats} width='15px' alt='' />
                </div>
              </div>
            </td>
            <td>
              <div className='row uppercase'>
                <div onClick={goViral} className='viral '>
                  <p>Go Viral</p>
                </div>

                <div onClick={showShare} className='share '>
                  <p>share</p>
                </div>
              </div>
            </td>

            <td>
              <div className='grab-link'>
                <p>Grab Link</p>
              </div>
            </td>
          </tr>
          <div className='mb'></div>
          <tr>
            <td>
              <div className='square-check'>
                <input
                  type='checkbox'
                  className='squarecheck'
                  name='squarecheck'
                  id='squarecheck2'
                />
                <label htmlFor='squarecheck2'>
                  <div className='squarecheck-label'>
                    <div className='inner-check'></div>
                  </div>
                </label>
              </div>
            </td>
            <td>
              Austin Ejem - Start and grow your online business with this proven
              formula...
            </td>
            <td>
              <p className='date'>May 17, 2020</p>
            </td>
            <td>
              <div className=' row uppercase edit-delete-btn'>
                <div className='row'>
                  <p>Edit</p>
                  <div className='img-wrapper'>
                    <img src={edit} alt='' />
                  </div>
                </div>
                <div className='row'>
                  <p>Delete</p>
                  <img src={del} width='13px' alt='' />
                </div>
                <div className='row'>
                  <p>Stats</p>
                  <img src={stats} width='15px' alt='' />
                </div>
              </div>
            </td>
            <td>
              <div className='row uppercase'>
                <div onClick={goViral} className='viral '>
                  <p>Go Viral</p>
                </div>

                <div onClick={showShare} className='share '>
                  <p>share</p>
                </div>
              </div>
            </td>

            <td>
              <div className='grab-link'>
                <p>Grab Link</p>
              </div>
            </td>
          </tr>
          <div className='mt'></div>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <div className='pagination row'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>Next</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {shareOverlay ? <Overlay2 close={closeShare} /> : null}
      {viral ? <OverLay3 close={closeViral} /> : null}
    </div>
  );
}

export default MetaTable;
