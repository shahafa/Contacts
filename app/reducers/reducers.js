import {
  REQUEST_ROWS,
  RECEIVE_ROWS,
  CLEAR_ROWS,
  SET_SEARCH_QUERY,
  OPEN_CARD,
  CLOSE_CARD
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
      if (action.rows.length > 0) {
        return Object.assign({}, state, {
          isFetchingRows: false,
          rows: [...state.rows, ...action.rows],
          rowsPage: state.rowsPage + 1
        });
      }

      return Object.assign({}, state, {
        isFetchingRows: false
      });

    case CLEAR_ROWS:
      return Object.assign({}, state, {
        rows: [],
        rowsPage: 0
      });

    case OPEN_CARD:
      return Object.assign({}, state, {
        cardDetails: action.cardDetails,
        showCard: action.showCard
      });

    case CLOSE_CARD:
      return Object.assign({}, state, {
        showCard: action.showCard
      });

    default:
      return state;
  }
}

export default rows;
