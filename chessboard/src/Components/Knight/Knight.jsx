import React from 'react';
import './Knight.css'
import KnightImage from '../KnightImage/KnightImage';
import { ItemTypes } from '../Constants/Constants';
import { useDrag, DragPreviewImage } from 'react-dnd';

function Knight() {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })

    return (
        <>
            <DragPreviewImage connect={preview} src={KnightImage} />
            <div ref={drag} style={{opacity: isDragging ? 0.5 : 1}} className='knight-container'>♘</div>
        </>
    )

}


export default Knight 