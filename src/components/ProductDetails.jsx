
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) return <h2 className="text-center">Loading...</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image"/>
      <div className="card-body text-center">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-text">{product.description}</p>
        <h4 className="text-primary">${product.price}</h4>
        <p><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
