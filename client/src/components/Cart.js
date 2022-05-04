import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';
import CheckoutButton  from './CheckoutButton';

function Cart({cart, totalPrice, setTotalPrice, setCart}) {
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState([]);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  

  const handleOrder = (e, cart) => {
    e.preventDefault();
    setOrder([...order, cart]);
    console.log("THE ORDER", order)
  } 

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>{cart.length} Items</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {cart && cart.map((product, index) => {
            return (
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image}/>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                <h4>Name: {product.name}</h4>
                        <h5>Description: {product.description}</h5>
                        <h5>${product.price}</h5>
                        <h5>Quantity: 1</h5>
                        <h5>SKU: {product.sku}</h5>
                </Card.Text>
                <Button  variant="primary">Remove From Cart</Button>
              </Card.Body>
            </Card> 
            )
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <CheckoutButton price={totalPrice} setTotalPrice={setTotalPrice} setCart={setCart}/>
          {/* <Button onClick={(e)=> handleOrder(e, cart)} variant="primary">Checkout</Button> */}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart