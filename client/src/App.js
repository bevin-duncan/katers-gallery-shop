import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import ProductsContainer from "./components/ProductsContainer"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import NavBar from "./components/NavBar"
import AdminPage from "./components/AdminPage"
import Contact from "./components/Contact"
import PhotoGallery from "./components/PhotoGallery/PhotoGallery"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    getProds();
  }, []);
  
const getProds = () => {
  fetch("/products")
  .then((r) => r.json())
  .then(setProducts);
}

// const authorize = () => {
//   fetch('/authorize')
//   .then((res) => {
//     if (res.ok) {
//       res.json()
//       .then((user) => {
//         setIsAuthenticated(true);
//         setUser(user);
//       });
//     }
//     else {
//       console.log("We received errors...")
//     }
// }

useEffect(() => {
  fetch('/authorize')
  .then((res) => {
    if (res.ok) {
      res.json()
      .then((user) => {
        setIsAuthenticated(true);
        setUser(user);
      });
      // getProds();
    }
    else {
      console.log("We received errors...")
    }
  });
},[]);

  function onLogin(newUser) {
    setUser([...user, newUser])
  }

  // if (!isAuthenticated) return <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;
  // if (!user) return <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />

  return (
    <Router> 
      <div className="background">
      <NavBar 
        setUser={setUser} 
        setIsAuthenticated={setIsAuthenticated}
        isAuthenticated={isAuthenticated}
        user={user}
        setCart={setCart} 
        cart={cart}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
        <Switch>
          <Route exact path="/">
            {!isAuthenticated ? <Redirect to="/login" /> :
              <PhotoGallery
                setUser={setUser} 
                setIsAuthenticated={setIsAuthenticated}
                user={user}
              />
            }
          </Route>

          <Route exact path="/shop">
          {!isAuthenticated ? <Redirect to="/login" /> :
            <ProductsContainer
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice} 
            cart={cart}
            setCart={setCart}
            products={products}
            user={user}
            />
           } 
          </Route>

          <Route exact path="/contact">
            <Contact
              setUser={setUser} 
              setIsAuthenticated={setIsAuthenticated}
              user={user}
            />
          </Route>

          {/* <Route exact path="/cart">
            <Cart
              setCart={setCart} 
              cart={cart}
              setIsAuthenticated={setIsAuthenticated}
              user={user}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          </Route> */}

          <Route path="/signup">
            <SignUp
              onLogin={onLogin}
            />
          </Route>

          <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Login setUser={setUser} setIsAuthenticated={setIsAuthenticated} />}
          </Route>

          <Route path="/admin">
            {!isAuthenticated ? <Redirect to="/login" /> :
              <AdminPage
                setProducts={setProducts}
                products={products}
                setUser={setUser} 
                setIsAuthenticated={setIsAuthenticated}
                user={user}
              />
            }
          </Route> 

        </Switch>
        <div className='footer'>
          <div>K A T E R   |  //Flatiron School Created By: Bevin Duncan | <a href="https://github.com/bevin-duncan">GitHub</a></div>
        </div> 
      </div>
    </Router>
      
  );
  

}

export default App;
