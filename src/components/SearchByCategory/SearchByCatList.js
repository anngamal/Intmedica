
import React, { useState, useEffect } from 'react';
import "./SearchByCategory.css"
import SearchByCatCard from "./SearchByCatCard";
import { useFetcher, useParams } from 'react-router-dom';


export default function SearchByCatList() {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); 
  useEffect(() =>{
    fetch(`http://127.0.0.1:5555/products/category=${category}`)
    .then(response => response.json())
    .then(incomingProducts => setProducts(previousValue => incomingProducts))
  }, [])

  console.log(products)
  // Assuming you are getting the category name from the route parameters.
  // const catagories = []

  return (
    <section className='categoriesMappingSection'>
     
      <ul className='categoriesMappingUl'>
        {products.map(product => {
            return <SearchByCatCard key={product.id} product={product} />
        })}
      </ul>
    </section>
  );
}

