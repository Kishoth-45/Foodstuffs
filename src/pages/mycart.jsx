import React from 'react';


export const Mycart = ({ Image, Productname, Quantity, Option, Price, index, deleteCartItem }) => {
  return (
    <div className='mycart-content'>
      <div className='mycart-img'>
        <img src={Image} alt={Productname} />
      </div>
      <div className='mycart-details'>
        <div className='mycart-title'>{Productname}</div>
        <div className='mt-1'>{Quantity}: {Option}</div>
        <div className='mycart-increment mt-1'>
          <div> - </div>
          <div>1</div>
          <div>+</div>
        </div>
        <div className='mt-1'>Rs.{Price}</div>
      </div>
      <div className='trash' onClick={() => deleteCartItem(index)}>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
};



export const Mycartcontainer = ({ cartItems = [], deleteCartItem }) => {
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
        />
      ))}
    </>
  );
};


