// HomePage.js

import React from 'react';

const Homepage = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    // Clear the isLoggedIn state to indicate logout
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Welcome to the Homepage!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Homepage;
