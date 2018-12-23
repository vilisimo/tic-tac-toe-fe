import React from 'react';
import Square from './square';
import './styles/row.css';

const Column = () => (
  <div className="row">
    <Square filler="X" />
    <Square filler="O" />
    <Square filler="X" />
  </div>
);

export default Column;