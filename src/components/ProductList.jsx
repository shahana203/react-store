import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./Navbar";
import Footer from "./Footer";



const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <NavBar/>
    <h1 className="text-center mb-4" id="home">Products</h1>
    <div className="product-list" >
      {products.map((product) => (
        <div key={product.id} className="product-card" id="product">
          <img src={product.image} className="product-image" alt={product.title} />
          <h5 className="product-title">{product.title}</h5>
          <p className="product-price">${product.price}</p>
          <Link to={`/product/${product.id}`} className="view-button">View</Link>
        </div>
      ))}
    
</div>
<Footer />
</>
  );
};

export default ProductList;
