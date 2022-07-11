import React from 'react';
import MovieListItem from './MovieListItem';
import { Movie } from '../app/types';
import { useAppSelector } from '../app/hooks';
import PlaceholderLoader from './PlaceholderLoader';

function MovieList({ items }: { items: Movie[] }) {
  const { isLoading } = useAppSelector(
    store => store.movies
  );

  /* placeholders used when data not fetched yet*/
  const placeholders = getPlaceHolders();

  return (
    <table className="movie-list">
      <tbody>
        {isLoading && placeholders}
        {!isLoading &&
          items.map(item => (
            <MovieListItem movie={item} key={item.imdbID} />
          ))}
      </tbody>
    </table>
  );
}

export default MovieList;

/* function to make 10 rows with placeholders */
function getPlaceHolders() {
  let items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <tr key={i}>
        <td>
          <PlaceholderLoader center={false} />
        </td>
      </tr>
    );
  }
  return items;
}
