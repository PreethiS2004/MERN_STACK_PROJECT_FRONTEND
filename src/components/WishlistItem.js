import React, { useState } from "react";

const WishlistItem = ({ recipeName, recipeThumb, recipeInstruction, onGoBack }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleGoBack = () => {
    setIsClicked(false);
    onGoBack(); // You may want to perform additional actions when going back
  };

  return (
    <>
      {!isClicked && (
        <div
          style={{
            borderRadius: "8px",
            padding: "16px",
            margin: "16px",
            cursor: "pointer",
            width: "250px",
            height: "310px",
            backgroundColor: "rgb(226, 224, 224)"
          }}
          onClick={handleClick}
        >
          <h2>Wishlist</h2>
          <h3 style={{ fontSize: "18px" }}>{recipeName}</h3>
          <img src={recipeThumb} alt={recipeName} style={{ maxWidth: "100%", padding: "10%", borderRadius: "50%" }} />
        </div>
      )}

      {isClicked && (
        <div
          style={{
            borderRadius: "8px",
            padding: "16px",
            margin: "16px",
            width: "90%",
            backgroundColor: "pink"
          }}
        >
          <p>{recipeInstruction}</p>
        </div>
      )}
    </>
  );
};

export default WishlistItem;
