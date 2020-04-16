import React from 'react';
import Square from '../Square/Square';
import './BoardSquare.css';
import { ItemTypes } from '../Constants/Constants';
import { moveKnight, canMoveKnight } from '../Game/Game';
import { useDrop } from 'react-dnd';

function BoardSquare({x, y, children}) {
    const black = (x  + y) % 2 === 1;
    
    const [{isOver, canDrop}, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(x, y),
        collect: mon => ({
            isOver: !!mon.isOver(),
            canDrop: !!mon.canDrop(),
        }),
    });
    
    return(
        <div ref={drop} className='boardsquare-container'>
            <Square black={black}>
                {children}
            </Square>
            {isOver && (
                <div  classname='droptarget'>
                </div>
            )}
        </div>

    );
};

export default BoardSquare;