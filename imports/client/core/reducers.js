import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todoReducers from '../todos/reducers';

export default combineReducers({
  ...todoReducers,
  routing: routerReducer,
});
