'use strict';

import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import Layout from './views/layout';
import Top from './views/top'
import Index from './views/index';
import Zone from './views/zone';
import NotFound from './views/404';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Index} />
      <Route path='/sort/:sort_by' component={Top} />
      <Route path='/zones/:city' component={Zone} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);
