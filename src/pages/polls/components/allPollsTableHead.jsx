import React from 'react';
import './components.css'

export default function PollsTableHead(props) {
  return (
    <div>
      <table className='col-12 mt'>
        <thead>
          <tr>
            <th className='left-text'>Poll Question</th>
            <th>Link</th>
            <th>Created</th>
            <th className='break'>Total <br/> Answer</th>
            <th>Action</th>
            <th>Social</th>
            <th>Get Code</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
          <div className='mt'></div>
          <tr>
            <td></td>
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
    </div>
  );
}
