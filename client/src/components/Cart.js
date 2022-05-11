import React, { useState } from 'react';
import { Text, Modal, Button, Card } from 'react-bootstrap';
import CheckoutButton  from './CheckoutButton';

function Cart({cart, totalPrice, setTotalPrice, setCart}) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  


  return (
    <>
      <Button variant="link" onClick={handleShow} style={{"text-decoration":"none", color:"#45A29E"}}>{cart.length > 0 ? `Cart(${cart.length})` : `Cart`}</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {cart.length > 0 && cart.map((product, index) => {
            return (
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image}/>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Name: {product.name}
                  <br/>
                  Description: {product.description}
                  <br/>
                  ${product.price}
                  <br/>
                  Quantity: 1
                </Card.Text>
                <Button variant="primary">Remove From Cart</Button>
              </Card.Body>
            </Card> 
            )
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <CheckoutButton price={totalPrice} setTotalPrice={setTotalPrice} setCart={setCart}/>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart