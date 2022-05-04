import React, { useState, useEffect } from 'react'
// import NavBar from "./NavBar"
import ProductsCard from "./ProductsCard"
import NavBar from "./NavBar"


function ProductsContainer({ setIsAuthenticated, setUser, user, cart, setCart, totalPrice, setTotalPrice }) {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  
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
          {products && products.map((product, index) => {
            return (
              <div key={product.id}>
                <ProductsCard product={product} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default ProductsContainer;
