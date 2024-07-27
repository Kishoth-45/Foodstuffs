import React, { useEffect } from 'react';
import { Outlet, Link, json } from 'react-router-dom';
import '../index.css';

export const Navbar = () => {
  useEffect(() => {
    const all = document.querySelector('.all');
    const allproducts = document.querySelector('.allproducts');
    const pagehead=document.querySelector('.pagehead');
    const categoryhead=document.querySelector('.categoryhead');
    const pages=document.querySelector('.pages');
    const category=document.querySelector('.category');
    const homebody=document.querySelector('.homebody');

    const menubtn=document.querySelector('.menubtn'); 
    const menulist=document.querySelector('.menulist'); 
    const menucancel=document.querySelector('.menucancel'); 
  
    const menuapbtn=document.querySelector('.menuapbtn');
    const menupagebtn=document.querySelector('.menupagebtn');
    const menucatbtn=document.querySelector('.menucatbtn');

    const menuap=document.querySelector('.menuap');
    const menupage=document.querySelector('.menupage');
    const menucat=document.querySelector('.menucat')

    const allhandleclick = (event) => {
      event.preventDefault();
      allproducts.classList.toggle('alltool');
      pages.classList.remove('pagetool');
      category.classList.remove('categorytool');
    };
    const pagehandleclick = (event) => {
      event.preventDefault();
      pages.classList.toggle('pagetool');
      allproducts.classList.remove('alltool');
      category.classList.remove('categorytool');
    };
    const categoryhandleclick = (event) => {
      event.preventDefault();
      category.classList.toggle('categorytool');
      allproducts.classList.remove('alltool');
      pages.classList.remove('pagetool');
    };

    const homebodyclick = (event) => {
      event.preventDefault();
      allproducts.classList.remove('alltool');
      pages.classList.remove('pagetool');
      category.classList.remove('categorytool');
      menulist.classList.remove('menushow')
    };


    const menubtnclick = (event) => {
      event.preventDefault();
      menulist.classList.toggle('menushow')

    //   if (!menubtn.classList.contains('fa-bars')) {
    //     menubtn.classList.add('fa-bars');
    //     menubtn.classList.remove('fa-bars-staggered');
    // } else {
    //     menubtn.classList.add('fa-bars-staggered');
    //     menubtn.classList.remove('fa-bars');
    // }
    
      
    };
     
    const menucancelclick = (event) => {
      event.preventDefault();
      menulist.classList.toggle('menushow')
    };

    const menuapclick = (event) => {
      event.preventDefault();
      menuap.classList.toggle('menuapitem')
      menupage.classList.remove('menupageitem')
      menucat.classList.remove('menucatitem')

      menuapbtn.classList.toggle('bgbtn')
      menucatbtn.classList.remove('bgbtn')
      menupagebtn.classList.remove('bgbtn')
    };

    const menupageclick = (event) => {
      event.preventDefault();
      menupage.classList.toggle('menupageitem')
      menuap.classList.remove('menuapitem')
      menucat.classList.remove('menucatitem')

      menupagebtn.classList.toggle('bgbtn')
      menuapbtn.classList.remove('bgbtn')
      menucatbtn.classList.remove('bgbtn')

    };

    const menucatclick = (event) => {
      event.preventDefault();
      menucat.classList.toggle('menucatitem')
      menuap.classList.remove('menuapitem')
      menupage.classList.remove('menupageitem')

      menupagebtn.classList.remove('bgbtn')
      menuapbtn.classList.remove('bgbtn')
      menucatbtn.classList.toggle('bgbtn')

    };


    if (all && allproducts) {
      all.addEventListener('click', allhandleclick);
      pagehead.addEventListener('click', pagehandleclick);
      categoryhead.addEventListener('click', categoryhandleclick);
      homebody.addEventListener('click', homebodyclick);

      menubtn.addEventListener('click',menubtnclick);
      menucancel.addEventListener('click',menucancelclick);

      menuapbtn.addEventListener('click',menuapclick);
      menupagebtn.addEventListener('click',menupageclick);
      menucatbtn.addEventListener('click',menucatclick);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (all && allproducts ) {
        all.removeEventListener('click', allhandleclick);
        pagehead.removeEventListener('click', pagehandleclick);
        categoryhead.removeEventListener('click', categoryhandleclick);
        homebody.removeEventListener('click', homebodyclick);

        menubtn.removeEventListener('click',menubtnclick);
        menucancel.removeEventListener('click',menucancelclick);

        menuapbtn.removeEventListener('click',menuapclick);
        menupagebtn.removeEventListener('click',menupageclick);
        menucatbtn.removeEventListener('click',menucatclick);
      }
    };
  }, []);

  return (
    <>
      <div className='mynavbar'>
        <div className='navpart1'>
          <div className='navbrand'>
            <img src="Images/logo.png" alt="logo" width={'105px'} />
          </div>
          <div className='all'>
            All products <i className="bi bi-chevron-down nav-icon-down"></i>
          </div>
          <div className='pagehead'>
            Pages <i className="bi bi-chevron-down nav-icon-down"></i>
          </div>
          <div className='categoryhead'>
            Category <i className="bi bi-chevron-down nav-icon-down"></i>
          </div>
        </div>
        <div className='navpart2'>
          <div className='searchicon'>
            <i className="bi bi-search"></i> Search
          </div>
          <div>
            <img src='Images/user.png' alt="User"  width={'22px'} />
          </div>
          <div>
            My cart <i className="bi bi-cart2"></i>
          </div>
        </div>
        <div className='mininavbar'>
          <div>
           <img src="Images/logo.png" alt="logo" width={'85px'} />
          </div>
          <div>
            <div className='minibar'>
              <div className='search-mini'><i className="bi bi-search"></i> </div>
              <div><i class="fa-regular fa-user"></i></div>
              <div><i className="bi bi-cart2"></i></div>
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
          <div>About us</div>
          <div>Contact us</div>
          <div> Faq's</div>
          <div>Article Page</div>
          <div>Blog Page</div>                
          <div>Category Page</div>
      </div>

      <div className='category cd'>
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

      <Outlet />
    </>
  );
};

export default Navbar;
