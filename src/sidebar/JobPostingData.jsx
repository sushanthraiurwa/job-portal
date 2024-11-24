import React from "react";
import InputField from "../components/InputField";

const JobPostingData = ({ handleChange }) => {
  const now = new Date();

  // Calculate dates
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        {/* All time radio button */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="dateFilter" // Consistent name for grouping
            value="all" // Meaningful value
            id="allTime"
            onChange={handleChange}
          />
          <span className="checkmark"></span>All Time
        </label>

        {/* Other date filter options */}
        <InputField
          handleChange={handleChange}
          value={twentyFourHoursAgo}
          title="Last 24 Hours"
          name="dateFilter" // Same name for grouping
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgo}
          title="Last 7 Days"
          name="dateFilter" // Same name for grouping
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgo}
          title="Last Month"
          name="dateFilter" // Same name for grouping
        />
      </div>
    </div>
  );
};

export default JobPostingData;
