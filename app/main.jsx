import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers.js';
import thunkMiddleware from 'redux-thunk';
import GridContainer from './containers/GridContainer.jsx';

const initialState = {
  rows: [],
  isFetching: false
};

const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <GridContainer />
  </Provider>, document.getElementById('content'));
