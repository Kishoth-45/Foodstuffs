import React, { useState, useEffect } from 'react';

export const Mycart = ({ Image, Productname, Quantity, Option, Price, index, deleteCartItem, updateCartItemSize }) => {
  const [ProductNumber, setProductNumber] = useState(1);


  const decrement = () => {
    if (ProductNumber > 1) {
      const newProductNumber = ProductNumber - 1;
      setProductNumber(newProductNumber);
      updateCartItemSize(index, newProductNumber);
    }
  };

  const increment = () => {
    const newProductNumber = ProductNumber + 1;
    setProductNumber(newProductNumber);
    updateCartItemSize(index, newProductNumber);
  };
 
  const totalPrice = ProductNumber * Price;

  return (
    <div className='mycart-content'>
      <div className='mycart-part-1'>
      <div className='mycart-img'>
        <img src={Image} alt={Productname} />
      </div>
      <div>
        <div className='mycart-title'>{Productname}</div>
        <div className='mt-1'>{Quantity}: {Option}</div>
        </div>
        </div>
      <div className='mycart-details'>
        
        <div className='mycart-increment mt-1'>
          <div className='minus' onClick={decrement}> - </div>
          <div className='product-number'>{ProductNumber}</div>
          <div className='plus' onClick={increment}>+</div>
        </div>
        <div className='mt-1'>Rs.{totalPrice}</div>
      </div>
      <div className='trash' onClick={() => deleteCartItem(index)}>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
};




export const Mycartcontainer = ({ cartItems = [], deleteCartItem, updateCartItemSize }) => {
  return (
    <>
      {cartItems.map((item, index) => (
        <Mycart
          key={index}
          Image={item.Image}
          Productname={item.Productname}
          Quantity={item.Quantity}
          Option={item.Option}
          Price={item.Price}
          index={index}
          deleteCartItem={deleteCartItem}
          updateCartItemSize={updateCartItemSize}
        />
      ))}
    </>
  );
};



