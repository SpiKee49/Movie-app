import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../features/movies/movieSlice';
import createSagaMiddleware from '@redux-saga/core';

export const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
