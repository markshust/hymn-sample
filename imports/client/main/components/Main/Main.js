import React from 'react';
import { pure } from 'recompose';
import Hello from '../../containers/Hello';
import Info from '../Info';

const Main = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);

export default pure(Main);
