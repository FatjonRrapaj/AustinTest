// TextInput.js
import React, { useState } from "react";
import "./TextInput.css";

const TextInput = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    debounce(onSearch, 300)(event.target.value);
  };

  const debounce = (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  return (
    <div className="text-input">
      <div className="search-icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        className="input-field"
      />
    </div>
  );
};

export default TextInput;
