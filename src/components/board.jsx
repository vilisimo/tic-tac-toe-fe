import React from 'react';
import Row from './row';
import './styles/board.css';

const Board = () => (
  <div className="board">
    <Row row={0} />
    <Row row={1} />
    <Row row={2} />
  </div>
);

export default Board;
