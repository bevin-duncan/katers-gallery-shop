import React,{ useState } from 'react'
import { useHistory } from "react-router-dom";
import ProductsCard from "./ProductsCard"
import { Button } from "react-bootstrap"

function EditProduct({ product, products, setProducts }) {
    let history = useHistory();

    const [prodFormData, setProdFormData] = useState ({ 
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
        sku: product.sku
    })

    function handleChange(e) {
        setProdFormData({
          ...prodFormData,
          [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e) { 
        // e.preventDefault();

        const editedProd = {
            id: product.id,
            name: prodFormData.name,
            description: prodFormData.description,
            price: prodFormData.price,
            quantity: prodFormData.quantity,
            sku: prodFormData.sku
       }

        fetch(`/products/${product.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProd),
        }).then((updatedProd) => {
            setProducts(products.map((product)=> {
                if(product.id === updatedProd.id){
                    return updatedProd;
                }
                return product;
            }))
        })
        history.push("/admin")
    }

    return (
        <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Product Name</label>
                    <input 
                        name="name" 
                        type="text"
                        id={FormData.name}
                        value={prodFormData.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="form-group col-5">
                    <label>Product Description</label>
                    <input 
                        name="description" 
                        type="text" 
                        id={FormData.description}
                        value={prodFormData.description}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Price</label>
                    <input 
                        name="price" 
                        type="number" 
                        // is this right? 
                        id={FormData.price}
                        value={prodFormData.price}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>Quantity</label>
                    <input 
                        name="quantity" 
                        type="number" 
                        // is this right? 
                        id={FormData.quantity}
                        value={prodFormData.quantity}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-7">
                    <label>SKU Number</label>
                    <input 
                        name="sku" 
                        type="text" 
                        // is this right? 
                        id={FormData.sku}
                        value={prodFormData.sku}
                        placeholder="Ex: AB1234"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
            <Button version="primary" type="submit">Submit</Button>
        </form>
    );
}

export default EditProduct;