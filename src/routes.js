import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import routes from './constants/routes';
import Demo from './pages/Demo';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import NotFound from './pages/NotFound';
import Chart from './pages/Chart';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={routes.home} />} />
      <Route exact path={routes.home} component={Home} />
      <Route exact path="/demo" component={Demo} />
      <Route exact path={routes.chart} component={Chart} />
      <Route exact path={routes.profile.index} component={Profile} />
      <Route exact path={routes.profile.edit} component={EditProfile} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
