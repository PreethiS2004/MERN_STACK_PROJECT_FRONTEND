import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Editrecipe.css"; // Import the CSS file for styling

const Editrecipe = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);

  useEffect(() => {
    // Fetch recipe details from the server when the component mounts
    const fetchRecipeDetails = async () => {
      try {
        const response = await Axios.get("http://localhost:4001/RecipeRoute");
        setRecipeDetails(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error.message);
      }
    };

    fetchRecipeDetails();
  }, []);

  const handleClick = (recipeId) => {
    Axios.delete(`http://localhost:4001/RecipeRoute/delete-recipe/${recipeId}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Record deleted successfully");
          window.location.reload();
        } else {
          console.error("Delete request failed with status:", res.status);
          return Promise.reject(`Delete request failed with status: ${res.status}`);
        }
      })
      .catch((err) => {
        console.error("Error deleting recipe:", err.message);
        alert("Error deleting recipe. Check the console for details.");
      });
  };

  return (
    <div className="recipe-details-container">
      <h2 style={{ paddingBottom: "2%" }}>Recipe Details</h2>
      <table className="recipe-details-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Recipe Name</th>
            <th>Category</th>
            <th>Area</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recipeDetails.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.idMeal}</td>
              <td>{recipe.strMeal}</td>
              <td>{recipe.strCategory}</td>
              <td>{recipe.strArea}</td>
              <td>
                <button onClick={() => handleClick(recipe._id)} className="btn btn-danger">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Editrecipe;
