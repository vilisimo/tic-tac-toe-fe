import React from 'react';
import { connect } from 'react-redux';
import { getSquares } from '../redux/reducers/history';
import Move from './move';
import './styles/history.css';

export const History = ({ squares }) => (
  <div className="history">
    <div className="title">History:</div>
    { squares && squares.map((square, index) => {
      return <Move key={square} square={square} index={index} />;
    })}
  </div>
);

const mapStateToprops = state => ({
  squares: getSquares(state),
});

export default connect(mapStateToprops, null)(History);
