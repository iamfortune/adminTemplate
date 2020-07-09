import React from 'react';
import edit from './../../../assets/meta/pen.svg';
import del from './../../../assets/meta/trash.svg';
import sync from './../../../assets/social/repeat.svg';
import shuffle from './../../../assets/social/shuffle.svg';

import './components.css';

export default function LeadTableData(props) {
  const setBg = (e) => {
    if (e.target.checked) {
      e.target.parentNode.parentNode.parentNode.className = 'setBg';
    } else {
      e.target.parentNode.parentNode.parentNode.className = '';
    }
  };

  return (
    <React.Fragment>
      <div className='mt'></div>
      <tr>
        <td>
          <div className='square-check'>
            <input
              onChange={setBg}
              type='checkbox'
              className='squarecheck'
              name='squarecheck'
              id={'squarecheck' + props.idNum}
            />
            <label htmlFor={'squarecheck' + props.idNum}>
              <div className='squarecheck-label'>
                <div className='inner-check'></div>
              </div>
            </label>
          </div>
        </td>

        <td>{props.name}</td>
        <td>
          <a href={`mailto:${props.email}`}> {props.email}</a>
        </td>
        <td>
          <div className='centerContent'>
            {props.sync === 'sync' ? (
              <img src={sync} width='15px' alt='' />
            ) : (
              <img src={shuffle} width='15px' alt='' />
            )}
          </div>
        </td>
        <td>
          <div className='centerContent'>
            <p>{props.date}</p>
          </div>
        </td>
        <td>
          <div className=' row uppercase edit-delete-btn leads-edit-flex'>
            <p className='row meta-color-text'>
              Edit
              <div className='img-wrapper'>
                <img src={edit} alt='' />
              </div>
            </p>
            <p className='row meta-color-text'>
              delete
              <img src={del} width='15px' alt='' />
            </p>
          </div>
        </td>
      </tr>
    </React.Fragment>
  );
}
