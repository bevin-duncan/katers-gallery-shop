import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar({ setIsAuthenticated, setUser, user }) {

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
    <div>
        <NavLink
        to="/"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Gallery
      </NavLink> 

      <NavLink
        to="/shop"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Merch
      </NavLink>
      
      <NavLink
        to="/contact"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Contact
      </NavLink>


      {user&&user.admin?<NavLink
        to="/Admin"
        exact
        className="ui center floated button"
        activeStyle={{
          background: "#E6E6E8",
        }}
      >
        Admin
      </NavLink>:null}

      <button className="ui center floated button" onClick={()=>logout()}>Logout</button>
        {/* make this togglable depending on login/out status? */}
    </div>
  )
}

export default NavBar