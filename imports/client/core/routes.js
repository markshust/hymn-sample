import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import App from './components/App';
import reducer from './reducer';
import home from '../home';
import todos from '../todos';
import welcome from '../welcome';

const { Home } = home.components;
const { TodoApp } = todos.components;
const { Welcome } = welcome.components;

const enhancer = compose(devTools());
const store = createStore(reducer, {}, enhancer);
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
