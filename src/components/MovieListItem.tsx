import React from 'react';
import { Movie } from '../app/types';
import { useNavigate } from 'react-router-dom';

function MovieListItem({ movie }: { movie: Movie }) {
  const navigate = useNavigate();

  return (
    <tr
      className="list-item"
      onClick={() => navigate('/favorites')}
    >
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
