import React, { PropTypes } from 'react';

const Button = ({
  label,
  onClick,
}) => (
  <button onClick={onClick}>{label || 'Submit'}</button>
);

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
