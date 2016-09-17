import React from 'react';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import Home from 'client/home/components/Home';
import Welcome from 'client/welcome/components/Welcome';
import App from './components/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="welcome" component={Welcome} />
    </Route>
  </Router>
);

export default routes;
