import React, {useState}from 'react'
import EditProduct from './EditProduct'
import {Card, Button} from "react-bootstrap"

function AdminProdCard({product, products, setProducts}) {


    const [showEditForm, setShowEditForm] = useState(false)

    function handleEditForm(e, showEditForm){
      e.stopPropagation()
      setShowEditForm(!showEditForm)
    }
  
    const deleteProduct = (id) => {
      fetch(`/products/${id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          setProducts(products.filter((prodObj) => prodObj.id !== id));
        //   how do I set this without the filter? 
        }
      });
    }
  
    // console.log(prodObj)
    console.log("PRODUCT ADMIN CARD", product);

    return (



        <Card>
        <Card.Img variant="top" className="admin-card-img" src={product.image} style={{height:"396px", "object-fit":"contain"}}/>
        <Card.Body style={{height:"100%"}}>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Description: {product.description}
            <br/>
            ${product.price}
            <br/>
             {product.quantity ? "In Stock" : null}
          </Card.Text>
          <Button variant="primary" onClick={(e) => handleEditForm(e, showEditForm)}>Edit Product Details</Button>
          <div>
             {showEditForm && <EditProduct product={product} products={products} setProducts={setProducts}/>}
             </div>
             <div> 
             <Button variant="primary" onClick={(e)=> deleteProduct(product.id)} >Delete Item</Button>
             </div>
        </Card.Body>
    </Card> 
        // <div>
        //   <div className="product-card">
        //     <p>inside product card</p>
        //     <div className='card'>
        //       <img src={product.image} alt="product" style={{width: '200px'}}/>
        //       <h4>Name: {product.name}</h4>
        //       <h5>Description: {product.description}</h5>
        //       <h5>${product.price}</h5>
        //       <h5>Quantity: {product.quantity}</h5>
        //       <h5>SKU: {product.sku}</h5>
             
            //   <button className="ui button" onClick={(e) => handleEditForm(e, showEditForm)}>Edit Product Details</button>
           
            //  </div>
            //  <div>
            //  {showEditForm && <EditProduct product={product} products={products} setProducts={setProducts}/>}
            //  </div>
            //  <div> 
            //  <button className="ui red basic button" onClick={(e)=> deleteProduct(product.id)} >Delete Item</button>
            //  </div>
            // <br></br>
            // <br></br>
        //   </div>
        // </div>
    )
}


export default AdminProdCard
