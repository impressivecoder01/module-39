import React from 'react';
import './Bottle.css'
const Bottle = ({bottle}) => {
    const {img,name} = bottle
    return (
        <div className='card'>
            <h1>name: {name}</h1>
            <img src={img}></img>
        </div>
    );
};

export default Bottle;