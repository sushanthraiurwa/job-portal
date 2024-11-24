import React from 'react';
import InputField from '../components/InputField';

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        {/* All location radio button */}
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
          value="london"
          title="London"
          name="location"  // Ensure same name for grouping
        />
         <InputField
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="location"  // Ensure same name for grouping
        />
         <InputField
          handleChange={handleChange}
          value="madrid"
          title="Madrid"
          name="location"  // Ensure same name for grouping
        />
         <InputField
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="location"  // Ensure same name for grouping
        />
      </div>
    </div>
  );
};

export default Location;
