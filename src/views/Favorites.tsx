import React from 'react';
import MovieList from '../components/MovieList';
import { useAppSelector } from '../app/hooks';

function Favorites() {
  const { favorites } = useAppSelector(
    store => store.movies
  );
  return (
    <section className="view">
      <h1>Your favorite movies</h1>
      <MovieList items={favorites} />
    </section>
  );
}

export default Favorites;
