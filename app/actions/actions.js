import axios from 'axios';

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const REQUEST_ROWS = 'REQUEST_ROWS';
export const RECEIVE_ROWS = 'RECEIVE_ROWS';
export const CLEAR_ROWS = 'RELOAD_ROWS';

export function setSearchQuery(searchQuery) {
  return {
    type: SET_SEARCH_QUERY,
    searchQuery
  };
}

function requestRows() {
  return {
    type: REQUEST_ROWS
  };
}

function receiveRows(rows) {
  const res = {
    type: RECEIVE_ROWS,
    rows
  };

  return res;
}

export function fetchRows() {
  return (dispatch, getState) => {
    if (getState().isFetchingRows) {
      return null;
    }

    dispatch(requestRows());

    return axios.get(`/contacts?page=${getState().rowsPage}&count=100&query=${getState().searchQuery}`)
      .then(response => response.data)
      .then(json => dispatch(receiveRows(json)));
  };
}

export function clearRows() {
  return {
    type: CLEAR_ROWS
  };
}
