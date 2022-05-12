import React, { useState } from 'react'
import { Card, Container, Button} from "react-bootstrap"
import { useHistory } from "react-router-dom"

function AddProduct({ products, setProducts }) {
  const history = useHistory("");
  
    const [errors, setErrors] = useState([]);
  
    const [formData, setFormData] = useState({
      name: "",
      image: "",
      description: "",
      price: "",
      quantity: "",
      sku: "",
    })
  
    const initialFormState = {
        name: "",
        image: "",
        description: "",
        price: "",
        quantity: "",
        sku: "",
    }
    
    function onCreateProd(newProd) {
      setProducts([...products, newProd])
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      console.log("Submitted")
    
      const newProd = {
        name: formData.name,
        image: formData.image,
        description: formData.description,
        price: formData.price,
        quantity: formData.quantity,
        sku: formData.sku,
      }
        
      fetch(`/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProd),
      })
      .then((r) => {
          if (r.ok) {
            r.json().then((product) => onCreateProd(product));
        } else {
            r.json().then((err) => setErrors(err.errors));
        } 
      })
      .then(setFormData(initialFormState));
      history.push("/shop")
    } 
  
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    return (

      <Container style={{width: "500px"}}>
      <Card >
        <Card.Body >
      <div className="background">
          <div className="form-border center-content" >
            <div className="ui grid">
              <form 
                  className="ui two fields form center"
                  onSubmit={(e) => handleSubmit(e)}
                  >
                  <div>
                    {errors.map((error) => (
                      <ul className="errors">- {error}</ul>
                    ))}
                  </div>
                <label htmlFor="name">Product Name: </label>
                <input
                  name="name"
                  type="text"
                  id={FormData.name}
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label htmlFor="image">Product Image: </label>
                <input
                  name="image"
                  type="text"
                  id={FormData.image}
                  value={formData.image}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label htmlFor="description">Product Description: </label>
                <input
                  name="description"
                  type="text"
                  id={FormData.description}
                  value={formData.description}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label htmlFor="price">Price: </label>
                <input
                  name="price"
                  type="number"
                  id={FormData.price}
                  value={formData.price}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label>Quantity:</label>
                <input
                  name="quantity"
                  type="number"
                  id={FormData.quantity}
                  value={formData.quantity}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <label>SKU Number: </label>
                <input
                  name="sku"
                  type="text"
                  id={FormData.sku}
                  value={formData.sku}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <br></br>
                <Button version="primary" type="submit">Create</Button>
              </form>
            </div>
          </div>
        </div>
        </Card.Body>
        </Card>
        </Container>
        
    )
  }
  
  export default AddProduct