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
                <a href="" className="btn showbtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.39025 12.636V11.06L14.2425 4.756C15.2525 3.668 15.2525 1.904 14.2425 0.816001C13.2324 -0.272 11.5949 -0.272 10.5848 0.816001L0.539316 11.637C-0.612777 12.878 0.203182 15 1.83249 15H6.19566C7.4077 15 8.39025 13.9416 8.39025 12.636ZM6.92719 11.0601L5.03558 9.02244L1.57385 12.7514C1.34343 12.9996 1.50663 13.424 1.83249 13.424H6.19566C6.59968 13.424 6.92719 13.0712 6.92719 12.636V11.0601ZM6.13287 7.84044L11.6194 1.9304C12.058 1.45787 12.7693 1.45787 13.2079 1.9304C13.6466 2.40294 13.6466 3.16907 13.2079 3.6416L7.72144 9.55164L6.13287 7.84044Z" fill="#CDC6BE"/>
                  </svg> Show More
                </a>
                <a href="" className="btn findbtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.97487 11.0098C8.98031 11.7822 7.73058 12.2422 6Oxygen3724.7751Z" fill="#494949"/>
                  </svg> Find Products
                </a>
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
