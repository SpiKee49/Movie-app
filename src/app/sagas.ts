import { call, put, takeEvery } from 'redux-saga/effects';
import { store } from './store';
import {
  getMoviesSuccess,
  getMoviesFailure,
} from '../features/movies/movieSlice';

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
        movies: formattedMovies,
        total: formattedMovies.totalResults,
      })
    );
  } catch (error) {
    yield put(getMoviesFailure());
  }
}

function* movieSaga() {
  yield takeEvery(
    'movies/getMoviesFetch',
    workGetMoviesFetch
  );
}

export default movieSaga;
