import React from 'react';
import { useAppSelector } from '../app/hooks';
import MovieListItem from './MovieListItem';

function MovieList() {
  const { movieList } = useAppSelector(
    store => store.movies
  );

  return (
    <table className="movie-list">
      <tbody>
        {movieList.map(item => (
          <MovieListItem movie={item} key={item.imdbID} />
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
