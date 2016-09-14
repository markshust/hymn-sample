import renderer from 'react-test-renderer';

const componentCheck = (component) => {
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  return {
    component,
    tree,
  };
};

const renderCheck = (children) => {
  const component = renderer.create(children);

  return componentCheck(component);
};

export {
  componentCheck,
  renderCheck,
};
