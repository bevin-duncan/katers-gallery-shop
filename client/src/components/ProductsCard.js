import React from 'react';
import { Button, Card } from 'react-bootstrap';


function ProductsCard({ product, cart, setCart, totalPrice, setTotalPrice})  {

const handleAddToCart = (e, product) => {
  e.preventDefault();
  setCart([...cart, product]);
  console.log("THE CART", cart)
  setTotalPrice(totalPrice + product.price)
} 


// t.integer "quantity"
// t.bigint "order_id", null: false
// t.bigint "product_id", null: false




    return (

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image}/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
          <h4>Name: {product.name}</h4>
                  <h5>Description: {product.description}</h5>
                  <h5>${product.price}</h5>
                  <h5>Quantity: {product.quantity}</h5>
                  <h5>SKU: {product.sku}</h5>
          </Card.Text>
          <Button variant="primary" onClick={(e) => handleAddToCart(e, product)}>Add To Cart</Button>
        </Card.Body>
      </Card> 


      // <div>
      //   <div className="product-card">
      //     <div className='card'>
      //       <img src={product.image} alt="product" style={{width: '200px'}}/>
      //       <h4>Name: {product.name}</h4>
      //       <h5>Description: {product.description}</h5>
      //       <h5>${product.price}</h5>
      //       <h5>Quantity: {product.quantity}</h5>
      //       <h5>SKU: {product.sku}</h5>
      //     </div>
          
      //     <br></br>
      //     <br></br>
      //   </div>
      // </div>
    )
  }
  
  export default ProductsCard