import { combineReducers } from 'redux-immutable';
import { handleActions } from 'redux-actions';
import { ADD, SET_VISIBILITY_FILTER, SHOW_ALL, TOGGLE } from './constants';

const todo = handleActions({
  [ADD]: (state, action) => ({
    id: action.payload.id,
    text: action.payload.text,
    completed: false,
  }),
  [TOGGLE]: (state, action) => (
    state.id !== action.payload.id
      ? state
      : {
        ...state,
        completed: !state.completed,
      }
  ),
});

const todos = handleActions({
  [ADD]: (state, action) => ([
    ...state,
    todo(undefined, action),
  ]),
  [TOGGLE]: (state, action) => state.map(t => todo(t, action)),
}, []);

const visibilityFilter = handleActions({
  [SET_VISIBILITY_FILTER]: (state, action) => action.payload.filter,
}, SHOW_ALL);

export default combineReducers({
  todos,
  visibilityFilter,
});
