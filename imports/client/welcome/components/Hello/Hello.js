import React, { PropTypes } from 'react';
import Button from 'client/core/components/Button';

const Hello = ({
  counter,
  onClick,
}) => (
  <div>
    <Button
      label="Click Me"
      onClick={onClick}
    />
    <p>You've pressed the button {counter} times.</p>
  </div>
);

Hello.propTypes = {
  counter: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Hello;
