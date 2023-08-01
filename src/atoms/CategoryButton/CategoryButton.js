// CategoryButton.js
import React from "react";
import "./CategoryButton.css";

const CategoryButton = ({ title, image }) => {
  return (
    <div className="category-button">
      <div
        className="category-icon"
        style={{ backgroundImage: `url(${image})` }}
      />
      <p className="category-title">{title}</p>
    </div>
  );
};

export default CategoryButton;
