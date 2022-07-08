import React from 'react';
import { Link } from 'react-router-dom';

function TheNavigation() {
  return (
    <nav>
      <Link to="/">Movies</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
}

export default TheNavigation;
