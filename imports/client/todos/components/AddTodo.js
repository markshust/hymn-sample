import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { add } from '../actions';

let input;

const AddTodo = ({ onSubmit }) => (
  <div>
    <form
      onSubmit={onSubmit}
    >
      <input ref={(node) => { input = node; }} />
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
);

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const enhance = compose(
  connect(),
  withHandlers({
    onSubmit: ({
      dispatch,
    }) => (e) => {
      e.preventDefault();

      if (input.value.trim()) {
        dispatch(add(input.value));
        input.value = '';
      }
    },
  }),
);

export default enhance(AddTodo);
