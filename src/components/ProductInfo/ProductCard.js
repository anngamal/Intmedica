import React, {useState} from 'react';
import "./ProductCard.css"
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

export default function ProductCard({ product, setCart,cart }){
    

  const [isAddedToCart, setAddedToCart] = useState(false);

  const addToCartToggle = () => {
    setAddedToCart(true);
  };
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  function handleclick(){
    setCart([...cart, product])
  }

  return (
    <div className="product-card">
        <Link to={`/product/${product.id}`}>
        <img id="productCardImg" src={product.image} alt={product.name} />
      </Link>
    
      <h3 id="productCardName">{product.name}</h3>
      <h4 id="productCardPrice">${product.price}</h4>
      {isAddedToCart ? (
        <button disabled id="addtocartBtnDisabled" className="addToCartBtn">
          Added to Cart
        </button>
      ) : (
        <button onClick={() => {
          addToCartToggle();
          handleclick();
        }}  id="addtocartBtn" className="addToCartBtn">
          Add to cart
        </button>
      )}
    </div>
  );
      }

