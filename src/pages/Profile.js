//Profile.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
  const location = useLocation(); // To retrieve passed state
  const navigate = useNavigate();

  const { username, password } = location.state || {}; // Destructure username and password from state

  const handleBackClick = () => {
    navigate('/signin'); // Navigate back to Signin page
  };

  return (
    <div className="profile">
      <h2>My Profile</h2>
      {username && password ? (
        <div>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Password:</strong> {password}</p>
        </div>
      ) : (
        <p>No profile data available.</p>
      )}
      <button onClick={handleBackClick}>Back</button>
    </div>
  );
};

export default Profile;
