const responseState = (response, ...state) => (
  response[state] ? response[state]() : state
);

export default responseState;
