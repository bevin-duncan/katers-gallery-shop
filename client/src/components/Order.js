import React, { useState, useEffect } from 'react'
import {Button, Modal, Card } from 'react-bootstrap';

function Order({order, product}) {
  const [showModal, setShowModal] = useState(false);


  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);


  return (
    <>
      <Button variant="secondary" onClick={handleShow}>Your Orders</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>`${order.id}`</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {order && order.map((order, index) => {
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
                      
                </Card.Text>
              </Card.Body>
            </Card> 
            )
          })}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Order