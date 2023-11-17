import { useState } from "react";
import "../styles/signuplogin.css"; // Import the CSS file for styling

function Form(props)
{
    const [username,setUsername]=useState("props.usernameValue");
    const [password,setPassword]=useState("props.PasswordValue");

    const arr = [username,password];
      
    const handleClick=()=>{
        props.getState(arr);
    }

    return(
        <div class="login-form">
        <div className="form-container">
            <h2 class="form-title">Admin Log in </h2>
            <input type="text"onChange={(event)=>setUsername(event.target.value)}  class="form-control my-3" placeholder="Enter the Username" required/>
            <input type="password" onChange={(event)=>setPassword(event.target.value)} class="form-control my-3" placeholder="Enter the password" required/>
            <button style={{width:"300px"}} onClick={handleClick} class="btn btn-primary my-3 d-block mx-auto" type="submit">Login</button>
            
        </div>
        </div>
    )
}

export default Form;