import React from "react";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import './index.css'

function App() {
  return (
    <>
    
    <HashRouter>
    <div className="container mt-4">
      
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </HashRouter>
    
    </>
  );
}


export default App;
