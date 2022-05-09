import React from 'react';
import { NavLink } from "react-router-dom";
import { Button, NavItem } from "react-bootstrap";
import  Cart  from "./Cart.js";

function NavBar({ setIsAuthenticated, isAuthenticated, setUser, user, cart, totalPrice, setTotalPrice, setCart }) {

  const logout = () => {
    fetch('/logout',{
        method:'DELETE'
    })
    .then(()=>{
        setIsAuthenticated(false)
        setUser(null)
    })
  }


  

  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://www.peterstaker.com"> K A T E R</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{width:"100%"}}>
            <div className="navbar-nav" style={{width:"100%"}}>
              <NavItem>
                <NavLink
                  to="/"
                  exact
                  className="nav-link"
                >
                  Gallery
                </NavLink> 
              </NavItem>
              <NavItem>
                <NavLink
                  to="/shop"
                  exact
                  className="nav-link"
                >
                  Merch
                </NavLink>
              </NavItem>
              <NavItem>
                
                 <a data-tf-popup="w6CMsz3F" data-tf-iframe-props="title=Kater.com Contact template TG (copy)" data-tf-medium="snippet"
                  className="nav-link"
                >
                  Contact
                  </a>
              </NavItem>
              {user && user.admin ?
                <NavItem> 
                  <NavLink
                    to="/admin"
                    exact
                    className="nav-link"
                  >
                    Admin
                  </NavLink>
                </NavItem>
              : null}
              <div className="ms-auto" style={{display:"inline-flex"}}>
                <NavItem>
                  <Cart
                    setCart={setCart} 
                    cart={cart}
                    totalPrice={totalPrice}
                    setTotalPrice={setTotalPrice}
                  />
                </NavItem>
                  {isAuthenticated ?
                  <NavItem>
                    <Button className="btn btn-secondary" type="button" onClick={()=>logout()}>Logout</Button>
                  </NavItem>
                  : null}
              </div>
            </div>
          </div>
      </div>
    </nav>  
  )
}

export default NavBar;