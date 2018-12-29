import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
