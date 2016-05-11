import {
  REQUEST_ROWS,
  RECEIVE_ROWS
} from './../actions/actions.js';

function rows(
  state = {
    isFetching: false,
    rows: []
  }, action) {
  switch (action.type) {
    case REQUEST_ROWS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_ROWS:
      return Object.assign({}, state, {
        isFetching: false,
        rows: action.rows
      });
    default:
      return state;
  }
}

export default rows;
