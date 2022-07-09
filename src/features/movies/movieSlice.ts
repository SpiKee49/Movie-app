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
}

const initialState: MovieListState = {
  movieList: [],
  favorites: [],
  searchExp: '',
  totalFound: '',
  currentPage: 1,
  isLoading: false,
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
        console.log('limitExceded');
        return;
      }

      state.currentPage = state.currentPage + 1;
      console.log(state.currentPage);
    },
    decreasePageNumber: (state: MovieListState) => {
      if (1 === state.currentPage) return;

      state.currentPage -= 1;
    },
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
        return;
      }

      state.favorites = [
        ...state.favorites,
        action.payload,
      ];
    },
    getMoviesFetch: (state: MovieListState) => {
      state.isLoading = true;
    },
    getMoviesSuccess: (
      state: MovieListState,
      action: PayloadAction<{
        movies: Movie[];
        total: string;
      }>
    ) => {
      state.isLoading = false;
      state.movieList = action.payload.movies;
      state.totalFound = action.payload.total;
    },
    getMoviesFailure: (state: MovieListState) => {
      state.isLoading = false;
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
