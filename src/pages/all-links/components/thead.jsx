import React from 'react'
import './components.css';

export default function Thead(props) {
    return (
      <div>
        <table className='col-12'>
          <thead>
            <tr className=' left-text'>
              <th scope='col'>Fav</th>
              <th scope='col'>Campaign</th>
              <th scope='col'>Date</th>
              <th scope='col'></th>
              <th scope='col'></th>
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
