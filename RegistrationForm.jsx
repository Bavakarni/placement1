
import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    rollno: '',
    branch: '',
    year: '',
    gender: '',
    email: '',
    dob: '',
    city: '',
    address: '',
    state: '',
    country: '',
    mobile: '',
    altMobile: '',
    skills: '',
    cgpa: '',
    photo: null,
    resume: null,
    placementStatus: '',
    declaration: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setStudentData({ ...studentData, [name]: checked });
    } else if (type === 'file') {
      setStudentData({ ...studentData, [name]: files[0] });
    } else {
      setStudentData({ ...studentData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentData.declaration) {
      alert('Please confirm the declaration before submitting.');
      return;
    }

    const existingStudents = JSON.parse(localStorage.getItem('students')) || [];
    const isRollNoTaken = existingStudents.some((student) => student.rollno === studentData.rollno);
    if (isRollNoTaken) {
      alert('Roll number already exists. Please use a different roll number.');
      return;
    }

    const dataToStore = { ...studentData, photo: null, resume: null };
    existingStudents.push(dataToStore);
    localStorage.setItem('students', JSON.stringify(existingStudents));
    alert('Registration successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card">
        <h2>Student Registration</h2>
        <label>Name:</label>
        <input type="text" name="name" value={studentData.name} onChange={handleChange} required />
        
        <label>Roll Number:</label>
        <input type="text" name="rollno" value={studentData.rollno} onChange={handleChange} required />
        
        <label>Branch:</label>
        <input type="text" name="branch" value={studentData.branch} onChange={handleChange} required />
        
        <label>Year:</label>
        <input type="text" name="year" value={studentData.year} onChange={handleChange} required />
        
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" checked={studentData.gender === 'Male'} onChange={handleChange} required /> Male
        <input type="radio" name="gender" value="Female" checked={studentData.gender === 'Female'} onChange={handleChange} required /> Female
        
        <label><br></br>Email:</label>
        <input type="email" name="email" value={studentData.email} onChange={handleChange} required />
        
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={studentData.dob} onChange={handleChange} required />
        
        <label>City:</label>
        <input type="text" name="city" value={studentData.city} onChange={handleChange} required />
        
        <label>Address:</label>
        <input type="text" name="address" value={studentData.address} onChange={handleChange} required />
        
        <label>State:</label>
        <input type="text" name="state" value={studentData.state} onChange={handleChange} required />
        
        <label>Country:</label>
        <input type="text" name="country" value={studentData.country} onChange={handleChange} required />
        
        <label>Mobile Number:</label>
        <input type="number" name="mobile" value={studentData.mobile} onChange={handleChange} required />
        
        <label>Alternate Mobile Number:</label>
        <input type="number" name="altMobile" value={studentData.altMobile} onChange={handleChange} required />
        
        <label>Skills:</label>
        <input type="text" name="skills" value={studentData.skills} onChange={handleChange} required />
        
        <label>CGPA:</label>
        <input type="number" name="cgpa" value={studentData.cgpa} onChange={handleChange} required />
        
        <label>Placement Status:</label>
        <select name="placementStatus" value={studentData.placementStatus} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Placed">Placed</option>
          <option value="Not Placed">Not Placed</option>
        </select>
        
        <label>Upload Photo:</label>
        <input type="file" name="photo" onChange={handleChange} required />
        
        <label>Upload Resume:</label>
        <input type="file" name="resume" onChange={handleChange} required />
        
        <input type="checkbox" name="declaration" checked={studentData.declaration} onChange={handleChange} required />
        <label>I declare that the information provided is correct.</label>
        
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default RegistrationForm;