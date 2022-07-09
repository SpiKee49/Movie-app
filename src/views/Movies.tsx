import React from 'react';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import { useAppSelector } from '../app/hooks';

function Movies() {
  const { movieList } = useAppSelector(
    store => store.movies
  );
  return (
    <div className="view">
      <h1>Find your movie</h1>
      <SearchForm />
      <MovieList items={movieList} />
    </div>
  );
}

export default Movies;
