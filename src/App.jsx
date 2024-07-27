import React from "react"

import { Navbar } from "./pages/navbar";
import { Home } from "./pages/Home";
import { HashRouter,Routes,Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <Navbar/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </HashRouter>
     
    </>
  )
}

export default App;
