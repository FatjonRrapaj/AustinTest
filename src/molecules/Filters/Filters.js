// FiltersCategory.js
import React, { useState } from "react";

import DropdownInput from "../../atoms/DropdownInput/DropdownInput";
import Button from "../../atoms/Button/Button";
import dropdownOptions from "../../mock/dropdown.json";
import "./Filters.css";

const FiltersCategory = ({ onApplyFilters }) => {
  const [projectStatus, setProjectStatus] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");

  const handleApplyFilters = () => {
    // Implement the logic to apply the filters
    const filters = {
      projectStatus,
      investmentType,
      industry,
      country,
    };
    onApplyFilters(filters);
  };

  return (
    <div className="filters">
      <DropdownInput
        placeHolder="Select project status"
        label="Project Status:"
        options={dropdownOptions.projectStatusOptions}
        selectedOption={projectStatus}
        onOptionChange={setProjectStatus}
      />
      <DropdownInput
        placeHolder="Select investment type"
        label="Investment Type:"
        options={dropdownOptions.investmentTypeOptions}
        selectedOption={investmentType}
        onOptionChange={setInvestmentType}
      />
      <DropdownInput
        placeHolder="Select industry"
        label="Industry:"
        options={dropdownOptions.industryOptions}
        selectedOption={industry}
        onOptionChange={setIndustry}
      />
      <DropdownInput
        placeHolder="Select country of cooperation"
        label="Country of Cooperation:"
        options={dropdownOptions.countryOptions}
        selectedOption={country}
        onOptionChange={setCountry}
      />
      <Button title="View" onClick={handleApplyFilters} />
    </div>
  );
};

export default FiltersCategory;
