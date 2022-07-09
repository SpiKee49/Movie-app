import React from 'react';
import MovieListItem from './MovieListItem';
import { Movie } from '../app/types';
import Pagination from './Pagination';
import { useAppSelector } from '../app/hooks';

function MovieList({ items }: { items: Movie[] }) {
  const { totalFound } = useAppSelector(
    store => store.movies
  );
  return (
    <>
      <table className="movie-list">
        <tbody>
          {items.map(item => (
            <MovieListItem movie={item} key={item.imdbID} />
          ))}
        </tbody>
      </table>
      {+totalFound > 10 && <Pagination />}
    </>
  );
}

export default MovieList;
