import React, { PropTypes } from 'react';

const Hello = ({
  counter,
  onClick,
}) => (
  <div>
    <button onClick={onClick}>Click Me</button>
    <p>You've pressed the button {counter} times.</p>
  </div>
);

Hello.propTypes = {
  counter: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default Hello;
