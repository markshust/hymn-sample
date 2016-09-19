import { handleActions } from 'redux-actions';
import responseState from 'utils/responseState';
import { ADD, TOGGLE, SET_VISIBILITY_FILTER, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from './constants';

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

const getVisibleTodos = (allTodos, state) => responseState({
  [SHOW_ALL]: () => allTodos,
  [SHOW_COMPLETED]: () => allTodos.filter(t => t.completed),
  [SHOW_ACTIVE]: () => allTodos.filter(t => !t.completed),
}, state);

export default {
  getVisibleTodos,
  todos,
  visibilityFilter,
};
