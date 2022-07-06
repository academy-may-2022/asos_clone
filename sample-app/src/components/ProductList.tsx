import React, { useState, useEffect } from 'react';

export const ProductList = () => {
  const [products, setProducts] = useState([]);
    
useEffect(() => {
  loadData();

  // return () => {
  //   second
  // }
}, [])


const loadData = async() =>{
  const response = await fetch("https://dummyjson.com/products");
  const data =  await response.json();
  console.log("Log : ")
  console.log(data)
  setProducts(data.products)
}



    return (
      <div>

        <div className="status">This is a Product Component</div> 

      </div>

    );
  };