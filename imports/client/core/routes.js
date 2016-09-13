import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import homeRoutes from '/imports/client/home/routes';
import App from './components/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      ${homeRoutes}
    </Route>
  </Router>
);

export default routes;
