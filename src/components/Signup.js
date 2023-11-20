import Form from "./SignupForm";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

function Signup() {
  const [arr, setArr] = useState([]);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const getState = (childData) => {
    setArr(childData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email: arr[0], username: arr[1], password: arr[2] };
    Axios.post(
      "https://recipe-finder-project-backend.onrender.com/Route/user-signup",
      data
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Successfull Signup");
          navigate("/user-login"); // Use navigate instead of push
        } else {
          Promise.reject();
          event.target.reset();
        }
      })
      .catch((err) => alert(err));
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Form
        getState={getState}
        emailvalue=""
        usernamevalue=""
        passwordvalue=""
      ></Form>
    </form>
  );
}

export default Signup;
