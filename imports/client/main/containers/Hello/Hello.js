import { compose, mapProps, withState } from 'recompose';
import Hello from '../../components/Hello';

const enhance = compose(
  withState('counter', 'incCounter', 0),
  mapProps(({ incCounter, ...rest }) => ({
    onClick: () => incCounter(n => n + 1),
    ...rest,
  })),
);

export default enhance(Hello);
