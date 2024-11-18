// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

// Import page components
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ManageBook from './pages/ManageBook';
import logo from './pages/logo.png';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <div>
        {/* Top menu bar with logo and website name */}
        <nav className="navbar">
          <div className="logo-container">
            <img src={logo} alt="EvelynBooks Logo" className="logo" />
            <h2 className="website-name">EvelynBooks</h2>
          </div>
          <div className="links">
            <Link to="/" className="link">Home</Link>
            <Link to="/signin" className="link">Sign In</Link>
            <Link to="/signup" className="link">Sign Up</Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/managebook" element={<ManageBook />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
