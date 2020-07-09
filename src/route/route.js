import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashboardRoute from './pages/dashboard-route';
import AllCampaignRoute from './pages/allCampaign-route';
import Campaign1Route from './pages/campaign1-route';
import Campaign2Route from './pages/campaign2-route';
import Campaign3Route from './pages/campaign3-route';
import AllLinksRoute from './pages/allLinks-route';
import LeadsRoute from './pages/leads-route';
import PollsRoute from './pages/polls-route';
import Polls1Route from './pages/polls1-route';
import Polls2Route from './pages/polls2-route';
import Home from '../pages/home';
import AllCampaign3Route from './pages/allCampaign-3';
import SettingsRoute from './pages/settings-route';
import SetIntegrationRoute from './pages/integration-route';
import SetCustomDomainRoute from './pages/customDomain-route';
import SetSocialAccountRoute from './pages/socialAccount-route';

function RoutePath() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={DashboardRoute} />
        <Route exact path='/campaign' component={AllCampaignRoute} />
        <Route exact path='/new-campaign' component={Campaign1Route} />
        <Route exact path='/campaign-stage2' component={Campaign2Route} />
        <Route exact path='/campaign-stage3' component={AllCampaign3Route} />
        <Route exact path='/campaign-preview' component={Campaign3Route} />
        <Route exact path='/all-links' component={AllLinksRoute} />
        <Route exact path='/leads' component={LeadsRoute} />
        <Route exact path='/polls' component={PollsRoute} />
        <Route exact path='/polls-stage1' component={Polls1Route} />
        <Route exact path='/polls-stage2' component={Polls2Route} />
        <Route exact path='/settings' component={SettingsRoute} />
        <Route
          exact
          path='/settings/integration'
          component={SetIntegrationRoute}
        />
        <Route
          exact
          path='/settings/custom-domain'
          component={SetCustomDomainRoute}
        />

        <Route
          exact
          path='/settings/social-account'
          component={SetSocialAccountRoute}
        />
      </Switch>
    </div>
  );
}

export default RoutePath;
