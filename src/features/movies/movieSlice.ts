import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { Movie } from '../../app/types';

interface MovieListState {
  movieList: Movie[] | [];
  favorites: Movie[] | [];
  searchExp: string;
  totalFound: string;
  currentPage: number;
  isLoading: boolean;
  noData: boolean;
}

const initialState: MovieListState = {
  movieList: [],
  favorites: JSON.parse(
    localStorage.getItem('favoriteItems') ?? ''
  ),
  searchExp: '',
  totalFound: '',
  currentPage: 1,
  isLoading: false,
  noData: true,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    resetPageNumber: (state: MovieListState) => {
      state.currentPage = 1;
    },
    increasePageNumber: (state: MovieListState) => {
      if (+state.totalFound / 10 === state.currentPage) {
        return;
      }
      state.currentPage = state.currentPage + 1;
    },
    decreasePageNumber: (state: MovieListState) => {
      if (1 === state.currentPage) return;

      state.currentPage -= 1;
    },

    /* getting input value from form */

    handleSearch: (
      state: MovieListState,
      action: PayloadAction<string>
    ) => {
      if (action.payload === '') {
        state.movieList = [];
        state.searchExp = action.payload;
        state.currentPage = 1;
        state.totalFound = '';
        return;
      }
      state.searchExp = action.payload;
    },

    /* adding and removing favorites */

    handleFavorites: (
      state: MovieListState,
      action: PayloadAction<Movie>
    ) => {
      if (
        [...state.favorites]
          .map(item => item.imdbID)
          .includes(action.payload.imdbID)
      ) {
        state.favorites = state.favorites.filter(
          item => item.imdbID !== action.payload.imdbID
        );
      } else {
        state.favorites = [
          ...state.favorites,
          action.payload,
        ];
      }

      /* Saving to storage */

      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favorites)
      );
    },

    /* fetching Movies*/

    getMoviesFetch: (state: MovieListState) => {
      state.isLoading = true;
    },

    /* fetching positive response*/

    getMoviesSuccess: (
      state: MovieListState,
      action: PayloadAction<{
        movies: Movie[];
        total: string;
      }>
    ) => {
      state.isLoading = false;
      state.noData = false;
      state.movieList = action.payload.movies;
      state.totalFound = action.payload.total;
    },

    /* fetching negative response*/

    getMoviesFailure: (state: MovieListState) => {
      state.isLoading = false;
      state.noData = true;
      state.movieList = [];
    },
  },
});

export const {
  handleSearch,
  handleFavorites,
  getMoviesFetch,
  getMoviesSuccess,
  getMoviesFailure,
  increasePageNumber,
  decreasePageNumber,
  resetPageNumber,
} = moviesSlice.actions;

export default moviesSlice.reducer;
