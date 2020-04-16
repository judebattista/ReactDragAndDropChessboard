import React from 'react';
import Square from '../Square/Square';
import Knight from '../Knight/Knight';

export default function Board() {
    return(
        <div>
            <Square black>
                <Knight />
            </Square>
        </div>
    )
}