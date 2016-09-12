import renderer from 'react-test-renderer';

const snap = (children) => {
  const component = renderer.create(children);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  return {
    component,
    tree,
  };
};

export {
  snap, // eslint-disable-line import/prefer-default-export
};
