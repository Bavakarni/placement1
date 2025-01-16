import React from 'react';

const FilterStudents = () => {
  return (
    <div className="card">
      <h2>Filter Students</h2>
      <select>
        <option value="cgpa">Filter by CGPA</option>
        <option value="skills">Filter by Skills</option>
      </select>
      <input type="text" placeholder="Search..." />
      <button>Apply Filter</button>
    </div>
  );
};

export default FilterStudents;