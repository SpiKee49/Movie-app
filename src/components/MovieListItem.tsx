import React from 'react';
import { Movie } from '../app/types';
import { useNavigate } from 'react-router-dom';
import { FavoriteIcon, ImageNotFoundIcon } from './Icons';
import { useAppSelector } from '../app/hooks';

function MovieListItem({ movie }: { movie: Movie }) {
  const navigate = useNavigate();

  const { favorites } = useAppSelector(
    store => store.movies
  );

  const isFavorite = [...favorites]
    .map(item => item.imdbID)
    .includes(movie.imdbID);

  const rating = isNaN(+movie.imdbRating)
    ? ''
    : +movie.imdbRating * 10 + '%';

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
        <div className="info">
          {`Type: ${movie.Type} / Year: ${movie.Year} / Genre: ${movie.Genre}`}
        </div>
      </td>
      <td className="rating">
        <p>
          <span>{rating}</span>
        </p>
      </td>
      <td className="favorite">
        {isFavorite && <FavoriteIcon value={true} />}
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
