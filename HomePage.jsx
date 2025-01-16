
import React from 'react';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Placement Connect</h1>
        <p>To become a center of excellence in the field of engineering upholding social values</p>
      </header>

      {/* Placed Students Section */}
      <section className="placed-students">
        <h2>Students Placed on Top Companies</h2>
        <div className="students-container">
          <div className="student-card">
            <img
              src="https://ik.imagekit.io/kuikbdxgvd/student1.jpeg?updatedAt=1736760805941"
              alt="Student 1"
              className="student-photo"
            />
            <div className="student-details">
              <p><strong>Name:</strong>Priya</p>
              <p><strong>Batch:</strong> 2020-2024</p>
              <p><strong>Company:</strong> Google</p>
              <p><strong>Yearly Package:</strong>19 LPA</p>
            </div>
          </div>
          <div className="student-card">
            <img
              src="https://ik.imagekit.io/kuikbdxgvd/student2.jpeg?updatedAt=1736760846832"
              alt="Student 2"
              className="student-photo"
            />
            <div className="student-details">
              <p><strong>Name:</strong>Jeya</p>
              <p><strong>Batch:</strong>2019-2023</p>
              <p><strong>Company:</strong> Microsoft</p>
              <p><strong>Yearly Package:</strong>23 LPA</p>
            </div>
          </div>
          <div className="student-card">
            <img
              src="https://ik.imagekit.io/kuikbdxgvd/student3.jpeg?updatedAt=1736760887049"
              alt="Student 3"
              className="student-photo"
            />
            <div className="student-details">
              <p><strong>Name:</strong>Kowsalya</p>
              <p><strong>Batch:</strong>2020-2024</p>
              <p><strong>Company:</strong> Amazon</p>
              <p><strong>Yearly Package:</strong>35 LPA</p>
            </div>
          </div>
          <div className="student-card">
            <img
              src="https://ik.imagekit.io/kuikbdxgvd/student5.jpg?updatedAt=1736761062859"
              alt="Student 4"
              className="student-photo"
            />
            <div className="student-details">
              <p><strong>Name:</strong>Emily</p>
              <p><strong>Batch:</strong>2020-2024</p>
              <p><strong>Company:</strong> Facebook</p>
              <p><strong>Yearly Package:</strong>47 LPA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;