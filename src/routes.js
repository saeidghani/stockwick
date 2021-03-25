import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Demo from './pages/Demo';
import Home from './pages/Home';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import NotFound from './pages/NotFound';
import Chart from './pages/Chart';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/chart" component={Chart} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/profile/edit" component={EditProfile} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
