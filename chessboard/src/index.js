import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Components/Board/Board';

ReactDOM.render(
  <Board knightPosition={[5, 6]} />,
  document.getElementById('root'),
);

