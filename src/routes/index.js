import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './RouteMap';
import Demo from '../pages/Demo';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import EditProfile from '../pages/EditProfile';
import Stock from '../pages/Stock';
import Feed from '../pages/Feed';
import NotFound from '../pages/NotFound';
import Auth from '../pages/Auth';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={routes.home} />} />
      <Route exact path={routes.home} component={Home} />
      <Route exact path="/demo" component={Demo} />
      <Route exact path={routes.auth.google} component={Auth} />
      <Route exact path={routes.profile.index} component={Profile} />
      <Route exact path={routes.profile.edit} component={EditProfile} />
      <Route exact path={routes.stock.view(':stockId')} component={Stock} />
      <Route exact path={routes.feed.index} component={Feed} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
