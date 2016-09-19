import { createSelector } from 'reselect';
import { compose } from 'ramda';
import get from 'lodash/get';
import { NAME, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED } from './constants';
import { filterActive, filterCompleted } from './model';

const getAll = state => state[NAME].todos;
const getVisibilityFilter = state => state[NAME].visibilityFilter;
const getActive = compose(filterActive, getAll);
const getCompleted = compose(filterCompleted, getAll);

const getVisibleTodos = createSelector([
  getActive,
  getAll,
  getCompleted,
  getVisibilityFilter,
], (activeTodos, allTodos, completedTodos, visibilityFilter) => get({
  [SHOW_ALL]: allTodos,
  [SHOW_COMPLETED]: completedTodos,
  [SHOW_ACTIVE]: activeTodos,
}, visibilityFilter));

export default {
  getVisibleTodos,
};
