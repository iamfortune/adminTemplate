import React from 'react';
import Nav from './components/nav';
import styles from './Settings.module.css';
import user from '../../assets/social/user.svg';

const Settings = () => {
  return (
    <React.Fragment>
      <Nav active={1} />
      <div className={styles.Main}>
        <div className={styles.Settings}>
          <h1>User Settings</h1>
          <div className={styles.Section}>
            <div className={styles.Form}>
              <label htmlFor="name">Name</label>
              <input
                className={styles.Input}
                type="text"
                name="Name"
                id="name"
                placeholder="Nick Antonio"
              />
            </div>
            <div className={styles.Form}>
              <label htmlFor="email">Email Address</label>
              <input
                className={styles.Input}
                type="email"
                name="Name"
                id="email"
                placeholder="acewebtechng.com"
              />
            </div>
            <div className={styles.Form}>
              <div></div>
              <div className={styles.Buttons}>
                <button className={styles.SaveBtn} type="button">
                  Save
                </button>
                <button className={styles.Password} type="button">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          <h1>Affiliate URL Settings</h1>
          <div className={styles.Section}>
            <div className={styles.Form}>
              <label htmlFor="url">Name</label>
              <input
                className={styles.Input}
                type="text"
                name="Url"
                id="url"
                placeholder="https://"
              />
            </div>
            <div className={styles.Form}>
              <div></div>
              <button className={styles.SaveBtn} type="button">
                Save
              </button>
            </div>
          </div>
        </div>
        <div className={styles.Img}>
          <img className={styles.Avatar} src={user} alt="Avatar" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Settings;
