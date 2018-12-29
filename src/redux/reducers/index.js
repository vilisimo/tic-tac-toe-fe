import { combineReducers } from 'redux';
import moves from './moves';
import history from './history';

export default combineReducers({ moves, history });
