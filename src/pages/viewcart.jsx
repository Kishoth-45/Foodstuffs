import {React,useEffect, useState} from 'react';
import { Mycartcontainer } from './mycart';
import './productstyle.css';

export const Viewcart = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const deleteCartItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const allproducts = document.querySelector('.allproducts');
    const pages = document.querySelector('.pages');
    const category = document.querySelector('.category');
    const menulist = document.querySelector('.menulist');
    const mycart = document.querySelector('.mycart');

    const allicon=document.querySelector('.all-icon');
    const pageicon=document.querySelector('.page-icon');
    const caticon=document.querySelector('.cat-icon');

    const viewbody=document.querySelector('.viewbody')

    const viewbodyclick = (event) => {
      event.preventDefault();
      allproducts.classList.remove('alltool');
      category.classList.remove('categorytool');
      pages.classList.remove('pagetool');
      menulist.classList.remove('menushow');
      mycart.classList.remove('mycart-show');
      allicon.classList.remove('transform-icon');
      pageicon.classList.remove('transform-icon');
      caticon.classList.remove('transform-icon');
    };

    if (viewbody) {
      viewbody.addEventListener('click', viewbodyclick);
    }

    return () => {
      if (viewbody) {
        viewbody.removeEventListener('click', viewbodyclick);
      }
    };
  }, []);

  // Calculate the total price by ensuring each item price is a number
  
  return (
    <>
    <div className='viewbody p-5'>
      <div>
        Continue To Shopping
      </div>
      <div className='mt-2 mb-3'>
        <h3>YOUR CART</h3>
      </div>

    <div className='viewmycart'>
      <div className='viewpart1'>
      
      <div className='viewcart-content-parent'>
      <Mycartcontainer cartItems={cartItems} deleteCartItem={deleteCartItem} />
      </div>
      </div>
      <div className='viewmycart-footer'>
        <div className='viewmycart-footer-price'>
          <div>Sub Total</div>
          <div>Rs.1000</div>
        </div>
        <div>
        Taxes and shipping calculated at checkout
        </div>
        <div className='proceedcart'>
          <div className='proceed'>
            Proceed to checkout <i className="fa-regular fa-credit-card"></i>
          </div>
         
        </div>
      </div>
    </div>

    </div>

    </>
    
  );
}
