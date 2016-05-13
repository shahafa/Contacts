import {
  REQUEST_ROWS,
  RECEIVE_ROWS
} from '../actions/actions.js';

function rows(state, action) {
  switch (action.type) {
    case REQUEST_ROWS:
      return Object.assign({}, state, {
        isFetchingRows: true,
      });
    case RECEIVE_ROWS:
      return Object.assign({}, state, {
        isFetchingRows: false,
        rows: [...state.rows, ...action.rows],
        rowsPage: state.rowsPage + 1
      });
    default:
      return state;
  }
}

export default rows;
