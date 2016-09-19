import { connect } from 'react-redux';
import { todosAdd } from '../../actions';
import AddTodo from '../../components/AddTodo';

const mapDispatchToProps = dispatch => ({
  onSubmit: todo => dispatch(todosAdd(todo)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(AddTodo);
