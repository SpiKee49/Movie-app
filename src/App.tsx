import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Movies from './views/Movies';
import Favorites from './views/Favorites';
import TheNavigation from './components/TheNavigation';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <TheNavigation />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies">
          <Route path=":id" element={<MovieDetails />} />
        </Route>

        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
