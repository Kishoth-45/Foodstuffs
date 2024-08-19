import React, { useEffect,useState } from 'react';
import { Outlet, Link, json, useNavigate } from 'react-router-dom';
import '../index.css';
import useUserImage from './userimage';

export const Navbar = () => {
const userImage = useUserImage();
   
  useEffect(() => {
    const navbar = document.querySelector('.mynavbar');
    let lastScrollTop = 0;

    const handleScroll = () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    };

    const handleKeyUp = (event) => {
      if (event.key === 'PageUp') {
        navbar.classList.remove('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);


  useEffect(() => {
    const all = document.querySelector('.all');
    const allproducts = document.querySelector('.allproducts');
    const pagehead = document.querySelector('.pagehead');
    const categoryhead = document.querySelector('.categoryhead');
    const pages = document.querySelector('.pages');
    const category = document.querySelector('.category');

    const menubtn = document.querySelector('.menubtn');
    const menulist = document.querySelector('.menulist');
    const menucancel = document.querySelector('.menucancel');


    const allicon=document.querySelector('.all-icon');
    const pageicon=document.querySelector('.page-icon');
    const caticon=document.querySelector('.cat-icon');


    const allhandleclick = (event) => {
      event.preventDefault();
      allproducts.classList.toggle('alltool');
      pages.classList.remove('pagetool');
      category.classList.remove('categorytool');
      allicon.classList.toggle('transform-icon');
      pageicon.classList.remove('transform-icon');
      caticon.classList.remove('transform-icon');
    };
    const pagehandleclick = (event) => {
      event.preventDefault();
      pages.classList.toggle('pagetool');
      allproducts.classList.remove('alltool');
      category.classList.remove('categorytool');
      pageicon.classList.toggle('transform-icon');
      allicon.classList.remove('transform-icon');
      caticon.classList.remove('transform-icon');
    };
    const categoryhandleclick = (event) => {
      event.preventDefault();
      category.classList.toggle('categorytool');
      allproducts.classList.remove('alltool');
      pages.classList.remove('pagetool');
      caticon.classList.toggle('transform-icon');
      pageicon.classList.remove('transform-icon');
      allicon.classList.remove('transform-icon');
    };

    const menubtnclick = (event) => {
      event.preventDefault();
      menulist.classList.toggle('menushow');
    };

    const menucancelclick = (event) => {
      event.preventDefault();
      menulist.classList.toggle('menushow');
    };

 

    if (all && allproducts) {
      all.addEventListener('mouseover', allhandleclick);
      pagehead.addEventListener('mouseover', pagehandleclick);
      categoryhead.addEventListener('mouseover', categoryhandleclick);

      menubtn.addEventListener('click', menubtnclick);
      menucancel.addEventListener('click', menucancelclick);

    }

    return () => {
      if (all && allproducts) {
        all.removeEventListener('mouseover', allhandleclick);
        pagehead.removeEventListener('mouseover', pagehandleclick);
        categoryhead.removeEventListener('mouseover', categoryhandleclick);

        menubtn.removeEventListener('click', menubtnclick);
        menucancel.removeEventListener('click', menucancelclick);

      }
    };
  });

  return (
    <>
      <div className='mynavbar'>
        <div className='navpart1'>
          <div className='navbrand'> 
          <Link to='/home'> <img src="Images/foodlogo.svg" alt="logo" width={'105px'} /></Link>
          </div>
          <div className='all'>
            All products <i className="fa-solid fa-angle-down nav-icon-down all-icon"></i>
          </div>
          <div className='pagehead'>
            Pages <i className="fa-solid fa-angle-down nav-icon-down page-icon"></i>
          </div>
          <div className='categoryhead'>
            Category <i className="fa-solid fa-angle-down nav-icon-down cat-icon"></i>
          </div>
        </div>
        <div className='navpart2'>
          <div className='searchicon'>
            <i className="bi bi-search"></i> Search
          </div>
        
          <div className='cartbtn'>
           <Link to='/viewcart' className='link'>Cart <i className="bi bi-cart2"></i></Link> 
          </div>
          <div>
          <Link to={`/userprofile`}>
          {userImage?( 
         <img src={userImage} alt="User" className='userimagenavbar' />
          ):(
             <i className="bi bi-person-circle"></i>
          )
        }
          </Link> 
          </div>
        </div>
        <div className='mininavbar'>
          <div>
          <Link to='/home'> <img src="Images/foodlogo.svg" alt="logo" width={'85px'} /></Link>
          </div>
          <div>
            <div className='minibar'>
              <div className='search-mini'><i className="bi bi-search"></i> </div>
              <div><Link to='/userprofile'><i className="fa-regular fa-user"></i></Link> </div>
              <div className='minicartbtn'> <Link to='/viewcart' className='link'><i className="bi bi-cart2"></i></Link></div>
              <div className='menubtn'><i className="fa-solid fa-bars-staggered"></i></div>
              {/* <i className="fa-solid fa-bars-staggered"></i> */}
            </div>
          </div>

        </div>
         
      </div>

      <div className='allproducts'>
       <div className='all-section'>
        <h3>Cookware</h3>
        <div>Bakers</div>
        <div>Bestseller</div>
        <div>Breads</div>
        <div>Cookies</div>
        <div>Slices</div>
        <div>Fruits</div>
        <div>Vegetables</div>
       </div>
      </div>

      <div className='pages'>
          <div className='pages-about'>About us</div>
          <div>Contact us</div>
          <div> Faq's</div>
          <div>Article Page</div>
          <div>Blog Page</div>                
          <div>Category Page</div>
      </div>

      <div className='category'>
        <div>Bakers</div>
        <div>Bestseller</div>
        <div>Breads</div>
        <div>Cookies</div>
        <div>fruits</div>
        <div>Slices</div>
        <div>vegetables</div>
      </div>

      <div className='menulist'>
        <h2>Food Stuffs</h2>
        <div className='menucancel'><i className="fa-solid fa-xmark"></i></div>
        <div className='menuitems'>
        <details>
          <summary>All Products</summary>
          <div>Bakers</div>
          <div>Bestseller</div>
          <div>Breads</div>
          <div>Cookies</div>
          <div>Slices</div>
          <div>Fruits</div>
          <div>Vegetables</div>
          </details>
          <details>
            <summary>Pages</summary>
            <div>About us</div>
            <div>Contact us</div>
            <div> Faq's</div>
            <div>Article Page</div>
            <div>Blog Page</div>                
            <div>Category Page</div>
          </details>
          <details>
            <summary>Category</summary>
            <div>Bakers</div>
            <div>Bestseller</div>
            <div>Breads</div>
            <div>Cookies</div>
            <div>fruits</div>
            <div>Slices</div>
            <div>vegetables</div>
          </details>
        </div>

      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
