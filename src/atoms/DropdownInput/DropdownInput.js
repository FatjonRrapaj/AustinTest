// DropdownInput.js
import React, { useState } from "react";
import "./DropdownInput.css";

const DropdownInput = ({
  label,
  options,
  selectedOption,
  onOptionChange,
  placeHolder,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionSelect = (option) => {
    onOptionChange(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="dropdown-input">
      <label>{label}</label>
      <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
        <div
          className="dropdown-selected"
          onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        >
          {selectedOption || placeHolder}
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownInput;
