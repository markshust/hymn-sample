import { createAction } from 'redux-actions';
import * as actionTypes from './actionTypes';

let nextTodoId = 0;

export const add = createAction(actionTypes.ADD, text => ({
  id: (nextTodoId += 1).toString(),
  text,
}));
export const setVisibilityFilter = createAction(actionTypes.SET_VISIBILITY_FILTER);
export const toggle = createAction(actionTypes.TOGGLE);
