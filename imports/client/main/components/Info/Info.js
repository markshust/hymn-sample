import React from 'react';
import { pure } from 'recompose';

const Info = () => (
  <div>
    <h2>Learn Meteor!</h2>
    <ul>
      <li><a href="https://www.meteor.com/try" target="_blank" rel="noopener noreferrer">Do the Tutorial</a></li>
      <li><a href="http://guide.meteor.com" target="_blank" rel="noopener noreferrer">Follow the Guide</a></li>
      <li><a href="https://docs.meteor.com" target="_blank" rel="noopener noreferrer">Read the Docs</a></li>
      <li><a href="https://forums.meteor.com" target="_blank" rel="noopener noreferrer">Discussions</a></li>
    </ul>
  </div>
);

export default pure(Info);
