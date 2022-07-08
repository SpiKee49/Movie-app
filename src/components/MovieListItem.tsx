import React from 'react';
import { Movie } from '../app/types';

function MovieListItem({ movie }: { movie: Movie }) {
  return (
    <tr className="list-item">
      <td className="poster">
        <img
          src={movie.Poster}
          alt={movie.Title + ' poster'}
        />
      </td>
      <td className="description">
        {movie.Title}
        <sub>{movie.Year}</sub>
      </td>
    </tr>
  );
}

export default MovieListItem;
