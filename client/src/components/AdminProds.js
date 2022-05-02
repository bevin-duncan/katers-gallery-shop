import React, {useState, useEffect} from 'react'
import AddProduct from "./AddProduct"
import AdminProdCard from "./AdminProdCard"

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
                <button className="ui button" onClick={(e) => handleAddForm(e, showAddForm)}>Add Product</button>
            </div>
            <div>
                {showAddForm && <AddProduct products={products} setProducts={setProducts}/>}
            </div>
            <div className="ad-prod-card">
                {products && products.map((product, index) => {
                    return (
                        <div key={index}>
                            <AdminProdCard product={product} products={products} setProducts={setProducts}/>
                        </div>
                    )
                })}
                <p>inside admin prods container</p>
            </div>
        </div>
    )
}

export default AdminProds