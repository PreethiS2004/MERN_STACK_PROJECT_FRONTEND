// RecipeDetails.js
import React from "react";

const RecipeDetails = ({ selectedRecipe }) => {
  if (!selectedRecipe) {
    return <p>No recipe selected.</p>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <h3>{selectedRecipe.strMeal}</h3>
      <img
        src={selectedRecipe.strMealThumb}
        alt={selectedRecipe.strMeal}
        style={{ maxWidth: "30%", padding: "5%", borderRadius: "50%" }}
      />
      <h3>Instruction</h3>
      <p>{selectedRecipe.strInstructions}</p>

      <h3>Ingredients</h3>
      <ul>
        {selectedRecipe.strIngredient.map((ingredient, index) => (
          <li key={index}>
            {ingredient.ingredient} - {ingredient.measure}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
