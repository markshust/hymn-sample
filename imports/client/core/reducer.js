import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import todos from '../todos';

const initialState = Immutable.fromJS({ locationBeforeTransitions: null });
const routerReducer = (state = initialState, action) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({ locationBeforeTransitions: action.payload });
  }

  return state;
};

export default combineReducers({
  [todos.constants.NAME]: todos.reducer,
  routing: routerReducer,
});
