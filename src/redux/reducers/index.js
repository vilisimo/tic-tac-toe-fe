import { combineReducers } from 'redux';
import moves from './movesStore';
import history from './history';

export default combineReducers({ moves, history });
