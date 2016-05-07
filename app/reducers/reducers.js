export default function counter(state, action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return Object.assign({}, state, {
        counterValue: state.counterValue + 1
      });
    default:
      return state;
  }
}
