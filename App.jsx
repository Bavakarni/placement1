
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RegistrationForm from './components/RegistrationForm';
import QueriesPage from './pages/QueriesPage';
import PlacedStudents from './components/PlacedStudents';  // Added import for PlacedStudents

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/queries" element={<QueriesPage />} />
        <Route path="/placed-students" element={<PlacedStudents />} /> {/* Added route for PlacedStudents */}
      </Routes>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);