import React, { useState } from "react";
import Axios from "axios";
const MealForm = () => {
  const [mealData, setMealData] = useState({
    idMeal: '',
    strIngredients: '',
    strInstructions: '',
    strMeal: '',
    strMealThumb: '',
    strArea: '',
    strCategory: '',
    strTags: '',
  });

  const handleChange = (e) => {
    setMealData({ ...mealData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const isEmptyField = Object.values(mealData).some(value => value.trim() === '');

  if (isEmptyField) {
    alert("Please fill in all fields");
    return;
  }

    try {
      const response = await Axios.post("http://localhost:4001/RecipeRoute/create-recipe", mealData);

      if (response.status === 200) {
        alert("Successfully Added the Recipe");
        event.target.reset();
      } else {
        console.error(response.data); 
        event.target.reset();// Log the response data for debugging
      }
    } catch (error) {
      console.error("Error adding recipe:", error.message);
      alert("Error adding recipe. Please check the console for details.");
      event.target.reset();
    }
  };

  return (
  <div >
    <div className="form-container">
      <h2 style={{textAlign:"center"}}>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          idMeal:
          <input type="text" name="idMeal" value={mealData.idMeal} onChange={handleChange} />
        </label>

        <label>
          strIngredients:
          <textarea
            name="strIngredients"
            value={mealData.strIngredients}
            onChange={handleChange}
          />
        </label>

        <label>
          strInstructions:
          <textarea
            name="strInstructions"
            value={mealData.strInstructions}
            onChange={handleChange}
          />
        </label>

        <label>
          strMeal:
          <input type="text" name="strMeal" value={mealData.strMeal} onChange={handleChange} />
        </label>

        <label>
          strMealThumb:
          <input
            type="text"
            name="strMealThumb"
            value={mealData.strMealThumb}
            onChange={handleChange}
          />
        </label>

        <label>
          strArea:
          <input type="text" name="strArea" value={mealData.strArea} onChange={handleChange} />
        </label>

        <label>
          strCategory:
          <input
            type="text"
            name="strCategory"
            value={mealData.strCategory}
            onChange={handleChange}
          />
        </label>

        <label>
          strTags:
          <input type="text" name="strTags" value={mealData.strTags} onChange={handleChange} />
        </label>
        <br/>
        <button type="submit">Insert Meal</button>
      </form>
    </div>
    </div>
  );
}

export default MealForm;
