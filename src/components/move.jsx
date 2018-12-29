import React from 'react';
import { connect } from 'react-redux';
import './styles/move.css';
import { getSquareByNumber } from '../redux/reducers/history';

export const Move = ({ index, move: {player, x, y} }) => (
  <div className="move">
    {index + 1}. Player {player} marked ({x}, {y})
  </div>
);

const mapStateToprops = (state, ownProps) => ({
  move: getSquareByNumber(state, ownProps.square)
});

export default connect(mapStateToprops, null)(Move);
