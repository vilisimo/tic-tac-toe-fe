import React from 'react';
import Square from './square';
import './styles/row.css';

const Row = ({ row }) => (
  <div className="row">
    <Square number={row * 3} x={1} y={row + 1} />
    <Square number={row * 3 + 1} x={2} y={row + 1} />
    <Square number={row * 3 + 2} x={3} y={row + 1} />
  </div>
);

export default Row;
