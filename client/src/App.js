import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductsContainer from "./components/ProductsContainer"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar"
import AdminPage from "./components/AdminPage"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"

import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProds();
  }, []);
  
  const getProds = () => {
    fetch("/products")
    .then((r) => r.json())
    .then(setProducts);
  }
 
console.log(products)

  
  useEffect(() => {
    fetch('/authorize')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
      else {
        console.log("We received errors...")
      }
    });
  },[]);

  function onLogin(newUser) {
    setUser([...user, newUser])
  }
  
  if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  if (!user) return <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />



  return (
    <Router> 
      <div className="background">
      <NavBar 
      setUser={setUser} 
      setIsAuthenticated={setIsAuthenticated}
      user={user}/>
        <Switch>
        
          <Route exact path="/">
            <Gallery
              setUser={setUser} 
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          </Route>

          <Route exact path="/shop">
              <ProductsContainer 
                products={products}
               setUser={setUser} 
               setIsAuthenticated={setIsAuthenticated}
               user={user}
              />
          </Route>

          <Route exact path="/contact">
            <Contact
              setUser={setUser} 
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          </Route>

          <Route path="/signup">
            <SignUp
              onLogin={onLogin}
            />
          </Route>

          <Route path="/login">
            <Login
              setUser={setUser} 
              setIsAuthenticated={setIsAuthenticated} 
            />
          </Route>

          {user && user.admin ?
          <Route path="/admin">
            <AdminPage
              setProducts={setProducts}
              products={products}
              setUser={setUser} 
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          </Route> : null} 

        </Switch>
        <div className='footer'>
          <div>K A T E R   |  //Flatiron School</div>   
          <div>Created By: Bevin Duncan | GitHub: <a href="https://github.com/bevin-duncan">Bevin</a></div>
        </div> 
      </div>
    </Router>
      
  );
  

}

export default App;
