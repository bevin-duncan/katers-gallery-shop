import React from 'react'


function ProductsCard({ product }) {
    return (
      <div>
        <div className="product-card">
  
          <div className='card'>
            <img src={product.image} alt="product"/>
            <h4>{product.name}</h4>
            <h5>{product.decription}</h5>
            <h5>${product.price}</h5>
            <h5>Quantity: {product.quantity}</h5>
            <h5>SKU: {product.sku}</h5>
          </div>
          <br></br>
          <br></br>
        </div>
      </div>
    )
  }
  
  export default ProductsCard