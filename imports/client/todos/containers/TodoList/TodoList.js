import { connect } from 'react-redux';
import { todosToggle } from '../../actions';
import TodoList from '../../components/TodoList';
import { getVisibleTodos } from '../../selectors';

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(todosToggle(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
