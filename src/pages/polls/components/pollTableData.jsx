import React from 'react';
import edit from './../../../assets/meta/pen.svg';
import stats from './../../../assets/meta/chart.svg';
import del from './../../../assets/meta/trash.svg';
import setting from './../../../assets/social/gear.svg';

export default function PollTableData(props) {
  return (
    <React.Fragment>
      <div className='mt'></div>
      <tr>
        <td className='left-text td-question'>{props.question}</td>
        <td>
          <a href={props.link}> {props.link}</a>
        </td>
        <td>{props.date}</td>
        <td>{props.answer}</td>
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
          <div className='row uppercase col-12'>
            <div onClick={props.viralClick}  className='viral col-6 '>
              <p>Go Viral</p>
            </div>

            <div  onClick={props.showShare} className='share col-6'>
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
