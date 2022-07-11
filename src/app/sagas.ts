import {
  call,
  put,
  takeEvery,
  all,
} from 'redux-saga/effects';
import { store } from './store';
import { Movie } from './types';
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
    const search = yield call(() =>
      fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchExp}&page=${currentPage}`
      )
    );
    const searchResult = yield search.json();
    const searchedMovies: Movie[] = searchResult.Search;
    const movies = searchedMovies
      .map(item => item.imdbID)
      .map(item =>
        call(() =>
          fetch(
            `http://www.omdbapi.com/?apikey=57646235&i=${item}`
          )
        )
      );
    const moviesResponse: Response[] = yield all(movies);

    const formattedMovies = yield all(
      moviesResponse.map(item => item.json())
    );
    yield put(
      getMoviesSuccess({
        movies: formattedMovies,
        total: searchResult.totalResults,
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
