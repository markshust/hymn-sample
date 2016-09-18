import { createActions } from 'redux-actions';
import * as actionTypes from './actionTypes';

let nextTodoId = 0;

export default createActions({
  [actionTypes.ADD]: text => ({
    id: (nextTodoId += 1).toString(),
    text,
  }),
  [actionTypes.SET_VISIBILITY_FILTER]: filter => ({ filter }),
  [actionTypes.TOGGLE]: id => ({ id }),
});
