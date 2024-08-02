import React, { useState } from 'react';
import './productstyle.css';
import Productdata from './Productdata.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export const Productcontain = (props) => {
  const [Image, setImage] = useState(props.img1);
  const [Price, setPrice] = useState(props.price);
  const [Productname, setProductname] = useState(props.name);
  const [Option, setOption] = useState(props.opt1);
  const [Quantity, setQuantity] = useState(props.quantity);
  const [isAddedcart,setIsAddedcart] = useState(false)
  const navigate=useNavigate()

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'opt2') {
      setImage(props.img2);
      setPrice(props.price2);
      setOption(props.opt2);
      setIsAddedcart(false)  
    } else {
      setImage(props.img1);
      setPrice(props.price);
      setOption(props.opt1);

    }
  };

  const handleAddToCart = () => {
    document.querySelector('.mycart').classList.add('mycart-show');
    props.addToCart({
      Image,
      Productname,
      Quantity,
      Option,
      Price: Number(Price),
    });
    setIsAddedcart(true)  
    
    axios.post('http://127.0.0.1:3001/products', { Productname, Image, Quantity, Option , Price})
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    });

  };

  const handleViewCart =()=>{
    navigate('/viewcart')
  }

  

  return (
    <div className='col-md-6 col-lg-4 col-12 mb-4'>
      <div className='card'>
        <div className='card-img'>
          <img src={Image} alt={Productname} />
          <div className='card-icons'>
            <div><i className='fa-regular fa-heart'></i></div>
            <div><i className='fa-solid fa-pizza-slice'></i></div>
            <div><i className='fa-regular fa-eye'></i></div>
          </div>
          <div className='ordernow mt-3'>
          Order Now
          </div>
        </div>
        <div className='details mt-2'>
          <div className='product-head'>{Productname}</div>
          <div className='d-none'>{Quantity}</div>
          <div>
            <select className='mt-2 select' onChange={handleSelectChange}>
              <option value="opt1">{props.opt1}</option>
              <option value="opt2">{props.opt2}</option>
            </select>
          </div>
          <div className='product-price mt-3'>
            <div>Rs.{Price}</div>
          </div>
          <div className='product-btn'>
          <div className='ordernowmini d-none mt-3'>
          Order Now
          </div>
          <div className='addcart mt-3' onClick={ isAddedcart? handleViewCart: handleAddToCart}>
          {isAddedcart? 'View Cart':'Add To Cart'}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export const Product = ({ addToCart }) => {
  return (
    <>
      {Productdata.map((product, index) => (
        <Productcontain
          key={index}
          name={product.name}
          price={product.price}
          price2={product.price2}
          img1={product.img1}
          img2={product.img2}
          opt1={product.opt1}
          opt2={product.opt2}
          quantity={product.quantity}
          addToCart={addToCart}
        />
      ))}
    </>
  );
};