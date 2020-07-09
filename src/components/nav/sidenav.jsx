import React from 'react';
import dashboard from './../../assets/social/Dashboard icon.svg';
import campaigns from './../../assets/campaigns.svg';
import leads from './../../assets/social/leads.svg';
import polls from './../../assets/social/polls.svg';
import links from './../../assets/social/links.svg';
import settings from './../../assets/social/settings.svg';
import analytics from './../../assets/social/analytics.svg';
import support from './../../assets/social/support.svg';
import logout from './../../assets/social/logout.svg';
import logo from './../../assets/social/logo-box.png';
import arrow from './../../assets/social/arrow.svg';
import './sideNav.css';
import { useEffect } from 'react';

function SideNav() {
  function showDropdownSupport(event) {
    event.stopPropagation();
    document.getElementById('support').classList.toggle('closed');
  }

  function showDropdownCampaign(event) {
    event.stopPropagation();
    document.getElementById('campaign').classList.toggle('closed');
  }

  function showDropdownSetting(event) {
    event.stopPropagation();
    document.getElementById('setting').classList.toggle('closed');
  }

  useEffect(() => {
    let path = window.location.href;
    let navs = document.getElementsByClassName('anchor');

    for (const item in navs) {
      if (navs[item].href === path || navs[item].href + '/' === path + '/') {
        navs[item].children[0].classList.add('active-button');
      }
    }
  });

  return (
    <div className="sideNav">
      <div
        onClick={() => {
          window.location.href = "/dashboard";
        }}
        className="logo"
      >
        <img src={logo} alt="" />
      </div>

      <div className="items mt-big capitalize">
        <a className="anchor" href="/dashboard">
          <button className="row">
            <img src={dashboard} alt="" />
            <p>Dashboard</p>
          </button>
        </a>
        <button onClick={showDropdownCampaign} className="row m0">
          <img src={campaigns} alt="" />
          <p>My Campaigns</p>
          <img
            src={arrow}
            width="8px"
            className="dropdown-arrow-space"
            alt=""
          />
        </button>
        <div id="campaign" className="closed">
          <a href="/new-campaign">New Campaign</a>

          <a href="/campaign" className="dropdown-margin">
            All Campaign
          </a>
        </div>
        <a className="anchor" href="/leads">
          <button className="row">
            <img src={leads} alt="" />
            <p>Leads</p>
          </button>
        </a>

        <a className="anchor" href="/polls">
          <button className="row">
            <img src={polls} alt="" />
            <p>Polls</p>
          </button>
        </a>

        <a className="anchor" href="/all-links">
          <button className="row">
            <img src={links} alt="" />
            <p>All Links</p>
          </button>
        </a>

        <button onClick={showDropdownSetting} className="row m0">
          <img src={settings} alt="" />
          <p>Settings</p>
          <img
            src={arrow}
            width="8px"
            className="dropdown-arrow-space"
            alt=""
          />
        </button>

        <div id="setting" className="closed">
          <a href="/settings">User Settings</a>
          <a href="/settings/integration" className="dropdown-margin">
            Integration
          </a>
          <a href="/settings/custom-domain" className="dropdown-margin">
            Custom domain
          </a>
        </div>
        <a href="/analytics">
          <button className="row">
            <img src={analytics} alt="" />
            <p>Analytics</p>
          </button>
        </a>

        <button href="#0" onClick={showDropdownSupport} className="row m0">
          <img src={support} alt="" />
          <p>Support</p>
          <img
            src={arrow}
            width="8px"
            className="dropdown-arrow-space"
            alt=""
          />
        </button>

        <div id="support" className="closed">
          <a href="/support/fb">
            Support Desk
          </a>
          <a href="/support/fb" className="dropdown-margin">
            FB Group
          </a>
          <a href="/support/training" className="dropdown-margin">
            Trainings
          </a>
          <a href="/support/bonuses" className="dropdown-margin">
            Bonuses
          </a>
        </div>
      </div>

      <div className="log-out">
        {/* <a href='/'> */}
        <button
          onClick={(e) => {
            window.location.href = "/";
          }}
          className="row"
        >
          <img src={logout} alt="" />
          <p>Log out</p>
        </button>
        {/* </a> */}
      </div>
    </div>
  );
}

export default SideNav;
