import React from 'react';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, IndexRoute, Router, Route } from 'react-router';
import Home from '../home/components/Home';
import TodoApp from '../todos/components/TodoApp';
import Welcome from '../welcome/components/Welcome';
import App from './components/App';
import reducer from './reducers';
import { SHOW_ALL } from '../todos/constants';

const initialState = {
  getVisibleTodos: [],
  todos: [],
  visibilityFilter: SHOW_ALL,
  routing: {},
};
const enhancer = compose(devTools());
const store = createStore(reducer, initialState, enhancer);
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
