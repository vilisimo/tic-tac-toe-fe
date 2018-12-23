import React from 'react';
import Square from './square';
import './styles/row.css';

const Column = ({ row }) => (
  <div className="row">
    <Square number={row * 3} />
    <Square number={row * 3 + 1} />
    <Square number={row * 3 + 2} />
  </div>
);

export default Column;