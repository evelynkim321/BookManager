// src/pages/Signin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Store the token in localStorage
        localStorage.setItem('token', data.token);

        // Update state to indicate user is logged in
        setIsLoggedIn(true);
        setError('');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong');
    }
  };

  const handleManageBooksClick = () => {
    navigate('/managebook');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    navigate('/signin');
  };

  return (
    <div className="signin">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>

      {isLoggedIn && (
        <div>
          <p>Hello, {username}!</p>
          <button onClick={handleProfileClick}>Profile</button> {/* Profile button */}
          <button onClick={handleSignOut}>Sign Out</button> {/* Signout button */}
          <p>Manage Your Books</p>
          <p>Here you can add, update, and delete books in the library.</p>
          <button onClick={handleManageBooksClick}>Manage Books</button> {/* Manage Books button */}
        </div>
      )}
    </div>
  );
};

export default Signin;
