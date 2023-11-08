
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchByCatCard({ product}) {
  const [isAddedToCart, setAddedToCart] = useState(false);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     setAddedToCart(true); // Update the local state to show that it's added to the cart
//   };

  return (
    <div className="product-card">
    
        <img id="productCardImg" src={product.image} alt={product.name} />
      

      <h3 id="productCardName">{product.name}</h3>
      <h4 id="productCardPrice">${product.price}</h4>
      {isAddedToCart ? (
        <button disabled id="addtocartBtnDisabled" className="addToCartBtn">
          Added to Cart
        </button>
      ) : (
        <button
        //   onClick={() => {
        //     addToCart(product);
        //   }}
          id="addtocartBtn"
          className="addToCartBtn"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
