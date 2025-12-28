import React from 'react';
import './Bottle.css'
const Bottle = ({bottle,handleAddToCart}) => {
    const {img,name,price,stock} = bottle
    return (
        <div className='card bottle'>
            <h1>name: {name}</h1>
            <img src={img}></img>
            <p>$: {price}</p>
            <p>Available: {stock}</p>
            <button onClick={()=> handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;