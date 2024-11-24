import React from "react";
import Button from "./Button";
import InputField from "../components/InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={() => handleClick("")} title="Hourly" />
        <Button onClickHandler={() => handleClick("Monthly")} title="Monthly" />
        <Button onClickHandler={() => handleClick("Yearly")} title="Yearly" />
      </div>
      <div>
      <label className="sidebar-label-container">
          <input
            type="radio"
            name="location"  // Ensure all radio buttons have the same name
            value="all"  // Value for "All" location
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>

        {/* Other location options */}
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"  // Ensure same name for grouping
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"  // Ensure same name for grouping
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"  // Ensure same name for grouping
        />
      </div>
    </div>
  );
};

export default Salary;
