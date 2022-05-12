import React, { useState, useEffect } from 'react'
import ProductsCard from "./ProductsCard"
import {Col, Row, Container} from "react-bootstrap"

function ProductsContainer({ user, cart, setCart, totalPrice, setTotalPrice }) {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    getProds();
  }, []);
  
  const getProds = () => {
    fetch("/products")
    .then((r) => r.json())
    .then(setProducts);
  }
  
  return (
    <Container className="mt-5">
      <Row xs={1} md={3} className="g-4">
        <>
            <br></br>
              {products && products.map((product, index) => {
                return (
                  <Col>
                  <React.Fragment key={index}>
                    <ProductsCard product={product} cart={cart} setCart={setCart} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                  </React.Fragment>
                  </Col>
                )
              })}
        </>
      </Row>
    </Container>
  )
}

export default ProductsContainer;
