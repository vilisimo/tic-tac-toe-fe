import React from 'react';
import { connect } from 'react-redux';
import { thunkedMove } from '../redux/actions/actions';
import './styles/square.css';

const Square = ({ filler, onClick }) => (
  <div className="square" onClick={onClick}>{filler}</div>
);

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(thunkedMove())
});

export default connect(null, mapDispatchToProps)(Square);
