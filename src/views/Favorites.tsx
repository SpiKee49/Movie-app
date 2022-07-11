import React from 'react';
import MovieList from '../components/MovieList';
import { useAppSelector } from '../app/hooks';
import NoDataFound from '../components/NoDataFound';

function Favorites() {
  const { favorites } = useAppSelector(
    store => store.movies
  );

  return (
    <section className="view">
      <h1>Your favorite movies</h1>
      {favorites.length ? '' : <NoDataFound />}
      <MovieList items={favorites} />
    </section>
  );
}

export default Favorites;
