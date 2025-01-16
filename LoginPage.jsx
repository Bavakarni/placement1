
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Ensure to import the CSS file

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('student'); // Default user type
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Redirect based on user type
    if (userType === 'admin') {
      navigate('/admin-dashboard'); // Redirect to Admin Dashboard
    } else {
      navigate('/student-dashboard'); // Redirect to Student Dashboard
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="card">
        <h2>Login</h2>
        <div className="input-group">
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="student">Student</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username or Email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Login</button>
      </div>
    </form>
  );
};

export default LoginPage;