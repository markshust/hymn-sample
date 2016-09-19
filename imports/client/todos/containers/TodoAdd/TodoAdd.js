import { connect } from 'react-redux';
import { todosAdd } from '../../actions';
import TodoAdd from '../../components/TodoAdd';

const mapDispatchToProps = dispatch => ({
  onSubmit: todo => dispatch(todosAdd(todo)),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(TodoAdd);
