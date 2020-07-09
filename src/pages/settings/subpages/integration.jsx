import React from 'react';
import styles from './integration.module.css';
import Nav from './../components/nav';
import del from './../../../assets/meta/trash.svg';
import mailChimp from './../../../assets/upload/mailchimp.jpg';
import awebor from './../../../assets/upload/aweber.jpg';
import apiImg from './../../../assets/upload/api.jpg';
import convertKit from './../../../assets/upload/convertKit.jpg';
import activeCampaign from './../../../assets/upload/activeCampaign.jpg';
import response from './../../../assets/upload/response.jpg';

const Integration = () => {
  return (
    <>
      <Nav active={3} />
      <a href='/settings/social-account'>
        <button type='button' className={styles.AddBtn}>
          Add Social Media +{' '}
        </button>
      </a>
      <div className={styles.Main}>
        <h1>Integration</h1>
        <div className={styles.Section}>
          <div>
            <img src={apiImg} alt='icon' />
            <p>MyApi</p>
          </div>
          <div>
            <img src={awebor} alt='icon' />
            <p>Aweber</p>
          </div>
          <div>
            <img src={activeCampaign} alt='icon' />
            <p>activeCampaign</p>
          </div>
          <div>
            <img src={response} alt='icon' />
            <p>Getresponse</p>
          </div>
          <div>
            <img src={mailChimp} alt='icon' />
            <p>MailChimp</p>
          </div>
          <div>
            <img src={convertKit} alt='icon' />
            <p>ConvertKit</p>
          </div>
        </div>
        <div className={styles.Table}>
          <table>
            <thead>
              <th>LIST NAME</th>
              <th>API KEY</th>
              <th>TYPE</th>
              <th>CREATED</th>
              <th>ACTION</th>
            </thead>
            <tbody>
              <tr className={styles.tRow}>
                <td className={styles.Blue}>Freelance List</td>
                <td>
                  <p className={styles.APIKEY}>
                    24872e2ce69823e6a3511bd58e605982981aa4702258aeb1552d7184f1611e
                  </p>
                </td>
                <td>ActiveChamp</td>
                <td>25-01-2020</td>
                <td className={styles.Blue}>
                  DELETE <img src={del} alt='icon' />
                </td>
              </tr>
              <tr>
                <td className={styles.Blue}>Bluuword Marketing</td>
                <td>
                  <p className={styles.APIKEY}>
                    24872e2ce69823e6a3511bd58e605982981aa4702258aeb1552d7184f1611e
                  </p>{' '}
                </td>
                <td>Getresponse</td>
                <td>25-01-2020</td>
                <td className={styles.Blue}>
                  DELETE <img src={del} alt='icon' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Integration;
