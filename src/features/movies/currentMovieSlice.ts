import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Movie } from '../../app/types';

interface CurrentMovieState {
  movie: Movie | undefined;
  movieId: string | undefined;
  isLoading: boolean;
}

const initialState: CurrentMovieState = {
  movie: undefined,
  movieId: undefined,
  isLoading: false,
};

const currentMoviesSlice = createSlice({
  name: 'currentMovie',
  initialState,
  reducers: {
    /* self-explanatory */
    setMovieId: (
      state: CurrentMovieState,
      action: PayloadAction<string | undefined>
    ) => {
      state.movieId = action.payload;
    },
    getCurrentMovieFetch: (state: CurrentMovieState) => {
      state.isLoading = true;
    },
    getCurrentMovieSuccess: (
      state: CurrentMovieState,
      action: PayloadAction<Movie>
    ) => {
      state.isLoading = false;
      state.movie = action.payload;
    },
    getCurrentMovieFailure: (state: CurrentMovieState) => {
      state.isLoading = false;
    },
  },
});

export const {
  getCurrentMovieFetch,
  getCurrentMovieFailure,
  getCurrentMovieSuccess,
  setMovieId,
} = currentMoviesSlice.actions;

export default currentMoviesSlice.reducer;
