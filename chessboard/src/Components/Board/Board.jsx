import React from 'react';
import Square from '../Square/Square';
import Knight from '../Knight/Knight';

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return <div key={i} className="square-container">
            <Square black={black}>{piece}</Square>
        </div>
}

export default function Board({knightPosition}) {
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }
    
    return(
        <div className="board-container">
            {squares}
        </div>
    )
}