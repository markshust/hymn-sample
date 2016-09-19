import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

const ListItem = ({
  children,
  isStriked,
  onClick,
}) => (
  <li
    onClick={onClick}
    style={{ textDecoration: isStriked ? 'line-through' : 'none' }}
  >
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  isStriked: PropTypes.bool,
  onClick: PropTypes.func,
};

const enhance = compose(
  withHandlers({
    onClick: ({
      id,
      onClick,
    }) => () => onClick && onClick(id),
  })
);

export default enhance(ListItem);
