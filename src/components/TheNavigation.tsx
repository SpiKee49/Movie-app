import React from 'react';
import { NavLink } from 'react-router-dom';

function TheNavigation() {
  return (
    <nav>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/my-favorites">My favorites</NavLink>
    </nav>
  );
}

export default TheNavigation;
