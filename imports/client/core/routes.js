import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import Home from '../home/components/Home';
import TodoApp from '../todos/components/TodoApp';
import Welcome from '../welcome/components/Welcome';
import App from './components/App';
import reducers from './reducers';

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer,
  })
);

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="welcome" component={Welcome} />
        <Route path="todos" component={TodoApp} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
