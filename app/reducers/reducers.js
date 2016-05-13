import {
  REQUEST_ROWS,
  RECEIVE_ROWS,
  CLEAR_ROWS,
  SET_SEARCH_QUERY
} from '../actions/actions.js';

function rows(state, action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        searchQuery: action.searchQuery,
      });
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
    case CLEAR_ROWS:
      return Object.assign({}, state, {
        rows: [],
        rowsPage: 0
      });
    default:
      return state;
  }
}

export default rows;
