import React from 'react';
import Square from './square';
import './styles/column.css';

const Column = () => (
  <div className="column">
    <Square filler="X" />
    <Square filler="O" />
    <Square filler="X" />
  </div>
);

export default Column;