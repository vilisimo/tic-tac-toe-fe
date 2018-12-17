import React from 'react';
import Column from './column';
import './board.css';

const Board = () => (
  <div className="board">
    <Column />
    <Column />
    <Column />
  </div>
);

export default Board;
