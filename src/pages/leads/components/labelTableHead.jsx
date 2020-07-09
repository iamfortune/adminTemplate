import React from 'react';
import './components.css';

export default function LeadTableHead(props) {
  const setAllCheck = (event) => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (var checkbox of checkboxes) {
      if (event.target.checked) checkbox.checked = true;
      if (!event.target.checked) checkbox.checked = false;
    }
  };

  return (
    <div>
      <div className='row mt'>
        <input
          onChange={setAllCheck}
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

        <p>Select All</p>
      </div>

      <table className='col-12 mt'>
        <thead>
          <tr>
            <th className=' left-text'>Fav</th>
            <th>Name</th>
            <th>Email Address</th>
            <th className='center-text'>Is Sync</th>
            <th className='center-text'>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.children}

          <div className='mt-big'></div>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='left-text'>
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
    </div>
  );
}
