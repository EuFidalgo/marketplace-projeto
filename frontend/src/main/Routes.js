import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from '../components/home/Home';
import UserCrud from '../components/user/UserCrud';
import cars from '../components/cars/index'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Route path='/vehicles/cars' component={cars} />
        <Redirect from='*' to='/' />
    </Switch> 