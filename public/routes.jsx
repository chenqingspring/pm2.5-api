'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './views/layout';

import Top from './views/top'

import ListPage from './views/list';
import DetailPage from './views/detail';
import NotFound from './views/404';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={ListPage} />
      <Route path='/sort/:sort_by' component={Top} />
      <Redirect from='/gohome' to='/' />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);
