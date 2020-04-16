import React from 'react';
import './Knight.css'
import { ItemTypes } from '../Constants/Constants';
import { useDrag } from 'react-dnd';

function Knight() {
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <div ref={drag} style={{opacity: isDragging ? 0.5 : 1}} className='knight-container'>♘</div>
    )
}


export default Knight; 