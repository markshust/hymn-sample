import { connect } from 'react-redux';
import responseState from 'utils/responseState';
import { todosToggle } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, state) => responseState({
  SHOW_ALL: () => todos,
  SHOW_COMPLETED: () => todos.filter(t => t.completed),
  SHOW_ACTIVE: () => todos.filter(t => !t.completed),
}, state);

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(todosToggle(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
