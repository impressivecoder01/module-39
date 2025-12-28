import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([])
    const bottles = use(bottlesPromise)
    console.log(cart)
    const handleAddToCart = (bottle) => {
        // console.log(id)
        const newCart = [...cart,bottle]
        setCart(newCart)
    }
    return (
        <div>
            <h1>Bottle Name: {bottles.length}</h1>
            <p>a: {cart.length}</p>
            {
                cart.map(p=> <p>{p.name}</p>)
            }
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