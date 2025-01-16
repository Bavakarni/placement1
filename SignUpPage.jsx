
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }
    
    // Proceed to registration page after successful validation
    navigate('/registration', { state: { email, password } });
  };

  return (
    <div className="signup-container">
      <header className="header">
        <h1>Sign Up</h1>
      </header>

      <div className="signup-form">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button 
            type="submit" 
            style={{
              width: '100%', 
              padding: '12px', 
              backgroundColor: 'skyblue', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              fontSize: '16px', 
              cursor: 'pointer', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
            }}
          >
            Proceed to Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;