import React from 'react';
import { useParams } from 'react-router-dom';
import MovieDetailsTable from './MovieDetailsTable';
import { FavoriteIcon } from './Icons';
import {
  useAppSelector,
  useAppDispatch,
} from '../app/hooks';
import { handleFavorites } from '../features/movies/movieSlice';

function MovieDetails() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { movieList, favorites } = useAppSelector(
    store => store.movies
  );

  const currentMovie = movieList.find(
    item => item.imdbID === id
  );

  if (id == null || currentMovie == null)
    return (
      <section>
        Id does not match any of searched movies
      </section>
    );

  const isFavorite = [...favorites].includes(id);

  return (
    <section>
      <header>
        <h1>{currentMovie.Title}</h1>
        <button
          onClick={() =>
            dispatch(handleFavorites(currentMovie.imdbID))
          }
        >
          <FavoriteIcon value={isFavorite} />
        </button>
      </header>
      <img
        src={currentMovie.Poster}
        alt={currentMovie.Title + ' poster'}
      />
      <MovieDetailsTable movie={currentMovie} />
    </section>
  );
}

export default MovieDetails;
