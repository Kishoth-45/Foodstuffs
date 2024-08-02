import React, { useState, useEffect } from 'react';
import './productstyle.css';
import { Product } from './product';
import { Mycartcontainer } from './mycart';

export const Home = () => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
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

    const homebody = document.querySelector('.homebody');


    const homebodyclick = (event) => {
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

    if (homebody) {
      homebody.addEventListener('click', homebodyclick);
    }

    return () => {
      if (homebody) {
        homebody.removeEventListener('click', homebodyclick);
      }
    };
  }, []);

  return (
    <>
      <div className='homebody'>
        <div className='banner'>
          <div className='section'>
            <div>
              <div className="section-title">
                <div className="subtitle"><h1> <b>Fruits</b> <br />& Vegetables</h1></div>
              </div>
              <p>Brinjal, also known as eggplant or aubergine, is a plant that belongs to the nightshade family. It is a popular vegetable in many cuisines around the world. Brinjals are typically purple or white in color, and they have a spongy, meaty texture.</p>
              <div className='banner-btns'>
                <div>
                <a href="" className="btn showbtn">
                   Show More
                </a> </div>
                <div>
                <a href="" className="btn findbtn">
                  Find Products
                </a>
                </div>
              </div>
            </div>
            <div className='banner-slide-btn'>
              <div className='i'>
                <i className="fa-solid fa-chevron-left"></i><i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className='i'>
                <i className="fa-solid fa-chevron-right"></i><i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
          <div className='banner-img'>
            <img src="Images/main-banner.png" alt="" />
          </div>
        </div>

        {/* Products */}
        <div className='container p-3 mt-4'>
          <div className='row'>
            <Product addToCart={addToCart} />
          </div>
        </div>
      </div>
    </>
  );
};
