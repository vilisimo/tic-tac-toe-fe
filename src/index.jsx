import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>,
  document.getElementById('root'),
);
