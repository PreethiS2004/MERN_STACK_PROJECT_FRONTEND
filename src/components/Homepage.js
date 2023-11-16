import React from "react";
import Home from "./Home"; // Import the Home component from the correct path
import Footer from "./Footer"; // Import the Footer component from the correct path
import "../App.css";

const App = () => {
  return (
    <div className="App">
      <Home />   
      <Footer /> 
    </div>
  );
};

export default App;
