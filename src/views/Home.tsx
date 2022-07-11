import React from 'react';
import SearchForm from '../components/SearchForm';
import MovieList from '../components/MovieList';
import { useAppSelector } from '../app/hooks';
import Pagination from '../components/Pagination';
import NoDataFound from '../components/NoDataFound';

function Home() {
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

export default Home;
