// OrderContext.js
import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState(null);

  const ordernow = (orderDetails) => {
    setOrder(orderDetails);
  };

  return (
    <OrderContext.Provider value={{ order, ordernow }}>
      {children}
    </OrderContext.Provider>
  );
};
