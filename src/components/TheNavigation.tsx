import React from 'react';
import { NavLink } from 'react-router-dom';

function TheNavigation() {
  return (
    <nav>
      <NavLink to="/">Search Movie</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
    </nav>
  );
}

export default TheNavigation;
