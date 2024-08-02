import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./pages/navbar";
import { Home } from "./pages/Home";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Viewcart } from "./pages/viewcart";

function App() {
  const [cartItems, setCartItems] = useState([
    // Example initial cart items
  ]);

  const deleteCartItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route index element={<Login />} />
        <Route path="/viewcart" element={<Viewcart/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
