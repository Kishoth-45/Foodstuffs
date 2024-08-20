import {React, useState, useEffect} from 'react';
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

    useEffect(() => {
      const allproducts = document.querySelector('.allproducts');
      const pages = document.querySelector('.pages');
      const category = document.querySelector('.category');
      const menulist = document.querySelector('.menulist');
      const mycart = document.querySelector('.mycart');
  
      const allicon = document.querySelector('.all-icon');
      const pageicon = document.querySelector('.page-icon');
      const caticon = document.querySelector('.cat-icon');
  
      const viewbody = document.querySelector('.fooditems');
  
  
      const viewbodyclick = (event) => {
        event.preventDefault();
        menulist.classList.remove('menushow');
        mycart.classList.remove('mycart-show');
      };
  
      const viewbodyover = (event) => {
        event.preventDefault();
        allproducts.classList.remove('alltool');
        category.classList.remove('categorytool');
        pages.classList.remove('pagetool');
        allicon.classList.remove('transform-icon');
        pageicon.classList.remove('transform-icon');
        caticon.classList.remove('transform-icon');
      };
  
      if (viewbody) {
        viewbody.addEventListener('click', viewbodyclick);
        viewbody.addEventListener('mouseover', viewbodyover);
      }
  
      return () => {
        if (viewbody) {
          viewbody.removeEventListener('mouseover', viewbodyover);
          viewbody.removeEventListener('click', viewbodyclick);
        }
      };
    }, []);

  return (
    <>
     <div className='container fooditems p-3 mt-4'>
          <div className='row'>
            <Fooditem addToCart={addToCart} ordernow={ordernow} />
          </div>
        </div>
    </>
  )
}
