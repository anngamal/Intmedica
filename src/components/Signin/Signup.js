
import React, { useState } from 'react';

export default function SignUp() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

 
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    // Assuming you have a formData object defined and populated earlier in the code
  
    fetch("http://127.0.0.1:5555/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    
    .then(resp => resp.json())
    .then(data => {
      setUsers(prevUsers => [...prevUsers, data]);
      // Reset the form data after a successful response
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
      });
      // Any code you want to execute after a successful response can go here
      
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  }
  console.log("hello");
  

  return (
    <div className="signupSection">
      <form id="SignupformInfo" onSubmit={handleSubmit}>
        {/* ...other input fields... */}
        <input
          className="inputSignupInfo"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
        />
         <input
           className="inputSignupInfo"
           type="text"
           name="lastName"
           value={formData.lastName}
           onChange={handleInputChange}
           placeholder="Last Name"
         />
         <input
           className="inputSignupInfo"
           type="email"
           name="email"
           value={formData.email}
           onChange={handleInputChange}
           placeholder="Email Address"
         />

         <input
          className="inputSignupInfo"
          type="password"
           name="password"
           value={formData.password}
           onChange={handleInputChange}
          placeholder="Password"
        />
        {/* <input
          className="inputSignupInfo"
          type="password"
           name="confirmPassword"
        //    value={formData.password}
        //    onChange={handleInputChange}
          placeholder="Confirm Password"
        /> */}
        <input
           className="inputSignupInfo"
           type="number"
           name="phoneNumber"
           value={formData.phoneNumber}
           onChange={handleInputChange}
           placeholder="Mobile Phone Number"
         />
        <button id="signUpBtn">Sign Up</button>
      </form>
    </div>
   
  );
}
console.log("hiiiiiiiiiiiii");

