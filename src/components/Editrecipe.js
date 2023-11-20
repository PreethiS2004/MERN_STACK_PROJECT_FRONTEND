import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../styles/Editrecipe.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const Editrecipe = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const navigate = useNavigate();
  const [recipeupdateclick, setrecipeupdateclick] = useState(false);
  const [recipeid, setrecipeid] = useState("");
  useEffect(() => {
    // Fetch recipe details from the server when the component mounts
    const fetchRecipeDetails = async () => {
      try {
        const response = await Axios.get(
          "https://recipe-finder-project-backend.onrender.com/RecipeRoute"
        );
        setRecipeDetails(response.data);
      } catch (error) {
        console.error("Error fetching recipe details:", error.message);
      }
    };

    fetchRecipeDetails();
  }, []);

  const handleClick = (recipeId) => {
    Axios.delete(
      `https://recipe-finder-project-backend.onrender.com/RecipeRoute/delete-recipe/${recipeId}`
    )
      .then((res) => {
        if (res.status === 200) {
          alert("Record deleted successfully");
          window.location.reload();
        } else {
          console.error("Delete request failed with status:", res.status);
          return Promise.reject(
            `Delete request failed with status: ${res.status}`
          );
        }
      })
      .catch((err) => {
        console.error("Error deleting recipe:", err.message);
        alert("Error deleting recipe. Check the console for details.");
      });
  };

  const handleupdateClick = (recipeId) => {
    console.log(recipeId);
    setrecipeupdateclick(true);
    setrecipeid(recipeId);
    mealData.idMeal = recipeId;
  };

  const [mealData, setMealData] = useState({
    idMeal: "",
    strMeal: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strMealThumb: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strTags: "",
  });
  const handleTopGoBack = () => {
    // Use the navigate function to go back
    navigate(-1);
  };

  const handleChange = (e) => {
    setMealData({ ...mealData, [e.target.name]: e.target.value });
  };

  const handleupdate = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post(
        "https://recipe-finder-project-backend.onrender.com/RecipeRoute/update-recipe",
        mealData
      );

      if (response.status === 200) {
        alert("Successfully Added the Recipe");
        setMealData({
          idMeal: "",
          strMeal: "",
          strCategory: "",
          strArea: "",
          strInstructions: "",
          strMealThumb: "",
          strIngredient1: "",
          strIngredient2: "",
          strIngredient3: "",
          strIngredient4: "",
          strIngredient5: "",
          strIngredient6: "",
          strIngredient7: "",
          strTags: "",
        });
      } else {
        console.error(response.data);
      }
    } catch (error) {
      alert("Error adding recipe. Please check the console for details.");
    }
  };
  return (
    <div className="recipe-details-container">
      <button
        style={{
          position: "relative",
          left: "45%",
          bottom: "10px",
          borderRadius: "8px",
          border: "1",
        }}
        onClick={handleTopGoBack}
      >
        Go back
      </button>
      {!recipeupdateclick && (
        <h2 style={{ paddingBottom: "2%" }}>Recipe Details</h2>
      )}

      {!recipeupdateclick && (
        <table className="recipe-details-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Recipe Name</th>
              <th>Category</th>
              <th>Area</th>
              <th>Action</th>
              <th>Update</th>
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
                  <button
                    onClick={() => handleClick(recipe._id)}
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleupdateClick(recipe.idMeal)}
                    className="btn btn-success"
                  >
                    update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {recipeupdateclick && (
        <div class="recipe-form">
          <div className="form-container" style={{ width: "50%" }}>
            <h2 class="form-title">Update Recipe Details</h2>
            <form onSubmit={handleupdate} style={{ marginBottom: "27%" }}>
              <p>Recipe id: {recipeid}</p>

              <input
                type="text"
                name="strMeal"
                value={mealData.strMeal}
                class="form-control my-3"
                onChange={handleChange}
                placeholder="Dish Name"
                required
              />

              <input
                name="strIngredient1"
                value={mealData.strIngredient1}
                class="form-control my-3"
                onChange={handleChange}
                placeholder="Ingredients"
                required
              />
              <input
                name="strIngredient2"
                value={mealData.strIngredient2}
                class="form-control my-3"
                onChange={handleChange}
                required
              />
              <input
                name="strIngredient3"
                value={mealData.strIngredient3}
                class="form-control my-3"
                onChange={handleChange}
                required
              />
              <input
                name="strIngredient4"
                value={mealData.strIngredient4}
                class="form-control my-3"
                onChange={handleChange}
                required
              />
              <input
                name="strIngredient5"
                value={mealData.strIngredient5}
                class="form-control my-3"
                onChange={handleChange}
                required
              />
              <input
                name="strIngredient6"
                value={mealData.strIngredient6}
                class="form-control my-3"
                onChange={handleChange}
                required
              />

              <textarea
                name="strInstructions"
                value={mealData.strInstructions}
                class="form-control my-3"
                onChange={handleChange}
                placeholder="Instruction"
                required
              />

              <input
                type="text"
                name="strMealThumb"
                value={mealData.strMealThumb}
                class="form-control my-3"
                onChange={handleChange}
                placeholder="Image url in jpg "
                required
              />

              <input
                type="text"
                name="strArea"
                value={mealData.strArea}
                class="form-control my-3"
                onChange={handleChange}
                placeholder="Area"
                required
              />

              <input
                type="text"
                name="strCategory"
                value={mealData.strCategory}
                class="form-control my-3"
                onChange={handleChange}
                placeholder="Category"
                required
              />

              <input
                type="text"
                name="strTags"
                value={mealData.strTags}
                class="form-control my-3"
                onChange={handleChange}
                placeholder="Tags"
                required
              />

              <br />
              <button
                style={{ width: "300px" }}
                class="btn btn-primary my-3 d-block mx-auto"
                type="submit"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editrecipe;
