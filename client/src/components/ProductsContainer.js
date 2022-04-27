import React, { useState, useEffect } from 'react'
// import NavBar from "./NavBar"
import ProductsCard from "./ProductsCard"

function ProductsContainer({ setIsAuthenticated, setUser, user }) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then(setProducts);
  }, []);
  console.log(products)

    const merch = products.map((product) => 
      <ProductsCard
        key={product.id}
        pet={product}
      />
    )
console.log(merch)
   
  return (
    <div>
        {/* <NavBar setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user}/> */}
        <br></br>
        <div className="hkjh">
          {merch}
        </div>
    </div>
  )
}

export default ProductsContainer;
