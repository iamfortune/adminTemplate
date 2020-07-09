import React from 'react';
import styles from './components.module.css';

const Nav = (props) => {
  return (
    <div className={styles.Nav}>
      {props.active === 1 ? (
        <React.Fragment>
          <a href='/settings'>
            <span className={styles.Active}>User Settings</span>
          </a>
          <a href='/settings/custom-domain'>
            <span>Custom Domain</span>
          </a>
          <a href='/settings/integration'>
            <span>Integrations</span>{' '}
          </a>
        </React.Fragment>
      ) : props.active === 2 ? (
        <React.Fragment>
          <a href='/settings'>
            <span>User Settings</span>
          </a>
          <a href='/settings/custom-domain'>
            <span className={styles.Active}>Custom Domain</span>
          </a>
          <a href='/settings/integration'>
            <span>Integrations</span>{' '}
          </a>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <a href='/settings'>
            <span>User Settings</span>
          </a>
          <a href='/settings/custom-domain'>
            <span>Custom Domain</span>
          </a>
          <a href='/settings/integration'>
            <span className={styles.Active}>Integrations</span>{' '}
          </a>
        </React.Fragment>
      )}
    </div>
  );
};

export default Nav;
