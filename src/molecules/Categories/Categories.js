import React from "react";

import CategoryButton from "../../atoms/CategoryButton/CategoryButton";
import categoriesData from "../../mock/categories.json";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories">
      {categoriesData.map((category, index) => (
        <CategoryButton
          key={index}
          title={category.title}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default Categories;
