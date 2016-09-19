import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

const Link = ({
  children,
  href,
  onClick,
}) => (
  <a
    href={href}
    onClick={onClick}
  >
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

const enhance = compose(
  withHandlers({
    onClick: ({
      id,
      onClick,
    }) => (event) => {
      event.preventDefault();

      if (onClick) onClick(id);
    },
  })
);

export default enhance(Link);
