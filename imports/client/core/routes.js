import React from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import Home from 'client/home/components/Home';
import App from './components/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

export default routes;
