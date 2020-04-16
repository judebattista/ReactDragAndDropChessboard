import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend'
//import Square from '../Square/Square';
import BoardSquare from '../BoardSquare/BoardSquare';
import Knight from '../Knight/Knight';
import  { moveKnight, canMoveKnight } from '../Game/Game';
import './Board.css'

function renderSquare(i, knightPosition) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return <div key={i} className="square-container">
            <BoardSquare x={x} y={y}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
        </div>
}

function renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
        return <Knight />
    }
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