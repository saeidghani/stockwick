import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Demo from './pages/Demo';
import Home from './pages/Home';
import HomeAuth from './pages/HomeAuth';
import NotFound from './pages/NotFound';
import Chart from './pages/Chart';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/home-auth" component={HomeAuth} />
      <Route exact path="/demo" component={Demo} />
      <Route exact path="/chart" component={Chart} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
