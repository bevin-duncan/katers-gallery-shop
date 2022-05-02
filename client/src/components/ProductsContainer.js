import React, { useState, useEffect } from 'react'
// import NavBar from "./NavBar"
import ProductsCard from "./ProductsCard"
import NavBar from "./NavBar"


function ProductsContainer({ setIsAuthenticated, setUser, user }) {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProds();
  }, []);
  
  const getProds = () => {
    fetch("/products")
    .then((r) => r.json())
    .then(setProducts);
  }
 
  console.log("PROD", products)
  
  return (
    
    <div>
        
        <br></br>
        <div className="hkjh">
          {products && products.map((product) => <ProductsCard key={product.id} product={product} />)}
        </div>
    </div>
  )
}

export default ProductsContainer;
