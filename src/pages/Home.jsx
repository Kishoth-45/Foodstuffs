import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './productstyle.css';
import { Product } from './product';

export const Home = () => {

  const [cartItems, setCartItems] = useState([]);
  const [orderitems, setOrderitems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const ordernow = (product) => {
    setOrderitems([...orderitems, product])
  }
  const navigate = useNavigate()

  const seemore = () => {
    navigate('/fooditems')
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

    const homebody = document.querySelector('.homebody');


    const homebodyclick = (event) => {
      event.preventDefault();
      menulist.classList.remove('menushow');
      mycart.classList.remove('mycart-show');
    };

    const homebodyover = (event) => {
      event.preventDefault();
      allproducts.classList.remove('alltool');
      category.classList.remove('categorytool');
      pages.classList.remove('pagetool');
      allicon.classList.remove('transform-icon');
      pageicon.classList.remove('transform-icon');
      caticon.classList.remove('transform-icon');
    };

    if (homebody) {
      homebody.addEventListener('click', homebodyclick);
      homebody.addEventListener('mouseover', homebodyover);
    }

    return () => {
      if (homebody) {
        homebody.removeEventListener('mouseover', homebodyover);
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
            <Product addToCart={addToCart} ordernow={ordernow} />
          </div>
        </div>

        <div className='see-more'>
          <div className='see-more-btn' onClick={seemore}>
            <i className="fa-solid fa-angles-right me-1"></i>See More
          </div>
        </div>


        {/* email signin */}

        <div className='subscribe'>
          <div className='subscribe-details'>
            <div className='subscribe-logo'>FoodStuffs</div>
            <div className='subscribe-head'>Subscribe newsletter</div>
            <div className='subscribe-head-2'>and get -20% off</div>
            <p>Grapes are a good source of vitamin C, potassium, and fiber. 
            They are also a good source of antioxidants, including resveratrol, 
            which has been linked to a reduced risk of heart disease and cancer.</p>
          </div>

          <div className='subscribe-email'>
            <div>Type Your Email:</div>
            <div className='subscribe-input'>
            <div className='subscribe-input-box'><input type="text" placeholder='Enter Email address...' /></div>
            <div><button>Subscribe</button></div> </div>
          </div>
        </div>

        {/* footer */}
        <div className='footer'>

          <div className='footer-logo'>
            <img src="Images/foodlogo.svg" alt="foodlogo" width={'130px'} />
            <h3>  Fresh fruits & <br />
              vegetables</h3>
            <div className='mt-3'>
              Strawberries are a good source of vitamin C, potassium, and fiber. They are also a good source of antioxidants, including ellagic acid, which has been linked to a reduced risk of cancer.
            </div>
          </div>

          <div className='footer-shop'>
            <h2> Shop</h2>
            <div>Search</div>
            <div>Privacy Policy</div>
            <div>Shipping & Delivery</div>
            <div>Terms & Conditions</div>
          </div>

          <div className='footer-account'>
            <h2>Account</h2>
            <div>About us</div>
            <div>Contact us</div>
            <div>Faq's</div>
            <div>Article Page</div>
            <div>Blog Page</div>
            <div>Category Page</div>
          </div>

          <div className='footer-share'>
            <h2>Share</h2>
            <div>
              Social sharing describes when social media users broadcast web content on a
              social network to their connections
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
