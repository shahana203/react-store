import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import './index.css'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <div className="container mt-4">
      
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
    
    </>
  );
}


export default App;
