import React from 'react';
import MovieListItem from './MovieListItem';
import { Movie } from '../app/types';

function MovieList({ items }: { items: Movie[] }) {
  return (
    <table className="movie-list">
      <tbody>
        {items.map(item => (
          <MovieListItem movie={item} key={item.imdbID} />
        ))}
      </tbody>
    </table>
  );
}

export default MovieList;
