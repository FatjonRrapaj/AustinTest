import React from "react";
import "./Button.css";

const Button = ({ title, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      {title}
    </div>
  );
};

export default Button;
