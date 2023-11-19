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
    strTags:""
   
  });

  const handleChange = (e) => {
    setMealData({ ...mealData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await Axios.post("http://localhost:4001/RecipeRoute/create-recipe", mealData);
  
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
          strTags: ""
        });
      } else {
        console.error(response.data);
      }
    } catch (error) {
      alert("Error adding recipe. Please check the console for details.");
    }
  };
  return (
  <div class="recipe-form" >
    <div className="form-container" style={{width:"50%"}}>
      <h2 class="form-title">Add a New Recipe</h2>
       <form onSubmit={handleSubmit}>
        
          <input type="number" name="idMeal" value={mealData.idMeal} class="form-control my-3" onChange={handleChange} placeholder="Id" required/>
       
          <input type="text" name="strMeal" value={mealData.strMeal} class="form-control my-3" onChange={handleChange} placeholder="Dish Name" required/>
      
      
          <input name="strIngredient1" value={mealData.strIngredient1} class="form-control my-3" onChange={handleChange} placeholder="Ingredients" required/>
          <input name="strIngredient2" value={mealData.strIngredient2} class="form-control my-3"onChange={handleChange} required/>
          <input name="strIngredient3" value={mealData.strIngredient3}  class="form-control my-3" onChange={handleChange} required/>
          <input name="strIngredient4" value={mealData.strIngredient4} class="form-control my-3" onChange={handleChange} required/>
          <input name="strIngredient5" value={mealData.strIngredient5} class="form-control my-3" onChange={handleChange} required/>
          <input name="strIngredient6" value={mealData.strIngredient6} class="form-control my-3" onChange={handleChange} required/>
          

          <textarea name="strInstructions"  value={mealData.strInstructions} class="form-control my-3" onChange={handleChange} placeholder="Instruction" required/>
       
          <input type="text" name="strMealThumb" value={mealData.strMealThumb} class="form-control my-3" onChange={handleChange} placeholder="Image url in jpg " required/>
     
          <input type="text" name="strArea" value={mealData.strArea} class="form-control my-3" onChange={handleChange} placeholder="Area" required/>
     

          <input type="text" name="strCategory"  value={mealData.strCategory} class="form-control my-3" onChange={handleChange} placeholder="Category" required/>

          <input type="text" name="strTags" value={mealData.strTags} class="form-control my-3" onChange={handleChange} placeholder="Tags" required/>
       
        <br/>
        <button style={{width:"300px"}} class="btn btn-primary my-3 d-block mx-auto" type="submit" >Submit</button>
        </form>
        </div>
    </div>
  );
}

export default MealForm;
