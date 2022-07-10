import React from 'react';
import { Movie } from '../app/types';
import { useNavigate } from 'react-router-dom';
import { ImageNotFoundIcon } from './Icons';

function MovieListItem({ movie }: { movie: Movie }) {
  const navigate = useNavigate();

  return (
    <tr
      className="list-item"
      onClick={() => navigate(`/movies/${movie.imdbID}`)}
    >
      <td className="poster">
        <MoviePoster src={movie.Poster} alt={movie.Title} />
      </td>
      <td className="description">
        {movie.Title}
        <sub>{`Type: ${movie.Type} / Year: ${movie.Year} / Director: ${movie.Director} / Actors: ${movie.Actors} / Runtime: ${movie.Runtime}`}</sub>
      </td>
    </tr>
  );
}

export default MovieListItem;

function MoviePoster({
  src,
  alt,
}: {
  src: string;
  alt?: string;
}) {
  if (src.toLocaleLowerCase().includes('n/a'))
    return <ImageNotFoundIcon />;

  return <img src={src} alt={alt} />;
}
