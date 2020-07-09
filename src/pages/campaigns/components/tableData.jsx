import React from 'react';
import './table.css';
import edit from './../../../assets/meta/pen.svg';
import stats from './../../../assets/meta/chart.svg';
import del from './../../../assets/meta/trash.svg';
import setting from './../../../assets/social/gear.svg';
import view from './../../../assets/social/view.svg';

export default function TableData(props) {
  return (
    <React.Fragment>
      <div className='mt'> </div>
      <tr>
        <td>
          <img src={view} width='15px' alt='' className='pointer' />
        </td>
        <td>
          <a href={props.campaign}>{props.campaign}</a>
        </td>
        <td>
          <a href={props.link}>{props.link}</a>
        </td>
        <td>
          <p>56</p>
        </td>
        <td>
          <div className=' row space-evenly uppercase edit-delete-btn'>
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

            <div onClick={props.showShare} className='share '>
              <p>share</p>
            </div>
          </div>
        </td>

        <td>
          <div className='embed'>
            <button onClick={props.showOv} className='grab-link row space-evenly'>
              <p>Embeded</p> <img src={setting} width='15px' alt='' />
            </button>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
}
