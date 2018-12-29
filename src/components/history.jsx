import React from 'react';
import { connect } from 'react-redux';
import Move from './move';
import './styles/history.css';

const History = ({ squares }) => (
  <div className="history">
    <div className="title">History:</div>
    { squares && squares.map((square, index) => {
      return <Move square={square} key={square} index={index} />;
    })}
  </div>
);

const mapStateToprops = state => ({
  squares: state.history.squares,
});

export default connect(mapStateToprops, null)(History);
