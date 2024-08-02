import React, { useEffect,useState } from 'react';
import { Outlet, Link, json } from 'react-router-dom';
import '../index.css';
import { Mycartcontainer } from './mycart';

export const Navbar = () => {

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

    const menuapbtn = document.querySelector('.menuapbtn');
    const menupagebtn = document.querySelector('.menupagebtn');
    const menucatbtn = document.querySelector('.menucatbtn');

    const menuap = document.querySelector('.menuap');
    const menupage = document.querySelector('.menupage');
    const menucat = document.querySelector('.menucat');

    const mycart = document.querySelector('.mycart');
    const mycartcancel = document.querySelector('.mycart-cancel');
    const cartbtn = document.querySelector('.cartbtn');
    const minicartbtn = document.querySelector('.minicartbtn');

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

    const menuapclick = (event) => {
      event.preventDefault();
      menuap.classList.toggle('menuapitem');
      menupage.classList.remove('menupageitem');
      menucat.classList.remove('menucatitem');

      menuapbtn.classList.toggle('bgbtn');
      menucatbtn.classList.remove('bgbtn');
      menupagebtn.classList.remove('bgbtn');
    };

    const menupageclick = (event) => {
      event.preventDefault();
      menupage.classList.toggle('menupageitem');
      menuap.classList.remove('menuapitem');
      menucat.classList.remove('menucatitem');

      menupagebtn.classList.toggle('bgbtn');
      menuapbtn.classList.remove('bgbtn');
      menucatbtn.classList.remove('bgbtn');
    };

    const menucatclick = (event) => {
      event.preventDefault();
      menucat.classList.toggle('menucatitem');
      menuap.classList.remove('menuapitem');
      menupage.classList.remove('menupageitem');

      menupagebtn.classList.remove('bgbtn');
      menuapbtn.classList.remove('bgbtn');
      menucatbtn.classList.toggle('bgbtn');
    };

    const cartcancelclick = (e) => {
      e.preventDefault();
      mycart.classList.remove('mycart-show');
    };

    const cartbtnclick = (e) => {
      e.preventDefault();
      mycart.classList.toggle('mycart-show');
    };

    const minicartbtnclick = (e) => {
      e.preventDefault();
      mycart.classList.toggle('mycart-show');
    };

    if (all && allproducts) {
      all.addEventListener('click', allhandleclick);
      pagehead.addEventListener('click', pagehandleclick);
      categoryhead.addEventListener('click', categoryhandleclick);

      menubtn.addEventListener('click', menubtnclick);
      menucancel.addEventListener('click', menucancelclick);

      menuapbtn.addEventListener('click', menuapclick);
      menupagebtn.addEventListener('click', menupageclick);
      menucatbtn.addEventListener('click', menucatclick);

      cartbtn.addEventListener('click', cartbtnclick);
      minicartbtn.addEventListener('click', minicartbtnclick);
      mycartcancel.addEventListener('click', cartcancelclick);
    }

    return () => {
      if (all && allproducts) {
        all.removeEventListener('click', allhandleclick);
        pagehead.removeEventListener('click', pagehandleclick);
        categoryhead.removeEventListener('click', categoryhandleclick);

        menubtn.removeEventListener('click', menubtnclick);
        menucancel.removeEventListener('click', menucancelclick);

        menuapbtn.removeEventListener('click', menuapclick);
        menupagebtn.removeEventListener('click', menupageclick);
        menucatbtn.removeEventListener('click', menucatclick);

        cartbtn.removeEventListener('click', cartbtnclick);
        minicartbtn.removeEventListener('click', minicartbtnclick);
        mycartcancel.removeEventListener('click', cartcancelclick);
      }
    };
  }, [cartItems]);

  return (
    <>
      <div className='mynavbar'>
        <div className='navpart1'>
          <div className='navbrand'> 
          <Link to='/home'> <img src="Images/foodlogo.svg" alt="logo" width={'105px'} /></Link>
          </div>
          <div className='all'>
            All products <i class="fa-solid fa-angle-down nav-icon-down all-icon"></i>
          </div>
          <div className='pagehead'>
            Pages <i class="fa-solid fa-angle-down nav-icon-down page-icon"></i>
          </div>
          <div className='categoryhead'>
            Category <i class="fa-solid fa-angle-down nav-icon-down cat-icon"></i>
          </div>
        </div>
        <div className='navpart2'>
          <div className='searchicon'>
            <i className="bi bi-search"></i> Search
          </div>
          <div>
          <i class="bi bi-person-circle"></i>
          </div>
          <div className='cartbtn'>
            Cart <i className="bi bi-cart2"></i>
          </div>
        </div>
        <div className='mininavbar'>
          <div>
          <Link to='/home'> <img src="Images/foodlogo.svg" alt="logo" width={'85px'} /></Link>
          </div>
          <div>
            <div className='minibar'>
              <div className='search-mini'><i className="bi bi-search"></i> </div>
              <div><i class="fa-regular fa-user"></i></div>
              <div className='minicartbtn'><i className="bi bi-cart2"></i></div>
              <div className='menubtn'><i class="fa-solid fa-bars-staggered"></i></div>
              {/* <i class="fa-solid fa-bars-staggered"></i> */}
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
        <div className='menucancel'><i class="fa-solid fa-xmark"></i></div>
        <div className='menuitems'>
          <div className='menuapbtn'>All Products <i className="bi bi-chevron-down nav-icon-down"></i></div>
          <div className='menuap'>
          <h3>Cookware</h3>
          <div>Bakers</div>
          <div>Bestseller</div>
          <div>Breads</div>
          <div>Cookies</div>
          <div>Slices</div>
          <div>Fruits</div>
          <div>Vegetables</div>
          </div>

          <div className='menupagebtn'>Pages <i className="bi bi-chevron-down nav-icon-down"></i></div>
          <div className='menupage'>
          <div>About us</div>
          <div>Contact us</div>
          <div> Faq's</div>
          <div>Article Page</div>
          <div>Blog Page</div>                
          <div>Category Page</div>
          </div>

        <div className='menucatbtn'>Category <i className="bi bi-chevron-down nav-icon-down"></i></div>
        <div className='menucat'>
        <div>Bakers</div>
        <div>Bestseller</div>
        <div>Breads</div>
        <div>Cookies</div>
        <div>fruits</div>
        <div>Slices</div>
        <div>vegetables</div>
        </div>
        </div>

      </div>


      <div className='mycart'>
      <div className='mycart-header'>
        <div>
          <i className="fa-solid fa-xmark me-3 mycart-cancel"></i> My Cart
        </div>
        <div>{cartItems.length} ITEMS</div>
      </div>
      <div className='mycart-content-parent'>
        <Mycartcontainer cartItems={cartItems} deleteCartItem={deleteCartItem} />
      </div>
      <div className='mycart-footer'>
        <div className='mycart-footer-price'>
          <div>Sub Total</div>
          <div>Rs.500</div>
        </div>
        <div className='proceedcart'>
          <div className='proceed'>
            Proceed to checkout <i className="fa-regular fa-credit-card"></i>
          </div>
          <div className='viewcart mt-1'>
            <div><Link to='/viewcart'>View Cart</Link></div>
            <div className='ms-2 mt-1'>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  

        

      <Outlet />
    </>
  );
};

export default Navbar;
