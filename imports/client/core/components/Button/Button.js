import React, { PropTypes } from 'react';

const Button = ({
  label,
  onClick,
}) => (
  <button onClick={onClick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  label: 'Submit',
};

export default Button;
