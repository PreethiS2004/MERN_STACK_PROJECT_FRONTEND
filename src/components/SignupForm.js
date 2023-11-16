import React, { useState } from "react";
import "../styles/signuplogin.css"; // Import the CSS file for styling

function Form(props) {
  const [email, setEmail] = useState(props.emailValue || ""); // Use props.emailValue as initial state if provided
  const [username, setUsername] = useState(props.usernameValue || "");
  const [password, setPassword] = useState(props.passwordValue || ""); // Use props.passwordValue as initial state if provided

  const handleClick = () => {
    const arr = [email,username, password];
    props.getState(arr);
  };

  return (
    <div class="signup-form">
    <div className="form-container ">
      <h2 className="form-title">Sign up</h2>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="form-control my-3"
        placeholder="Email"
        required/>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className="form-control my-3"
        placeholder="Username"
        required/>
      
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="form-control my-3"
        placeholder="Password"
        required/>
      
      <button
        style={{ width: "300px" }}
        onClick={handleClick}
        className="btn btn-primary my-3 d-block mx-auto"
        type="submit"
      >
        Submit
      </button>
    </div>
    </div>
  );
}

export default Form;
