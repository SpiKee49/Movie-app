import React from 'react';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';

function Movies() {
  return (
    <div className="view">
      <h1>Find your movie</h1>
      <SearchForm />
      <MovieList />
    </div>
  );
}

export default Movies;
