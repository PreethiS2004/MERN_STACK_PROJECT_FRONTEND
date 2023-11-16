import React, { useState, useEffect } from "react";
import axios from "axios";
const RecipePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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

  return (
    <div>
      <h2>Random Recipes</h2>
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
              height:"300px",
              backgroundColor: "rgb(226, 224, 224)"
            }}
            onClick={() => handleRecipeClick(recipe)}
          >
            <h3 style={{fontSize:"20px"}}>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ maxWidth: "100%" ,padding:"10%",borderRadius:"50%"}} />
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div>
          <h2>Selected Recipe</h2>
          <h3 >{selectedRecipe.strMeal}</h3>
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} style={{ maxWidth: "30%" ,padding:"10%",borderRadius:"50%"}}  />
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

          <button onClick={() => setSelectedRecipe(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default RecipePage;   

/*
echo "# frontend" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/PreethiS2004/frontend.git
git push -u origin main
*/