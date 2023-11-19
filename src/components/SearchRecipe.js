
import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeclick, setrecipeclick] = useState(true);

  useEffect(() => {
    // Fetch random recipes when the component mounts
    const fetchRandomRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4001/RecipeRoute/list"
        );
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching random recipes:", error);
      }
    };

    fetchRandomRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    setrecipeclick(false);
    console.log("Recipe clicked:", recipe);
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <SearchRecipe setRecipes={setRecipes} />
      {recipeclick && (
        <div style={{ display: "flex", flexWrap: "wrap" ,marginLeft:"10%",marginTop:"3%"}}>
          {recipes.map((recipe, index) => (
            <div
              key={index}
              style={{
                borderRadius: "8px",
                padding: "16px",
                margin: "16px",
                cursor: "pointer",
                width: "250px",
                height: "310px",
                backgroundColor: "rgb(226, 224, 224)",
              }}
              onClick={() => handleRecipeClick(recipe)}
            >
              <h3 style={{ fontSize: "18px" }}>{recipe.strMeal}</h3>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                style={{
                  maxWidth: "100%",
                  padding: "10%",
                  borderRadius: "50%",
                }}
              />
            </div>
          ))}
        </div>
      )}

      {!recipeclick && (
      <div style={{marginTop:"5%",marginLeft:"7%"}}>
         <div
              style={{
                
                borderRadius: "8px",
                padding: "16px",
                margin: "16px",
                cursor: "pointer",
                width: "90%",
                height: "90%",
                backgroundColor: "rgb(226, 224, 224)",
              }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", maxWidth: "30%" }}>
            <img
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
              style={{
                width: "200px",
                borderRadius: "50%",
                marginTop:"50%",
                marginLeft:"15%"
              }}
            />
          </div>
          <div>
          <div style={{ flex: 1, textAlign: "justify", textJustify: "inter-word", marginTop: "30px",marginLeft:"60px" }}>
            <h3 style={{fontSize:"35px",marginLeft:"25%"}}>{selectedRecipe.strMeal}</h3>
            
            <h3 style={{marginTop:"2%"}}>Instruction</h3>
            <p
              style={{
              textAlign: "justify",
              textJustify: "inter-word",
              }}
            >
          {selectedRecipe.strInstructions}
           </p>
           </div>
            <div style={{ flex: 1, textAlign: "justify", textJustify: "inter-word" ,marginTop: "30px",marginLeft:"60px" }}>
         <h3>Ingredients</h3>
         <ul>
          {Array.from({ length: 20 }, (_, index) => index + 1)
            .filter((index) => selectedRecipe[`strIngredient${index}`])
            .map((index) => (
              <li key={index}>
                {selectedRecipe[`strIngredient${index}`]} -{" "}
                {selectedRecipe[`strMeasure${index}`]}
              </li>
            ))}
        </ul>
      </div>
            <button
              style={{ borderRadius: "5px" ,marginLeft:"40%"}}
              onClick={() => {
                setSelectedRecipe(null);
                setrecipeclick(true);
              }}
            >
              Go back
            </button>
            </div>
          </div>
        </div>
      </div>      
        
      )}

    </div>
  );
};

