import React, { useState } from 'react'

function AddProduct({ products, setProducts }) {
  
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
    }
  
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    return (
      <div className="background">
          <div className="form-border center-content">
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
                <label htmlFor="name">Product Name:</label>
                <input
                  name="name"
                  type="text"
                  id={FormData.name}
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                />
                 <label htmlFor="image">Product Image:</label>
                <input
                  name="image"
                  type="text"
                  id={FormData.image}
                  value={formData.image}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="description">Product Description:</label>
                <input
                  name="description"
                  type="text"
                  id={FormData.description}
                  value={formData.description}
                  onChange={(e) => handleChange(e)}
                />
                <label htmlFor="price">Price:</label>
                <input
                  name="price"
                  type="number"
                  id={FormData.price}
                  value={formData.price}
                  onChange={(e) => handleChange(e)}
                />
                <label>Quantity:</label>
                <input
                  name="quantity"
                  type="number"
                  id={FormData.quantity}
                  value={formData.quantity}
                  onChange={(e) => handleChange(e)}
                />
                 <label>SKU Number:</label>
                <input
                  name="sku"
                  type="text"
                  id={FormData.sku}
                  value={formData.sku}
                  onChange={(e) => handleChange(e)}
                />
                <br></br>
                <br></br>
                <button className="ui submit button center" type="submit">Create</button>
              </form>
            </div>
          </div>
        </div>
    )
  }
  
  export default AddProduct