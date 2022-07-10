import React from 'react';
import MovieListItem from './MovieListItem';
import { Movie } from '../app/types';
import { useAppSelector } from '../app/hooks';
import PlaceholderLoader from './PlaceholderLoader';

function MovieList({ items }: { items: Movie[] }) {
  const { isLoading, favorites } = useAppSelector(
    store => store.movies
  );
  const moreInfo = items === favorites;
  const loader = getPlaceHolders();

  return (
    <>
      <table className="movie-list">
        <tbody>
          {isLoading && loader}
          {!isLoading &&
            items.map(item => (
              <MovieListItem
                movie={item}
                addInfo={moreInfo}
                key={item.imdbID}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;

function getPlaceHolders() {
  let items = [];
  for (let i = 0; i < 10; i++) {
    items.push(
      <tr>
        <td>
          <PlaceholderLoader />
        </td>
      </tr>
    );
  }
  return items;
}
