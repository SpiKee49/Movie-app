import { createSlice } from '@reduxjs/toolkit';
import movieList from '../../app/movieList';

const initialState = {
  movieList: movieList,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
});

export default moviesSlice.reducer;
