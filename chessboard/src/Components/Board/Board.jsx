import React from 'react';
import Square from '../Square/Square';
import Knight from '../Knight/Knight';

function renderSquare(x, y, [knightX, knightY]) {
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return <Square black={black}>{piece}</Square>
}

export default function Board(knightPosition) {
    return(
        <div className="boardcontainer">
            {renderSquare(0, 0, knightPosition)}
            {renderSquare(1, 0, knightPosition)}
            {renderSquare(2, 0, knightPosition)}
        </div>
    )
}