import React from 'react';
import edit from './../../../assets/meta/pen.svg';
import stats from './../../../assets/meta/chart.svg';
import del from './../../../assets/meta/trash.svg';
import './components.css';

export default function Tdata(props) {
  return (
    <React.Fragment>
      <div className='mt'></div>
      <tr>
        <td>
          <div className='square-check'>
            <input
              type='checkbox'
              className='squarecheck'
              name='squarecheck'
              id={'squarecheck' + props.id}
            />
            <label htmlFor={'squarecheck' + props.id}>
              <div className='squarecheck-label'>
                <div className='inner-check'></div>
              </div>
            </label>
          </div>
        </td>
        <td>
          <p>{props.data}</p>
        </td>
        <td>
          <p className='date'>{props.date}</p>
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
            <div onClick={props.viralClick}  className='viral '>
              <p>Go Viral</p>
            </div>

            <div  onClick={props.showShare} className='share '>
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
    </React.Fragment>
  );
}
