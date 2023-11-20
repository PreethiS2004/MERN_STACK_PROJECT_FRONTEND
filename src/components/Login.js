import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Form from "./LoginForm";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { username, password };

    try {
      const response = await Axios.post("http://localhost:4001/Route/user-login", data);

      if (response.status === 200) {
        alert("Login successful");
        navigate('/search');
      } else {
        alert("Invalid username or password");
        setUsername(""); // Reset the username field
        setPassword(""); // Reset the password field
        formRef.current.reset(); // Reset the form using the form reference
      }
    } catch (error) {
      alert("Invalid username or password");
      setUsername(""); // Reset the username field
      setPassword(""); // Reset the password field
      formRef.current.reset(); // Reset the form using the form reference
    }
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
      <Form
          getState={(childData) => {
            setUsername(childData[0]);
            setPassword(childData[1]);
          }}
          usernamevalue={username}
          passwordvalue={password}
        >
          {/* Your form components */}
        </Form>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
