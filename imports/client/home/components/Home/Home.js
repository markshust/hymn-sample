import React from 'react';
import { compose, pure } from 'recompose';
import { Link } from 'react-router';
import useSheet from 'react-jss';
import styles from './styles';

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/welcome" style={styles.link}>Welcome to Meteor</Link>
    </nav>
  </div>
);

const enhance = compose(
  useSheet(styles),
  pure,
);

export default enhance(Home);
