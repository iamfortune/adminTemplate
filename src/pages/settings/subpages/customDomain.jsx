import React from 'react';
import Nav from './../components/nav';
import styles from './customDomain.module.css';

const CustomDomain = () => {
  return (
    <>
      <Nav
      active = {2}
      />
      <div className={styles.Main}>
        <h1>Custom Domain</h1>
        <div className={styles.Section}>
          <h4>Set up your domain to connect to Optinturbo For Website</h4>
          <ol>
            <li>Log into the account you have with your domain provider</li>
            <li>
              Find your DNS settings, Look for your account admin panel, or your
              domain management area, or DNS configuration, or similar.
            </li>
            <li>
              Edit your A record to point to Optinturbo's IP address{' '}
              <span className={styles.IP}>165.22.178.113</span>
              <p>
                The admin panel might feture drop-downs or editable fields, or
                you might have to check boxes or editable table. In the admin,
                you need to:
              </p>
              <ul>
                <li>Enter or choose @ or A record</li>
                <li>
                  Enter Optinturbo's IP address{' '}
                  <span className={styles.IP}>165.22.178.113</span> as the
                  destination for the A record.
                </li>
              </ul>
            </li>
            <li>
              Save the A Record (click Save, Sace Zone file, Add Record. or
              similar)
            </li>
            <li>Find CNAME record in your DNS settings.</li>
            <li>
              Change your www CNAME record to point to{' '}
              <span className={styles.IP}>clkrd.co</span>
            </li>
            <li>
              Save the CNAME record (usually by clicking Save or Add record ot
              similar)
            </li>
            <li>
              Your website URL, (Example{' '}
              <span className={styles.IP}>https://www.example.com</span> or{' '}
              <span className={styles.IP}>https://example.com</span>)
            </li>
          </ol>
          <form>
            <input
              type='text'
              className={styles.Input}
              placeholder='https://www.example.com'
            />
            <button type='submit' className={styles.Btn}>
              Add
            </button>
          </form>
          <p className={styles.Alert}>
            Note: After completion of the above steps your domain will be looked
            and website will be live within 24 hours.
          </p>
        </div>
      </div>
    </>
  );
};

export default CustomDomain;
