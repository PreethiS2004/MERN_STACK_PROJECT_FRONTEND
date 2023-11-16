
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import UserCRUD from './components/UserCRUD';
import Homepage from './components/Homepage';
import RecipePage from './components/RecipePage';
import RecipeDetails from './components/RecipeDetails';
import SearchRecipe from "./components/SearchRecipe";
function App() {
  return (
   <div>
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user-signup" element={<Signup/>}/>
        <Route path="/user-login" element={<Login/>}/>
        <Route path="/create-recipe" element={<UserCRUD/>}/>
        <Route path="/recipe" element={<RecipePage/>}/>
        <Route path="/search" element={<SearchRecipe/>}/>




      </Routes>
    </HashRouter>
   </div>
  );
}

export default App;  