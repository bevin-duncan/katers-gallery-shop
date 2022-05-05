import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Signup from './SignUp';

function Login({ setUser, setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('')
   
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/login`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        username, 
        password,
      })
    })
      .then(res => {
        if(res.ok){
          res.json()
          .then(username=>{
            setUser(username)
            setIsAuthenticated(true)
          })
        } else {
          res.json()
          .then((err) => setErrors(err.errors))
        }
    })
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Username</label>
            <input type="username" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox" id="remember-me">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">&nbsp;Remember me</label>
            </div>
          </div>
          <button type="submit" id="form-button" className="btn btn-primary btn-block">Submit</button>               
            <p className="forgot-password text-right">Don't have an account?&nbsp;
              <Link to={"/signup"}>Sign Up</Link>
            </p>
        </form>
      </div>
    </div>
  );
}


export default Login