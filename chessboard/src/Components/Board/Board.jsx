import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend'
import Square from '../Square/Square';
import Knight from '../Knight/Knight';
import  { moveKnight, canMoveKnight } from '../Game/Game';
import './Board.css'

function renderSquare(i, knightPosition) {
    const knightX =  knightPosition[0];
    const knightY = knightPosition[1];
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const isKnightHere = knightX === x && knightY === y;
    const piece = isKnightHere ? <Knight /> : null;

    return <div onClick={() => handleSquareClick(x,y)} className="square-container">
            <Square black={black}>{piece}</Square>
        </div>
}

function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY);
    }
}

//export default function Board({knightPosition}) {
function Board({knightPosition}){
    const squares = [];
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition));
    }
    
    return(
        <DndProvider backend={Backend}>
            <div className='board-container'>
                {squares}
            </div>
        </DndProvider>
    )
}

export default Board