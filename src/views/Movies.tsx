import React from 'react';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import { useAppSelector } from '../app/hooks';
import Pagination from '../components/Pagination';

function Movies() {
  const { movieList, isLoading, totalFound } =
    useAppSelector(store => store.movies);

  const renderTable =
    movieList != null || isLoading !== false;

  return (
    <section className="view">
      <h1>Find your movie</h1>
      <SearchForm />
      {renderTable && <MovieList items={movieList} />}
      {+totalFound > 10 && <Pagination />}
    </section>
  );
}

export default Movies;
