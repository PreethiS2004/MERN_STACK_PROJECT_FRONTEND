import {Link} from "react-router-dom";
import logo from "./ecip.gif";
import '../styles/nav.css';
function Nav(){
    return(
        <nav class="navbar" >
            <Link to="/" class="navbar-brand " style={{fontFamily:"initial",fontSize:"35px",fontWeight:"bold"}}><img style={{height:"80px"}} src={logo} alt="loading..." />  Food Recipes</Link>
            <div class="nav" >
            <Link to="/" class="nav-link" style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Home</Link>
            <Link to="/user-login" class="nav-link" style={{color:" rgb(57, 56, 56)",fontSize:"20px"}}>Log in</Link>
            <Link to="/user-signup" class="nav-link"style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Sign up</Link>
            <Link to="/create-recipe" class="nav-link"style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Add Recipes</Link>
            <Link to="/recipe" class="nav-link"style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Recipe</Link>
            <Link to="/search" class="nav-link"style={{color:"rgb(57, 56, 56)",fontSize:"20px"}}>Search</Link>
            
            </div>
        </nav>
    )
}

export default Nav;