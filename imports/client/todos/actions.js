import { createActions } from 'redux-actions';
import { ADD, TOGGLE, SET_VISIBILITY_FILTER } from './constants';

let nextTodoId = 0;

export default createActions({
  [ADD]: text => ({
    id: (nextTodoId += 1).toString(),
    text,
  }),
  [SET_VISIBILITY_FILTER]: filter => ({ filter }),
  [TOGGLE]: id => ({ id }),
});
