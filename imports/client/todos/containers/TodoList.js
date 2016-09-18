import { connect } from 'react-redux';
import { toggle } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, state) => {
  switch (state) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${state}.`);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggle(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
