import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart } from '../../js/LocalStorage';
const Bottles = ({bottlesPromise}) => {
    const [cart,setCart] = useState([])
    const bottles = use(bottlesPromise)
    // console.log(cart)
    useEffect(()=>{
        const storedCartIds = getStoreCart()
        console.log(storedCartIds,bottles)
        const storedCart = []
        for(const id of storedCartIds){
            console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id)
            if(cartBottle){
                storedCart.push(cartBottle)
            }
        }
        setCart(storedCart)
    },[bottles])
    const handleAddToCart = (bottle) => {
        // console.log(id)
        const newCart = [...cart,bottle]
        setCart(newCart)

        // save the bottle id in the storage
        addToStoreCart(bottle.id)
    }
    return (
        <div>
            <h1>Bottle Name: {bottles.length}</h1>
            <p>a: {cart.length}</p>
            {
                cart.map(p=> <p key={p.id} >{p.name}</p>)
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