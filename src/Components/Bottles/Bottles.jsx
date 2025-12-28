import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([])
    const bottles = use(bottlesPromise)
    const handleAddToCart = (id) => {
        console.log(id)
        const newCart = [...cart,id]
        setCart(newCart)
    }
    return (
        <div>
            <h1>Bottle Name: {bottles.length}</h1>
            <p>a: {cart}</p>
            <div className='bottle-container'>
                {
                bottles.map(bottle=> <Bottle 
                    handleAddToCart={handleAddToCart} 
                    key={bottle.id} 
                    bottle={bottle}></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;