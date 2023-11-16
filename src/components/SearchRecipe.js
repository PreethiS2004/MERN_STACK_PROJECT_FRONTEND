// src/components/SearchRecipe.js
import React, { useState } from "react";
import axios from "axios";

const SearchRecipe = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/RecipeRoute/recipe/${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map((recipe, index) => (
          <li key={index}>{recipe.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchRecipe;
