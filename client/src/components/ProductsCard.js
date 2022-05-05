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
    <Card>
        <Card.Img variant="top" src={product.image} style={{height:"396px", "object-fit":"contain"}}/>
        <Card.Body style={{height:"250px"}}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Description: {product.description}
            <br/>
            ${product.price}
            <br/>
             {product.quantity ? "In Stock" : null}
          </Card.Text>
          <Button variant="primary" style={{width:"94%", position:"absolute", bottom:"10px", left:"3%"}} onClick={(e) => handleAddToCart(e, product)}>Add To Cart</Button>
        </Card.Body>
    </Card> 
  )
}
  
export default ProductsCard