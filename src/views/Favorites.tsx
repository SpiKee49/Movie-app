import React, { useEffect } from 'react';
import MovieList from '../components/MovieList';
import {
  useAppSelector,
  useAppDispatch,
} from '../app/hooks';
import NoDataFound from '../components/NoDataFound';
import { getFavorites } from '../features/movies/movieSlice';

function Favorites() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

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
