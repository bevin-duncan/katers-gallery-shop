import React, {useState, useEffect} from 'react'
import AddProduct from "./AddProduct"
import AdminProdCard from "./AdminProdCard"
import {Col, Row, Container, Button} from "react-bootstrap"

function AdminProds({products, setProducts}) {
   

    const [showAddForm, setShowAddForm] = useState(false)


function handleAddForm(e, showAddForm){
    e.stopPropagation()
    setShowAddForm(!showAddForm)
}  

    console.log("PRODUCTS", products)
    

    
    return (
      
        <div>
            <br></br>
            <div> 
                <Button variant="primary" onClick={(e) => handleAddForm(e, showAddForm)}>Add Product</Button>
            </div>
            <div>
                {showAddForm && <AddProduct products={products} setProducts={setProducts}/>}
            </div>
            <Container className="mt-5">
                <Row xs={1} md={3} className="g-4">   
                <>
            <br></br>
                {products && products.map((product, index) => {
                    return (
                    <Col>
                    <React.Fragment key={index}>
                        <AdminProdCard product={product} products={products} setProducts={setProducts}/>
                    </React.Fragment>
                    </Col>
                    )
                })}
                </>
            </Row>
            </Container>
        </div>
    )
}

export default AdminProds