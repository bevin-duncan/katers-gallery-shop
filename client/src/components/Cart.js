import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

function Cart({cart}) {
  const [showModal, setShowModal] = useState(false);


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  return (
    <>
      <Button variant="secondary" onClick={handleShow}>`${cart.length} Items`</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
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
                <Button variant="primary">Remove From Cart</Button>
              </Card.Body>
            </Card> 
            )
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Cart