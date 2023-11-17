import React, { useState } from "react";
import Axios from "axios";
import '../styles/UserCRUD.css';
const MealForm = () => {
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
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
  });

  const handleChange = (e) => {
    setMealData({ ...mealData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert the selected image to a data URL
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setMealData({
          ...mealData,
          strMealThumb: reader.result,
        });
      };
    }
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
  <div class="recipe-form" onSubmit={handleSubmit}>
    <div className="form-container" style={{width:"50%"}}>
      <h2 class="form-title">Add a New Recipe</h2>
      
        
          <input type="number" name="idMeal" value={mealData.idMeal} class="form-control my-3" onChange={handleChange} placeholder="Id"/>
       
          <input type="text" name="idMeal" value={mealData.strMeal} class="form-control my-3" onChange={handleChange} placeholder="Dish Name"/>
      
      
          <input name="strIngredient1" value={mealData.strIngredient1} class="form-control my-3" onChange={handleChange} placeholder="Ingredients"/>
          <input name="strIngredient2" value={mealData.strIngredient2} class="form-control my-3"onChange={handleChange}/>
          <input name="strIngredient3" value={mealData.strIngredient3}  class="form-control my-3" onChange={handleChange}/>
          <input name="strIngredient4" value={mealData.strIngredient4} class="form-control my-3" onChange={handleChange}/>
          <input name="strIngredient5" value={mealData.strIngredient5} class="form-control my-3" onChange={handleChange}/>
          <input name="strIngredient6" value={mealData.strIngredient6} class="form-control my-3" onChange={handleChange}/>
          

          <textarea name="strInstructions"  value={mealData.strInstructions} class="form-control my-3" onChange={handleChange} placeholder="Instruction"/>
       
          <input type="file" name="strMealThumb" accept="image/*" value={mealData.strMealThumb} class="form-control my-3" onChange={handleImageChange} placeholder="Image"/>
     
          <input type="text" name="strArea" value={mealData.strArea} class="form-control my-3" onChange={handleChange} placeholder="Area" />
     

          <input type="text" name="strCategory"  value={mealData.strCategory} class="form-control my-3" onChange={handleChange} placeholder="Category"/>

          <input type="text" name="strTags" value={mealData.strTags} class="form-control my-3" onChange={handleChange} placeholder="Tags"/>
       
        <br/>
        <button style={{width:"300px"}} class="btn btn-primary my-3 d-block mx-auto" type="submit">Submit</button>
        </div>
    </div>
  );
}

export default MealForm;
