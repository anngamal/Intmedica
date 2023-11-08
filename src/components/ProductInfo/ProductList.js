// import React, { useState } from 'react';
// import ProductCard from './ProductCard';
// import gymmachineImg from './gymmachine.png'
// import gdcc200Img from './gdcc200.png'

// const ProductList = () => {
//   const [cart, setCart] = useState([]);
  
//   const products = [
//     {
//       id: 1,
//       name: 'GRFTS',
//       image: gymmachineImg,
//       price: 190.99,
//     },
//     {
//       id: 2,
//       name: 'Gdcc200',
//       image: gdcc200Img,
//       price: 240.99,
//     },
//   ];

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };


// export default ProductList;

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from '../Cart/Cart'
import gymmachineImg from './gymmachine.png';
import gdcc200Img from './gdcc200.png';

const ProductList = () => {
  const [cart, setCart] = useState([]);

  // useEffect that invokes checkLogIn/checkSession
  // Backend code sends back user data. call the return user function
  // From the frontend, we can use the user data
  // to filter data based on the user's cart and other stuff.
 
  const products = [
    {
      id: 1,
      name: 'GRFTS',
      image: gymmachineImg,
      price: 190.99,
    },
    {
      id: 2,
      name: 'Gdcc200',
      image: gdcc200Img,
      price: 240.99,
    },
  ];

  
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
      <Cart cart={cart} /> 
    </div>
  );
};

export default ProductList;

