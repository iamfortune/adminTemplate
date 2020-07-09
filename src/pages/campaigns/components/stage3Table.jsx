import React from 'react';
import './components.css';

function TableStage3(props) {
  return (
    <div className='table stage3 mt '>
      <table className='col-12'>
        <thead>
          <tr>
            <th>Prev</th>
            <th>Campaign</th>
            <th>link</th>
            <th>Subscribers</th>
            <th>Action</th>
            <th>Social</th>
            <th>Get Code</th>
          </tr>
        </thead>

        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
}

export default TableStage3;
