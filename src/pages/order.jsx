import React, { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../OrderContext';
import {Link} from 'react-router-dom'

export const Order = () => {


  useEffect(() => {
   
    const menulist = document.querySelector('.menulist');

    const viewbody = document.querySelector('.ordernowpage');


    const viewbodyclick = (event) => {
      event.preventDefault();
      menulist.classList.remove('menushow');
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

  const { order } = useContext(OrderContext);

  if (!order) {
    return <div>No order details available</div>;
  }

  const { Image, Productname, Quantity, Option, Price } = order;

  const [length,setLength]=useState(1)

  const [price,setPrice]=useState(Price)

  const decrease=()=>{
    if (length > 1) {
      const newLength = length - 1;
      setLength(newLength);
      setPrice(Price * newLength);
    }
  }

  const increase=()=>{
    const newlength=length+1
    setLength(newlength)
    setPrice(Price * newlength)
  }

  return (
    <>
    <div className='ordernowpage'>
      <div className='orderlogo'>
       <Link to='/home'>  <img src="Images/foodlogo.svg" alt="logo" width={'105px'} /> </Link>
      </div>
    <div className='ordernowpage-details'>
    
    <div className='orderdetails'>
      <div className='mt-2'>
        <p className='orderdetails-head'>Contact</p>
        <input type="text" placeholder='Email or mobile phone number' />
      </div>
      <div className='mt-5'>
        <p  className='orderdetails-head'>
          Delivery
        </p>
        <div className='mt-2 ordername mb-3'>
          <h3>Name</h3>
        </div>
        <div>
          <select>
            <option value="india">India</option>
            <option value="america">America</option>
            <option value="uk">Uk</option>
            </select>
        </div>
        <div className='mt-2 ordercity'> 
        <div><input type="text" placeholder='city' /></div>
        <div> <input type="number" placeholder='PIN code'/></div>
        </div>
        <div className='mt-2'>
          <textarea name="" id="" cols="70" rows="2" placeholder='Address'></textarea>
        </div>
       
        
      </div>
      <div className='mt-5'>
        <h4  className='orderdetails-head'>Payment</h4>
        <p>All transactions are secure and encrypted.</p>
        <div className='creditcard-box mt-2'>
          <div className='creditcard-header'>
             <div>Credit card</div>
             <div><i className="bi bi-credit-card"></i></div>
          </div>
          <div className='card-inputs'>
            <div>
              <input type="text" placeholder='Card number' />
            </div>
            <div className='card-date'>
                <div>
                 <input type="date" placeholder='Expiration date' />
               </div>
               <div>
                 <input type="text" placeholder='Security code' />
               </div>
            </div>
            <div>
              <input type="text" placeholder='Name on card' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <p  className='orderdetails-head'>Order Summary </p>
        <div className='d-flex mb-2'>
          <div>Item {length} </div> 
         <div className='ms-2'> Subtotal  {price}</div> 
        </div>
        <div className='btn btn-primary paynow'>Pay Now</div>
      </div>
      <div className='mt-3 copyright-ordernow'>
      All rights reserved by Kishoth-45
    </div>

    </div>

    <div className='order-product'>
      <div className='order-img'>
        <img src={Image} alt={Productname} />
      </div>
      <div className='order-details'>
        <div className='order-title'>{Productname}</div>
        <div className='mt-1'>{Quantity}: {Option}</div>
        <div className='mycart-increment mt-1'>
          <div className='minus' onClick={decrease}> - </div>
          <div>{length}</div>
          <div className='plus' onClick={increase}>+</div>
        </div>
        <div className='mt-1'>Rs.{price}</div>
      </div>
    </div>
   
    </div>
    </div>  
    </>
  )
}
