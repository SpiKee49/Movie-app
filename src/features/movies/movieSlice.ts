import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import movieList from '../../app/movieList';
import { Movie } from '../../app/types';

interface MovieListState {
  movieList: Movie[];
  favorites: string[] | [];
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
      action: PayloadAction<string>
    ) => {
      //TODO: saving to local storage
      if ([...state.favorites].includes(action.payload)) {
        state.favorites = state.favorites.filter(
          item => item !== action.payload
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
