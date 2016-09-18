import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

const Link = ({ active, children, onClick }) => (
  active ? (
    <span>{children}</span>
  ) : (
    <a
      href="#"
      onClick={onClick}
    >
      {children}
    </a>
  )
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const enhance = compose(
  withHandlers({
    onClick: ({ onClick }) => (e) => {
      e.preventDefault();
      onClick();
    },
  })
);

export default enhance(Link);
