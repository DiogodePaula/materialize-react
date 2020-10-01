import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './routeWrappper';

import LoginPage from '../views/login';
import HomePage from '../views/home';

export default () => {
  return (
    <BrowserRouter>
      <Switch />
      <Route path="/" exact component={HomePage} isPrivate />
      <Route path="/login" exact component={LoginPage} />
    </BrowserRouter>
  );
};
