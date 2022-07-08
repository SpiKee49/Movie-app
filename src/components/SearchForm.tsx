import React from 'react';
import { SearchIcon } from './Icons';

function SearchForm() {
  return (
    <form>
      <input type="text" className="search" />
      <button className="search-button">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchForm;
