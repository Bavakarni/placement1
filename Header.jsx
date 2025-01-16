
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <center className="one">
        <img 
          src="https://ik.imagekit.io/kuikbdxgvd/vcet.jpg?updatedAt=1736758025698" 
          alt="College Logo" 
          className="logo" 
        />
        <h1>Velammal College Of Engineering And Technology</h1>
      </center>

      <nav className="navbar">
        <ul>
          <li>
           <Link to="/" className="nav-button">Home</Link>
          </li>
          <li>
            <Link to="/login" className="nav-button">Login</Link>
          </li>
          <li>
            <Link to="/signup" className="nav-button">Sign Up</Link>
          </li>
          <li>
            <Link to="/queries" className="nav-button queries-button">Queries</Link>
          </li>
          <li>
            <Link to="/placed-students" className="nav-button placed-students-button">Placed Students</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;