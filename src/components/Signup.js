import Form from "./SignupForm";
import { useState } from "react";
import Axios from "axios";
function Signup()
{
  const [arr,setArr]=useState([]);
  const getState=(childData)=>{
      setArr(childData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {email:arr[0],username:arr[1],password:arr[2]};
    Axios.post("http://localhost:4001/Route/user-signup",data)
    .then((res)=>{
      if(res.status === 200){
        alert("Successfull Signup");
        event.target.reset();}
      else
        {Promise.reject();
        event.target.reset();}
    })
    .catch((err)=>alert(err));
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <Form getState={getState}
            emailvalue=""
            usernamevalue=""
            passwordvalue=""> 
      </Form>
    </form>
  )
}

export default Signup;