import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/movieSlice';
import createSagaMiddleware from '@redux-saga/core';
import currentMoviesSlice from '../features/movies/currentMovieSlice';

export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    currentMovie: currentMoviesSlice,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
