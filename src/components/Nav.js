import {Link} from "react-router-dom";
import logo from "./ecip.gif";

function Nav(){
    return(
      <nav class="navbar" >
             
            <Link to="/" class="navbar-brand " style={{fontFamily:"initial",fontSize:"35px",fontWeight:"bold"}}><img style={{height:"60px"}} src={logo} alt="loading..." />  Food Recipes</Link>
            <div class="nav" >
            <Link to="/" class="nav-link" style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Home</Link>
            <Link to="/user-login" class="nav-link" style={{color:" rgb(57, 56, 56)",fontSize:"20px"}}>Login</Link>
            <Link to="/admin-login" class="nav-link" style={{color:" rgb(57, 56, 56)",fontSize:"20px"}}>Admin</Link>
            <Link to="/user-signup" class="nav-link"style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Signup</Link>
            <Link to="/signout" class="nav-link"style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Signout</Link>

            </div>
            
        </nav>
    );
};

export default Nav;

//            <Link to="/recipe" class="nav-link"style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Recipe</Link>
