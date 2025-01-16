
import React, { useEffect, useState } from 'react';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [resume, setResume] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('studentData'));
    if (storedData) {
      setStudentData(storedData);
      setEditedData(storedData);
    }
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setStudentData(editedData);
    localStorage.setItem('studentData', JSON.stringify(editedData));
    setIsEditing(false);
  };

  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };

  return (
    <div className="student-dashboard">
      <h2 className="dashboard-heading">Student Dashboard</h2>
      {studentData ? (
        <div className="details-container">
          <div className="photo-container">
            {studentData.photo ? (
              <img src={URL.createObjectURL(studentData.photo)} alt="Student" className="student-photo" />
            ) : (
              <div className="placeholder-photo">No Photo</div>
            )}
          </div>
          <div className="info-grid">
            {isEditing ? (
              <>
                <div className="info-item">
                  <span className="label">Name:</span>
                  <input
                    type="text"
                    name="name"
                    value={editedData.name || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="info-item">
                  <span className="label">Roll Number:</span>
                  <input
                    type="text"
                    name="rollno"
                    value={editedData.rollno || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="info-item">
                  <span className="label">Branch:</span>
                  <input
                    type="text"
                    name="branch"
                    value={editedData.branch || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="info-item">
                  <span className="label">Year:</span>
                  <input
                    type="text"
                    name="year"
                    value={editedData.year || ''}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="info-item">
                  <span className="label">Placement Status:</span>
                  <input
                    type="text"
                    name="placementStatus"
                    value={editedData.placementStatus || ''}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="info-item">
                  <span className="label">Name:</span> {studentData.name}
                </div>
                <div className="info-item">
                  <span className="label">Roll Number:</span> {studentData.rollno}
                </div>
                <div className="info-item">
                  <span className="label">Branch:</span> {studentData.branch}
                </div>
                <div className="info-item">
                  <span className="label">Year:</span> {studentData.year}
                </div>
                <div className="info-item">
                  <span className="label">Placement Status:</span> {studentData.placementStatus || 'Not Placed'}
                </div>
              </>
            )}
          </div>
          <div className="resume-section">
            <label className="label">Upload Resume:</label>
            <input type="file" onChange={handleResumeUpload} />
            {resume && <p className="resume-name">{resume.name}</p>}
          </div>
          <div className="buttons-container">
            {isEditing ? (
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            ) : (
              <button className="edit-button" onClick={handleEditToggle}>
                Edit
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>No student data available.</p>
      )}
      <div className="footer">
        <p>© 2025 Placement Connect</p>
      </div>
    </div>
  );
};

export default StudentDashboard;