import React from 'react';
import Square from './square';
import './column.css';

const Column = () => (
  <div className="column">
    <Square filler="X" />
    <Square filler="O" />
    <Square filler="X" />
  </div>
);

export default Column;