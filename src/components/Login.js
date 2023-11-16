import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Axios from "axios";
import Form from "./LoginForm";

function Login() {
  const [arr, setArr] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { username: arr[0], password: arr[1] };
    Axios.post("http://localhost:4001/Route/user-login", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Login successful");
          setErrorMessage(null);
          event.target.reset();
          // Redirect to '/recipe/page' upon successful login
          navigate('/recipe'); // Use navigate instead of push
        } else {
          alert(setErrorMessage("Invalid username or password"));
          event.target.reset();
        }
      })
      .catch((error) => {
        // Handle errors
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form getState={getState} usernamevalue="" passwordvalue="">
          {/* Your form components */}
        </Form>
      </form>
      {errorMessage && (
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      )}
    </div>
  );
}

export default Login;
