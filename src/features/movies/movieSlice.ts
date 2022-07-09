import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import movieList from '../../app/movieList';
import { Movie } from '../../app/types';

interface MovieListState {
  movieList: Movie[];
  favorites: Movie[] | [];
}

const initialState: MovieListState = {
  movieList: [...movieList],
  favorites: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
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
      console.log(state.favorites);
    },
  },
});

export const { handleFavorites } = moviesSlice.actions;

export default moviesSlice.reducer;
