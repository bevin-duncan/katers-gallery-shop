import React, { useState } from 'react'
import { Card, Container, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom"

  function Signup({ onLogin }) {
    const [errors, setErrors] = useState([]);
    const history = useHistory("");

    const [formData, setFormData] = useState({
      username: "",
      password: "",
      passwordConfirmation: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: ""
    })

    const initialFormState = {
      username: "",
      password: "",
      passwordConfirmation: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      zip:"",
      phone: "",
      email:""
    };

    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);

      const newUser = { 
        username: formData.username,
        password: formData.password,
        passwordConfirmation: formData.passwordConfirmation,
        firstname: formData.firstname,
        lastname: formData.lastname,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        phone: formData.phone,
        email: formData.email
      }

      fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        })
        .then(setFormData(initialFormState))
        history.push("/login");
    }
  
    return (
      <Container style={{width: "500px"}}>
      <Card >
        <Card.Body >
      <div className="background">
        <h3 className="center-content">Signup</h3>
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
              <label htmlFor="username">Username:</label>
              <input
                name="username"
                type="text"
                id={FormData.username}
                value={formData.username}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label htmlFor="password">Password:</label>
              <input
                name="password"
                type="password"
                id={FormData.password}
                value={formData.password}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label htmlFor="password_confirmation">Confirm Password:</label>
              <input
                name="passwordConfirmation"
                type="password"
                id={FormData.password_confirmation}
                value={formData.passwordConfirmation}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>First Name:</label>
              <input
                name="firstname"
                type="text"
                id={FormData.firstname}
                value={formData.firstname}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>Last Name:</label>
              <input
                name="lastname"
                type="text"
                id={FormData.lastname}
                value={formData.lastname}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>Street:</label>
              <input
                name="address"
                type="text"
                id={FormData.address}
                placeholder="ex. 123 N Street"
                value={formData.address}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>City:</label>
              <input
                name="city"
                type="text"
                id={FormData.city}
                value={formData.city}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>State:</label>
              <input
                name="state"
                type="text"
                id={FormData.state}
                value={formData.state}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>Zip:</label>
              <input
                name="zip"
                type="number"
                id={FormData.zip}
                value={formData.zip}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>Phone Number:</label>
              <input
                name="phone"
                type="text"
                id={FormData.phone}
                placeholder="###-###-#### "
                value={formData.phone}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <label>Email:</label>
              <input
                name="email"
                type="text"
                id={FormData.email}
                placeholder="name@email.com"
                value={formData.email}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <br></br>
              <Button variant="primary" type="submit">Sign Up</Button>
            </form>
          </div>
        </div>
      </div>
      </Card.Body>
      </Card>
      </Container>
      
        
    );
  }

export default Signup