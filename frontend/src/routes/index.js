import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from '../home/Home';
import UserCrud from '../user/UserCrud';
import cars from '../cars/index';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UserCrud} />
      <Route path="/vehicles/cars" component={cars} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;