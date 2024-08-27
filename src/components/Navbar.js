import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Turf Tango</h2>
      </div>
      <div className="navbar-right">
        <a href="#login">Login</a>
        <a href="#register">Register</a>
      </div>
    </nav>
  );
};

export default Navbar;
