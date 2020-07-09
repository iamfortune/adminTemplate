import React from 'react';
import styles from './social.module.css';
import { useState } from 'react';
import Overlay2 from '../../../components/overlay/overlay2';

const SocialAccount = () => {
  const [overlay, setOverlay] = useState(false);

  const showOverlay = (e) => {
    e.preventDefault();
    setOverlay(true);
  };

  const closeOverlay = (e) => {
    e.preventDefault();
    setOverlay(false);
  };



  return (
    <div className={styles.Main}>
      <h1>Social Account</h1>
      <div className={styles.Section}>
        <div className={styles.Aside}>
          <div>
            <h4>Facebook</h4>
            <span className={styles.fb}>1 account</span>
          </div>
          <div>
            <h4>Twitter</h4>
            <span className={styles.twitter}>1 account</span>
          </div>
          <div>
            <h4>Pinterest</h4>
            <span className={styles.pinterest}>1 account</span>
          </div>
        </div>
        <div className={styles.Content}>
          <button type='button' onClick={showOverlay}>
            Add Account +
          </button>
          <div className={styles.clear}></div>
          <div className={styles.Bar}>
            <div>
              <label htmlFor='num'>Show entries</label>
              <input type='number' placeholder='1' />
            </div>
            <div>
              <label htmlFor='search'>Search</label>
              <input type='text' placeholder='search' />
            </div>
          </div>
          <table>
            <thead>
              <th>#</th>
              <th>Name</th>
              <th>Account</th>
              <th>Created At</th>
              <th>Action</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Uche Antonio Nick</td>
                <td>Facebook</td>
                <td>25/01/2020</td>
                <td>
                  <span className={styles.Active}>Active</span>
                  <span className={styles.Deactive}>Deactive</span>
                  <span className={styles.Delete}>Delete</span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nick Antonio</td>
                <td>Twitter</td>
                <td>25/01/2020</td>
                <td>
                  <span className={styles.Active}>Active</span>
                  <span className={styles.Deactive}>Deactive</span>
                  <span className={styles.Delete}>Delete</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.Footer}>
            <p>Showing 1 to 2 of 2 entries</p>
            <div>
              <span>Previous</span>
              <span className={styles.num}>1</span>
              <span>Next</span>
            </div>
          </div>
        </div>
      </div>
      {overlay ? <Overlay2
      close={closeOverlay}
      /> : null}
    </div>
  );
};

export default SocialAccount;
