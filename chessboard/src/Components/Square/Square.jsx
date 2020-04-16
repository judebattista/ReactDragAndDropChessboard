import React from 'react';
import './Square.css'

export default function Square({black, children}){
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'
    return <div className='square' style={{backgroundColor: fill, color: stroke }} >{children}</div>
}