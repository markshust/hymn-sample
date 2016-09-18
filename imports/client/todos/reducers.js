import * as actionTypes from './actionTypes';

const todo = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      };
    case actionTypes.TOGGLE:
      if (state.id !== action.payload) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [
        ...state,
        todo(undefined, action),
      ];
    case actionTypes.TOGGLE:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default {
  todos,
  visibilityFilter,
};
