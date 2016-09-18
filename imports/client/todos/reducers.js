import { handleActions } from 'redux-actions';
import * as actionTypes from './actionTypes';

const todo = handleActions({
  [actionTypes.ADD]: (state, action) => ({
    id: action.payload.id,
    text: action.payload.text,
    completed: false,
  }),
  [actionTypes.TOGGLE]: (state, action) => (
    state.id !== action.payload.id
      ? state
      : {
        ...state,
        completed: !state.completed,
      }
  ),
});

const todos = handleActions({
  [actionTypes.ADD]: (state, action) => ([
    ...state,
    todo(undefined, action),
  ]),
  [actionTypes.TOGGLE]: (state, action) => state.map(t => todo(t, action)),
}, []);

const visibilityFilter = handleActions({
  [actionTypes.SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter,
}, 'SHOW_ALL');

export default {
  todos,
  visibilityFilter,
};
