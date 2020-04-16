import React from 'react';

let knightPosition = [1,7]
let observer = null

function emitChange() {
    observer(knightPosition)
}

export function observe(o) {
    if(observer) {
        throw new Error('Multiple observers not implemented.')
    }

    observer = o
    emitChange()
}

export function moveKnight(toX, toY) {
    knightPosition = [toX, toY]
    emitChange()
}

export function canMoveKnight(toX, toY) {
    const [x, y] = knightPosition;
    const dx = Math.abs(toX - x);
    const dy = Math.abs(toY - y);

    return(
        dx === 2 && dy === 1 || dx === 1 && dy === 2
    );


}

// export function observe(receive) {
//     const randPos = () => Math.floor(Math.random()*8)
//     setInterval(() => receive([randPos(), randPos()]), 500)
// }