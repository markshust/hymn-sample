import { configure, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

const req = require.context('../imports/client', true, /stories\/.*\.js/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

addDecorator(withKnobs);

configure(loadStories, module);
