import React,{ useState } from 'react'
import { useHistory } from "react-router-dom";

function EditProduct({ product }) {
    // let history = useHistory();

    // const [prodFormData, setProdFormData] = useState ({ 
    //     name: product.name,
    //     description: product.description,
    //     price: product.price,
    //     quantity: product.quantity,
    //     sku: product.sku
    // })

    // function handleChange(e) {
    //     setProdFormData({
    //       ...prodFormData,
    //       [e.target.name]: e.target.value,
    //     });
    // }

    // function handleSubmit(e) { 
    //     e.preventDefault();

    //     const editedProd = {
    //         name: product.name,
    //         description: product.description,
    //         price: product.price,
    //         quantity: product.quantity,
    //         sku: product.sku 
    //    }

    //     fetch(`/products/${product.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(editedProd),
    //     })
    //     history.push("/products")
    // }

    // return (
    //     <form className="ui form" onSubmit={(e) => handleSubmit(e)}> 
    //         <div className="form-row">
    //             <div className="form-group col-5">
    //                 <label>Product Name</label>
    //                 <input 
    //                     name="product_name" 
    //                     type="text"
    //                     id={FormData.name}
    //                     value={prodFormData.name}
    //                     onChange={(e) => handleChange(e)}
    //                 />
    //             </div>
    //             <div className="form-group col-5">
    //                 <label>Product Description</label>
    //                 <input 
    //                     name="prod_description" 
    //                     type="text" 
    //                     id={FormData.description}
    //                     value={prodFormData.description}
    //                     onChange={(e) => handleChange(e)}
    //                 />
    //             </div>
    //         </div>
    //         <div className="form-row">
    //             <div className="form-group col-7">
    //                 <label>Price</label>
    //                 <input 
    //                     name="price" 
    //                     type="float" 
    //                     // is this right? 
    //                     id={FormData.price}
    //                     value={prodFormData.price}
    //                     onChange={(e) => handleChange(e)}
    //                 />
    //             </div>
    //         </div>
    //         <div className="form-row">
    //             <div className="form-group col-7">
    //                 <label>Quantity</label>
    //                 <input 
    //                     name="qty" 
    //                     type="integer" 
    //                     // is this right? 
    //                     id={FormData.quantity}
    //                     value={prodFormData.quantity}
    //                     onChange={(e) => handleChange(e)}
    //                 />
    //             </div>
    //         </div>
    //         <div className="form-row">
    //             <div className="form-group col-7">
    //                 <label>SKU Number</label>
    //                 <input 
    //                     name="sku" 
    //                     type="text" 
    //                     // is this right? 
    //                     id={FormData.sku}
    //                     value={prodFormData.sku}
    //                     placeholder="Ex: AB1234"
    //                     onChange={(e) => handleChange(e)}
    //                 />
    //             </div>
    //         </div>
    //         <button className="ui submit green button center" type="submit">Submit</button>
    //     </form>
    // );
}

export default EditProduct;