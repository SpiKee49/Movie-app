import React from 'react';
import { Link } from 'react-router-dom';

function TheNavigation() {
  return (
    <nav>
      <ul>
        <CustomLink to="/" value="Search Movie" />
        <CustomLink to="/favorites" value="Favorites" />
      </ul>
    </nav>
  );
}

export default TheNavigation;

function CustomLink({
  to,
  value,
}: {
  to: string;
  value: string;
}) {
  return (
    <li>
      <Link to={to}>{value}</Link>
    </li>
  );
}
