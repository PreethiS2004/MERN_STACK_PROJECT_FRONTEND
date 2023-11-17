// DashboardPage.js

import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "50px" }}>
      {/* Card for Viewing Recipes */}
      <div style={cardStyle}>
        <h3>View Recipes</h3>
        <p>Explore and view existing recipes.</p>
        <Link to="/recipe">View Recipes</Link>
      </div>

      {/* Card for Adding Recipe */}
      <div style={cardStyle}>
        <h3>Add Recipe</h3>
        <p>Add a new recipe to the collection.</p>
        <Link to="/create-recipe">Add Recipe</Link>
      </div>
      <div style={cardStyle}>
        <h3>Edit Recipe</h3>
        <p>Edit a recipe in the collection.</p>
        <Link to="/edit-recipe">Edit Recipe</Link>
      </div>

      {/* Card for Viewing User Details */}
      <div style={cardStyle}>
        <h3>View & Edit User Details</h3>
        <p>See details of registered users.</p>
        <Link to="/view-user-details">View User Details</Link>
      </div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  width: "300px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

export default DashboardPage;
