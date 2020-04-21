import React from 'react';
import './Overlay.css';

const Overlay = ({ color }) => {
    return (
        <div className = 'overlay-container' style ={{backgroundColor:color}}></div>
    )
}

export default Overlay