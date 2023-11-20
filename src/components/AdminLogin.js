import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import Axios from "axios";
import Form from "./AdminLoginForm";

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
    Axios.post("http://localhost:4001/Route/admin-login", data)
      .then((res) => {
        if (res.status === 200) {
          alert("Admin Login successful");
          setErrorMessage(null);
          navigate("/adminpage"); // Use navigate instead of push
        } else {
          alert("Invalid username or password");
          event.target.reset();
        }
      })
      .catch((error) => alert("Invalid username or password"));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Form getState={getState} usernamevalue="" passwordvalue="">
          {/* Your form components */}
        </Form>
      </form>
     
    </div>
  );
}

export default Login;