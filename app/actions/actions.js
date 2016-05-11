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
    rows
  };

  return res;
}

export function fetchRows() {
  return (dispatch, state) => {
    if (state.isFetchingRows) {
      return null;
    }

    dispatch(requestRows());

    return axios.get(`/contacts/${state.rowsPage}`)
      .then(response => response.data)
      .then(json => dispatch(receiveRows(json)));
  };
}
