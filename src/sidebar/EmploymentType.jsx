import React from 'react';

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employment</h4>
      <div>
        {/* "Any Experience" radio button */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="employmentType" // Consistent name for grouping
            value="" // Value for "Any Experience"
            onChange={handleChange}
          />
          <span className="checkmark"></span>Any Experience
        </label>

        {/* "Temporary" radio button */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="employmentType" // Same name for grouping
            value="temporary"
            onChange={handleChange}
          />
          <span className="checkmark"></span>Temporary
        </label>

        {/* "Part-time" radio button */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="employmentType" // Same name for grouping
            value="part-time"
            onChange={handleChange}
          />
          <span className="checkmark"></span>Part-time
        </label>

        {/* "Full-time" radio button */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="employmentType" // Same name for grouping
            value="full-time"
            onChange={handleChange}
          />
          <span className="checkmark"></span>Full-time
        </label>
      </div>
    </div>
  );
};

export default EmploymentType;
