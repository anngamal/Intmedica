// import ProductCard from "../ProductInfo/ProductCard"
// import ProductDetails from "../ProductDetails/ProductDetails"
// import ProductList from "../ProductInfo/ProductList"
// export default function Cart({products, addToCart}){
//     return(
//         <div id="cartdiv">
//            <div className="yourCartProductDetails">
//             <p>Product details and pic and price and the amount with a dropdown to be able to manage itt
//                 delivery info and options if u have like free delivery wla customize
//             </p>
//            </div>
//            <div className="cartCheckOutdiv">
//             <p>Order Summary</p>
//             <p>original price , discounts, delivery,estimated sales tax </p>
//             <p>total (price)</p>
//             <button>CheckOut</button>
//            </div>
//         </div>
//     )
// }


import React from 'react';
export default function Cart({ cart }){
    if (!cart || cart.length === 0) {
        return (
          <div className="cart">
            <h2>Your Cart</h2>
            <p>Your cart is empty.</p>
          </div>
        );
      }
    
      return (
        <div className="cart">
          <h2>Your Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      );
    };
    

  
