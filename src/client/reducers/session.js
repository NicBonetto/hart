function session(state = { session: false }, action) {
  switch (action.type) {
    case 'SESSION_STARTED':
      return Object.assign({}, { session: true }, action.payload);
    case 'SESSION_ENDED':
      return Object.assign({}, { session: false });
    default:
      return state;
  }
}

export default session;