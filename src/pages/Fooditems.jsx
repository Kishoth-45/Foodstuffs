import {React, useState} from 'react';
import './productstyle.css';
import { Fooditem } from './product';

export const Fooditems = () => {
    const [cartItems, setCartItems] = useState([]);
    const [orderitems, setOrderitems] = useState([])
  
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    const ordernow = (product) => {
      setOrderitems([...orderitems, product])
    }

  return (
    <>
     <div className='container p-3 mt-4'>
          <div className='row'>
            <Fooditem addToCart={addToCart} ordernow={ordernow} />
          </div>
        </div>
    </>
  )
}
