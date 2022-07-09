import React from 'react';
import {
  useAppSelector,
  useAppDispatch,
} from '../app/hooks';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';
import {
  increasePageNumber,
  decreasePageNumber,
  getMoviesFetch,
} from '../features/movies/movieSlice';

function Pagination() {
  const dispatch = useAppDispatch();
  const { currentPage, totalFound } = useAppSelector(
    store => store.movies
  );
  const totalPages = Math.ceil(+totalFound / 10);
  return (
    <section className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => {
          dispatch(decreasePageNumber());
          dispatch(getMoviesFetch());
        }}
      >
        <ChevronLeftIcon />
      </button>
      <p>{currentPage}</p>
      <button
        disabled={currentPage === totalPages}
        onClick={() => {
          dispatch(increasePageNumber());
          dispatch(getMoviesFetch());
        }}
      >
        <ChevronRightIcon />
      </button>
    </section>
  );
}

export default Pagination;
