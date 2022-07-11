import React from 'react';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import { useAppSelector } from '../app/hooks';
import Pagination from '../components/Pagination';

function Movies() {
  const { movieList, isLoading, noData, totalFound } =
    useAppSelector(store => store.movies);

  const renderTable = !noData || isLoading;

  return (
    <section className="view">
      <h1>Find your movie</h1>
      <SearchForm />
      {!renderTable && <NoDataFound />}
      {renderTable && <MovieList items={movieList} />}
      {+totalFound > 10 && <Pagination />}
    </section>
  );
}

export default Movies;

function NoDataFound() {
  return (
    <div className="no-data">
      <img
        src={require('../assets/img/no-data.png')}
        alt="no data found"
      />
    </div>
  );
}
