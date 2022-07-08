import { createSlice } from '@reduxjs/toolkit';
import movieList from '../../app/movieList';
import { Movie } from '../../app/types';

interface MovieListState {
  movieList: Movie[];
}

const initialState: MovieListState = {
  movieList: [...movieList],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
