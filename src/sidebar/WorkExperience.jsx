import React from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Work Experience</h4>
      <div>
        {/* "Any Experience" radio button */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="workExperience" // Consistent name for grouping
            id="anyExperience"
            value="" // Value for "Any Experience"
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>

        {/* "Internship" radio button */}
        <InputField
          handleChange={handleChange}
          value="Internship"
          title="Internship"
          name="workExperience" // Same name for grouping
        />

        {/* "Work Remotely" radio button */}
        <InputField
          handleChange={handleChange}
          value="work remotely"
          title="Work Remotely"
          name="workExperience" // Same name for grouping
        />
      </div>
    </div>
  );
};

export default WorkExperience;
