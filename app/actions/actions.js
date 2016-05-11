import axios from 'axios';

export const REQUEST_ROWS = 'REQUEST_ROWS';
export const RECEIVE_ROWS = 'RECEIVE_ROWS';

function requestRows() {
  return {
    type: REQUEST_ROWS
  };
}

function receiveRows(rows) {
  const res = {
    type: RECEIVE_ROWS,
    rows: { rows }
  };

  return res;
}

function fetchRows() {
  return dispatch => {
    dispatch(requestRows());
    return axios.get('/contacts/1')
      .then(response => response.data)
      .then(json => dispatch(receiveRows(json)));
  };
}

function shouldFetchRows(state) {
  return !state.isFetching;
}

export function fetchRowsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchRows(getState())) {
      return dispatch(fetchRows());
    }

    return null;
  };
}
