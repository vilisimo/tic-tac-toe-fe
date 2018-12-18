import React from 'react';
import { connect } from 'react-redux';
import { move } from '../redux/actions/actions';
import './square.css';

const Square = ({ filler, onClick }) => (
  <div className="square" onClick={onClick}>{filler}</div>
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(move())
});

export default connect(null, mapDispatchToProps)(Square);
