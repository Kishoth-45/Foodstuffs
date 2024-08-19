import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './pages/navbar';
import { Home } from './pages/Home';
import { Register } from './pages/register';
import { Login } from './pages/login';
import { Viewcart } from './pages/viewcart';
import { Order } from './pages/order';
import { Userprofile } from './pages/Userprofile';
import { OrderProvider } from './OrderContext';
import { Fooditems } from './pages/Fooditems';

function App() {

  return (
    <OrderProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route index element={<Login />} />
          <Route path="/viewcart" element={<Viewcart />} />
          <Route path="/ordernow" element={<Order />} />
          <Route path="/userprofile" element={<Userprofile />} />
          <Route path="/fooditems" element={<Fooditems />} />
        </Routes>
      </HashRouter>
    </OrderProvider>
  );
}

export default App;
