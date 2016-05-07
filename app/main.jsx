import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CounterContainer from './containers/CounterContainer.jsx';
import reducers from './reducers/reducers.js';

const store = createStore(reducers, { counterValue: 0 });

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>, document.getElementById('content'));
