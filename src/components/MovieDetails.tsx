import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailsTable from './MovieDetailsTable';
import { FavoriteIcon } from './Icons';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import { handleFavorites } from '../features/movies/movieSlice';
import {
  getCurrentMovieFetch,
  setMovieId,
} from '../features/movies/currentMovieSlice';
import PlaceholderLoader from './PlaceholderLoader';

function MovieDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(setMovieId(id));
    dispatch(getCurrentMovieFetch());
  }, [dispatch, id]);
  const { favorites } = useAppSelector(
    store => store.movies
  );
  const { movie, isLoading } = useAppSelector(
    store => store.currentMovie
  );

  if (id == null || movie == null)
    return (
      <section>
        Id does not match any of searched movies
      </section>
    );

  if (isLoading) return <PlaceholderLoader center={true} />;

  const isFavorite = [...favorites]
    .map(item => item.imdbID)
    .includes(movie.imdbID);

  return (
    <section>
      <header>
        <h1>{movie.Title}</h1>
        <button
          onClick={() => dispatch(handleFavorites(movie))}
        >
          <FavoriteIcon value={isFavorite} />
        </button>
      </header>
      <img
        src={movie.Poster}
        alt={movie.Title + ' poster'}
      />
      <MovieDetailsTable movie={movie} />
    </section>
  );
}

export default MovieDetails;
