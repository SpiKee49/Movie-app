import {
  call,
  put,
  takeEvery,
  all,
} from 'redux-saga/effects';
import { store } from './store';
import {
  getMoviesSuccess,
  getMoviesFailure,
} from '../features/movies/movieSlice';

import {
  getCurrentMovieSuccess,
  getCurrentMovieFailure,
} from '../features/movies/currentMovieSlice';

const apiKey = '57646235';

function* workGetMoviesFetch(): any {
  const { searchExp, currentPage } =
    store.getState().movies;
  try {
    const movies = yield call(() =>
      fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchExp}&page=${currentPage}`
      )
    );
    const formattedMovies = yield movies.json();
    yield put(
      getMoviesSuccess({
        movies: formattedMovies.Search,
        total: formattedMovies.totalResults,
      })
    );
  } catch (error) {
    yield put(getMoviesFailure());
  }
}

function* workGetCurrentMovieFetch(): any {
  const { movieId } = store.getState().currentMovie;
  try {
    const movies = yield call(() =>
      fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`
      )
    );
    const formattedMovie = yield movies.json();
    yield put(getCurrentMovieSuccess(formattedMovie));
  } catch (error) {
    yield put(getCurrentMovieFailure());
  }
}

export function* movieSaga() {
  yield all([
    takeEvery('movies/getMoviesFetch', workGetMoviesFetch),
    takeEvery(
      'currentMovie/getCurrentMovieFetch',
      workGetCurrentMovieFetch
    ),
  ]);

  yield takeEvery(
    'movies/getMoviesFetch',
    workGetMoviesFetch
  );
}

export default movieSaga;
