import { connect } from 'react-redux';
import { todosSetVisibilityFilter } from '../../actions';
import TodoFilterLink from '../../components/TodoFilterLink';
import { NAME } from '../../constants';

const mapStateToProps = (state, props) => ({
  isActive: props.filter === state.get(NAME).get('visibilityFilter'),
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(todosSetVisibilityFilter(props.filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilterLink);
