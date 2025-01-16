
import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Define state for search filter and students list
  const [searchSkill, setSearchSkill] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', skills: ['JavaScript', 'React'], cgpa: 9.5, placed: true },
    { id: 2, name: 'Bob', skills: ['Python', 'Django'], cgpa: 8.7, placed: false },
    { id: 3, name: 'Charlie', skills: ['Java', 'Spring'], cgpa: 7.8, placed: true },
    { id: 4, name: 'Diana', skills: ['HTML', 'CSS', 'JavaScript'], cgpa: 9.2, placed: false },
  ]);

  // Filter students based on the searched skill
  const filteredStudents = searchSkill
    ? students.filter((student) =>
        student.skills.some((skill) =>
          skill.toLowerCase().includes(searchSkill.toLowerCase())
        )
      )
    : students;

  // Sort the filtered students by CGPA in descending order
  const sortedStudents = filteredStudents.sort((a, b) => b.cgpa - a.cgpa);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="filter-section">
        <input
          type="text"
          placeholder="Filter by skill (e.g., React)"
          value={searchSkill}
          onChange={(e) => setSearchSkill(e.target.value)}
          className="filter-input"
        />
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Skills</th>
            <th>CGPA</th>
            <th>Placement Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.skills.join(', ')}</td>
              <td>{student.cgpa}</td>
              <td>{student.placed ? 'Placed' : 'Not Placed'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {sortedStudents.length === 0 && (
        <p className="no-results">No students found with the selected skill.</p>
      )}
    </div>
  );
};

export default AdminDashboard;