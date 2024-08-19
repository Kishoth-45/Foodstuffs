import React, { useEffect, useState } from 'react';
import { Mycartcontainer } from './mycart';
import './productstyle.css';

export const Viewcart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchproducts=()=>{
    fetch('http://localhost:3001/products')
    .then(response => response.json())
    .then(data => setCartItems(data))
    .catch(error => console.error('Error fetching products:', error));
  }

  useEffect(() => {
    fetchproducts();
  }, []);

  const deleteCartItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const updateCartItemSize = (index, newProductNumber) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = newProductNumber;
      return updatedItems;
    });
  };

  useEffect(() => {
    const viewbody = document.querySelector('.viewbody');

    const viewbodyclick = (event) => {
      event.preventDefault();
      const allproducts = document.querySelector('.allproducts');
      const pages = document.querySelector('.pages');
      const category = document.querySelector('.category');
      const menulist = document.querySelector('.menulist');
      const mycart = document.querySelector('.mycart');
      const allicon = document.querySelector('.all-icon');
      const pageicon = document.querySelector('.page-icon');
      const caticon = document.querySelector('.cat-icon');

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

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.Price) || 0;
      const itemQuantity = parseInt(item.quantity, 10) || 1;
      return total + itemPrice * itemQuantity;
    }, 0);
  };

  const carttotalprice = calculateTotalPrice();

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
              <Mycartcontainer cartItems={cartItems} deleteCartItem={deleteCartItem} updateCartItemSize={updateCartItemSize} />
            </div>
          </div>
          <div className='viewmycart-footer'>
            <div className='viewmycart-footer-price'>
              <div>Sub Total</div>
              <div>{carttotalprice.toFixed(2)}</div>
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
};
