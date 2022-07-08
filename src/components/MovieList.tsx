import React from 'react';
import { useAppSelector } from '../app/hooks';
import MovieListItem from './MovieListItem';

function MovieList() {
  const { movieList } = useAppSelector(
    store => store.movies
  );

  return (
    <table className="movie-list">
      {movieList.map(item => (
        <MovieListItem movie={item} />
      ))}
    </table>
  );
}

export default MovieList;
