import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import WishlistItem from "./WishlistItem";
const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch random recipes when the component mounts
    const fetchRandomRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:4001/RecipeRoute/list");
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching random recipes:", error);
      }
    };

    fetchRandomRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    console.log("Recipe clicked:", recipe);
    setSelectedRecipe(recipe);
  };
  const handleWishlistItemClick = (recipe) => {
    console.log("Wishlist item clicked:", recipe);
    setSelectedRecipe({
      strMeal: recipe.strMeal,
      strMealThumb:recipe.strMealThumb ,
      strInstructions: recipe.strInstruction ,
      strIngredient: Array.from({ length: 20 }, (_, index) => index + 1)
      .filter((index) => recipe[`strIngredient${index}`])
      .map((index) => ({
        ingredient: recipe[`strIngredient${index}`],
        measure: recipe[`strMeasure${index}`],
      })),
    });
  };
  

  const addToWishlist = () => {
    // Add the recipe name to the wishlist
    setWishlist((prevWishlist) => [...prevWishlist, selectedRecipe.strMeal]);
  };

  return (
    <div>
      <h3>Random Recipes</h3>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recipes.map((recipe, index) => (
          <div
            key={index}
            style={{
              borderRadius: "8px",
              padding: "16px",
              margin: "16px",
              cursor: "pointer",
              width:"250px",
              height:"310px",
              backgroundColor: "rgb(226, 224, 224)"
            }}
            onClick={() => handleRecipeClick(recipe)}
          >
            <h3 style={{fontSize:"18px"}}>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ maxWidth: "100%" ,padding:"10%",borderRadius:"50%"}} />
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div >
          <h2>Selected Recipe</h2>
          <h3>{selectedRecipe.strMeal}</h3>
          <img
            src={selectedRecipe.strMealThumb}
            alt={selectedRecipe.strMeal}
            style={{ alignItems:"center",maxWidth: "30%", padding: "5%", borderRadius: "50%" }}
          />
          <h3>Instruction</h3>
          <p>{selectedRecipe.strInstructions}</p>

          <h3>Ingredients</h3>
          <ul>
            {Array.from({ length: 20 }, (_, index) => index + 1)
              .filter((index) => selectedRecipe[`strIngredient${index}`])
              .map((index) => (
                <li key={index}>
                  {selectedRecipe[`strIngredient${index}`]} - {selectedRecipe[`strMeasure${index}`]}
                </li>
              ))}
          </ul>

          <button onClick={() => addToWishlist()}>Add to Wishlist</button>
          <button onClick={() => setSelectedRecipe(null)}>Close</button>
        </div>
      )}

      {/* Display Wishlist */}
      <div>
        
        <div style={{ display: "flex", flexWrap: "wrap" }}>
        {wishlist.map((recipeName, index) => (
            <div key={index}>
            <WishlistItem
              recipeName={recipeName}
              recipeThumb={selectedRecipe.strMealThumb}
              recipeInstruction={selectedRecipe.strInstructions}
              recipeIngredient={selectedRecipe.strIngredient}
              onClick={() => handleWishlistItemClick(recipeName)}
            />
            {location.pathname !== "/" && (
              <button className="btn back-btn" onClick={() => navigate(-1)}>
                &larr; Go Back
              </button>
            )}
          </div>
            
        ))}
      </div>
        </div>
      </div>
    
  );
};

export default RecipePage;