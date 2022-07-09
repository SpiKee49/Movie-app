import React from 'react';
import { SearchIcon } from './Icons';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import { getMoviesFetch } from '../features/movies/movieSlice';
import { handleSearch } from '../features/movies/movieSlice';

function SearchForm() {
  const dispatch = useAppDispatch();
  const { searchExp } = useAppSelector(
    store => store.movies
  );
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        dispatch(getMoviesFetch());
      }}
    >
      <input
        type="text"
        className="search"
        value={searchExp}
        onChange={e =>
          dispatch(handleSearch(e.target.value))
        }
      />
      <button className="search-button">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchForm;
