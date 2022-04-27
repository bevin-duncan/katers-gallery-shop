import React, { useState } from 'react'

  function Signup({ onLogin }) {
    // const [errors, setErrors] = useState([]);

    // const [formData, setFormData] = useState({
    //   username: "",
    //   password: "",
    //   passwordConfirmation: "",
    //   first_name: "",
    //   last_name: "",
    //   address:"",
    //   city:"",
    //   state: "",
    //   zip:"",
    //   phone: "",
    //   email:""
    // })

    // const initialFormState = {
    //   username: "",
    //   password: "",
    //   passwordConfirmation: "",
    //   first_name: "",
    //   last_name: "",
    //   address:"",
    //   city:"",
    //   state: "",
    //   zip:"",
    //   phone: "",
    //   email:""
    // };

    // function handleChange(e) {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //   });
    // }
  
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   setErrors([]);

    //   const newUser = { 
    //     username: formData.username,
    //     password: formData.password,
    //     passwordConfirmation: formData.passwordConfirmation,
    //     first_name: formData.first_name,
    //     last_name: formData.last_name,
    //     address: formData.address,
    //     city: formData.city,
    //     state: formData.state,
    //     zip: formData.zip,
    //     phone: formData.phone,
    //     email: formData.email
    //   }

    //   fetch(`/signup`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(newUser),
    //   })
    //     .then((r) => {
    //       if (r.ok) {
    //         r.json().then((user) => onLogin(user));
    //       } else {
    //         r.json().then((err) => setErrors(err.errors));
    //       }
    //     })
    //     .then(setFormData(initialFormState));
    // }
  
    // return (
    //   <div className="background">
    //     <h3 className="center-content">Signup</h3>
    //     <div className="form-border center-content">
    //       <div className="ui grid">
    //         <form 
    //             className="ui two fields form center"
    //             onSubmit={(e) => handleSubmit(e)}
    //             >
    //             <div>
    //               {errors.map((error) => (
    //                 <ul className="errors">- {error}</ul>
    //               ))}
    //             </div>
    //           <label htmlFor="username">Username:</label>
    //           <input
    //             name="username"
    //             type="text"
    //             id={FormData.username}
    //             value={formData.username}
    //             onChange={(e) => handleChange(e)}
    //           />
    //           <label htmlFor="password">Password:</label>
    //           <input
    //             name="password"
    //             type="password"
    //             id={FormData.password}
    //             value={formData.password}
    //             onChange={(e) => handleChange(e)}
    //           />
    //           <label htmlFor="password_confirmation">Confirm Password:</label>
    //           <input
    //             name="passwordConfirmation"
    //             type="password"
    //             id={FormData.password_confirmation}
    //             value={formData.passwordConfirmation}
    //             onChange={(e) => handleChange(e)}
    //           />
    //           <label>First Name:</label>
    //           <input
    //             name="firstname"
    //             type="text"
    //             id={FormData.first_name}
    //             value={formData.first_name}
    //             onChange={(e) => handleChange(e)}
    //           />
    //           <label>Last Name:</label>
    //           <input
    //             name="lastname"
    //             type="text"
    //             id={FormData.last_name}
    //             value={formData.last_name}
    //             onChange={(e) => handleChange(e)}
    //           />
    //           <label>Street:</label>
    //           <input
    //             name="address"
    //             type="text"
    //             id={FormData.address}
    //             placeholder="ex. 123 N Street"
    //             value={formData.address}
    //             onChange={(e) => handleChange(e)}
    //           />

    //           {/* city 
    //           state
    //           zip */}
    //           <label>Phone Number:</label>
    //           <input
    //             name="number"
    //             type="text"
    //             id={FormData.phone}
    //             placeholder="###-###-#### "
    //             value={formData.phone}
    //             onChange={(e) => handleChange(e)}
    //           />
    //           {/* email */}
    //           <br></br>
    //           <br></br>
    //           <button className="ui submit button center" type="submit">Sign Up</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // );
  }

export default Signup