const SearchRecipe = ({ setRecipes }) => {
  const [recipequery, setrecipeQuery] = useState("");
  const [ingredientquery, setingredientQuery] = useState("");
  const [categoryquery, setcategoryQuery] = useState("");
  const [cuisinequery, setcuisineQuery] = useState("");
  const [recipeclick, setrecipeclick] = useState(true);

  const handlerecipeSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/RecipeRoute/recipe/${recipequery}`
      );
      setRecipes(response.data); // Set the recipes from the search
    } catch (error) {
      console.error("Error searching recipes:", error);
    }

  };

  const handleingredientSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/RecipeRoute/ingredient/${ingredientquery}`
      );
      setRecipes(response.data); // Set the recipes from the search
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
 
  };

 
  const handleSearch = async (type) => {
    let query = "";
    switch (type) {
      
      case "category":
        query = categoryquery;
        break;
      case "cuisine":
        query = cuisinequery;
        break;
      default:
        break;
    }

    try {
      const response = await axios.get(
        `http://localhost:4001/RecipeRoute/${type}/${query}`
      );
      setRecipes(response.data);
    } catch (error) {
      console.error(`Error searching ${type}s:`, error);
    }
  };

  const searchBoxContainerStyle = {
    display: "flex",
    marginTop:"10px",
  };

  const searchBoxStyle = {
    marginRight: "10px",
  };
  return (
    <div style={searchBoxContainerStyle}>
      {recipeclick && (
        <div style={searchBoxStyle}>
          <input
          style={{borderRadius:"5px",borderWidth:"1px",marginLeft:"200px"}}
            type="text"
            value={recipequery}
            placeholder="Search Recipes"
            onChange={(e) => setrecipeQuery(e.target.value)}
          />
          <button style={{borderRadius:"5px",border:"0",marginLeft:"15px"}} onClick={handlerecipeSearch}>Search</button>
        </div>
      )}
      {recipeclick && (
        <div style={searchBoxStyle}>
          <input
          style={{borderRadius:"5px",borderWidth:"1px",marginLeft:"10px"}}
            type="text"
            value={ingredientquery}
            placeholder="Search Ingredient"
            onChange={(e) => setingredientQuery(e.target.value)}
          />
          <button style={{borderRadius:"5px",border:"0",marginLeft:"15px"}} onClick={handleingredientSearch}>Search</button>
        </div>
      )}
      {recipeclick && (
        <div style={searchBoxStyle}>
           <select
           style={{borderRadius:"5px",marginLeft:"10px"}}
            type="text"
            value={categoryquery}
            onChange={(e) => setcategoryQuery(e.target.value)}
          >
            <option value="" style={{color:"rgb(226, 224, 224)"}}>Category</option>
            <option value="Beef">Beef</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Chicken">Chicken</option>
            <option value="Dessert">Dessert</option>
            <option value="Goat">Goat</option>
            <option value="Lamb">Lamb</option>
            <option value="Miscellaneous">Miscellaneous</option>
            <option value="Pasta">Pasta</option>
            <option value="Pork">Pork</option>
            <option value="Seafood">Seafood</option>
            <option value="Side">Side</option>
            <option value="Starter">Starter</option>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
          </select>
            <button style={{borderRadius:"5px",border:"0",marginLeft:"15px"}} onClick={() => handleSearch("category")}>Search</button>        </div>
      )}
      {recipeclick && (
        <div style={searchBoxStyle}>
          <select
          style={{borderRadius:"5px",marginLeft:"10px"}}
            type="text"
            value={cuisinequery}
            onChange={(e) => setcuisineQuery(e.target.value)}
          >
            <option value="" style={{color:"rgb(226, 224, 224)"}}>Cuisine</option>
            <option value="American">American</option>
            <option value="Canadian">Canadian</option>
            <option value="Chinese">Chinese</option>
            <option value="Croatian">Croatian</option>
            <option value="Dutch">Dutch</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Filipino">Filipino</option>
           <option value="French">French</option>
           <option value="Greek">Greek</option>
           <option value="Indian">Indian</option>
           <option value="Irish">Irish</option>
           <option value="Italian">Italian</option>
           <option value="Jamaican">Jamaican</option>
           <option value="Japanese">Japanese</option>
           <option value="Kenyan">Kenyan</option>
           <option value="Malaysian">Malaysian</option>
           <option value="Mexican">Mexican</option>
           <option value="Moroccan">Moroccan</option>
           <option value="Portuguese">Portuguese</option>
           <option value="Russian">Russian</option>
           <option value="Spanish">Spanish</option>
           <option value="Thai">Thai</option>
           <option value="Tunisian">Tunisian</option>
           <option value="Turkish">Turkish</option>
           <option value="Unknown">Unknown</option>
           <option value="Vietnamese">Vietnamese</option>
            
          </select>
            <button style={{borderRadius:"5px",border:"0",marginLeft:"15px"}} onClick={() => handleSearch("cuisine")}>Search</button>       
        </div>
      )}
      
    </div>
  );
};

export default Recipe;