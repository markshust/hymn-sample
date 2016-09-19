import React, { PropTypes } from 'react';
import Link from 'client/core/components/Link';

const TodoFilterLink = ({
  children,
  isActive,
  onClick,
}) => (
  isActive ? (
    <span>{children}</span>
  ) : (
    <Link
      href="#"
      onClick={onClick}
    >
      {children}
    </Link>
  )
);

TodoFilterLink.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default TodoFilterLink;
