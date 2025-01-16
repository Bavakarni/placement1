
import React from 'react';

const PlacedStudents = () => {
  return (
    <div className="placed-students">
      <h2>Placed Students</h2>
      <div className="students-container">
        <div className="student-card">
          <img src="https://ik.imagekit.io/32rq1e0lfg/pstu.jpg?updatedAt=1737038419188" alt="Student" className="student-photo" />
          <p>John Doe</p>
          <p>Company: Google</p>
          <p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        </div>
        <div className="student-card">
          <img src="https://ik.imagekit.io/32rq1e0lfg/pstu1.jpg?updatedAt=1737038475516" alt="Student" className="student-photo" />
          <p>Jane Smith</p>
          <p>Company: Microsoft</p>
          <p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        </div>
        <div className="student-card">
          <img src="https://ik.imagekit.io/32rq1e0lfg/pstu2.jpg?updatedAt=1737038515553" alt="Student" className="student-photo" />
          <p>Jane Smith</p>
          <p>Company: Microsoft</p>
          <p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        </div>
        <div className="student-card">
          <img src="https://ik.imagekit.io/32rq1e0lfg/pstu4.jpg?updatedAt=1737038551834" alt="Student" className="student-photo" />
          <p>Jane Smith</p>
          <p>Company: Microsoft</p>
          <p>
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Resume</a>
          </p>
        </div>
        {/* Add more student cards as needed */}
      </div>
    </div>
  );
};

export default PlacedStudents;