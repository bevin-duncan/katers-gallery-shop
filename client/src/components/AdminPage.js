import React from 'react'
import ProductsContainer from './ProductsContainer'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import AdminProds from "./AdminProds" 

function AdminPage({products, setProducts}) {

console.log("ADMINPAGE:", products);
  return (
    <div>
      <AdminProds products={products} setProducts={setProducts}/>
      <p>Admin Page</p>
    </div>
  )
}

export default AdminPage