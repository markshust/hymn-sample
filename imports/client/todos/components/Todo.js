import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

const Todo = ({
  completed,
  onClick,
  text,
}) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool,
  id: PropTypes.string,
  text: PropTypes.string,
};

const enhance = compose(
  withHandlers({
    onClick: ({
      id,
      onClick,
    }) => () => onClick(id),
  })
);

export default enhance(Todo);
