// NavBar.js

import { Link } from 'react-router-dom';

const NavBar = () => {
  const handleLogout = () => {
    // Clear user from global state, if you have it
    // Redirect to homepage
    localStorage.removeItem('token');
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/search">Search</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/submitreview">Submit Review</Link>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default NavBar;
