import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers.js';
import thunkMiddleware from 'redux-thunk';
import App from './components/App.jsx';

const initialState = {
  rows: [],
  rowsPage: 0,
  isFetchingRows: false,
  searchQuery: '',
  showCard: false
};

const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
