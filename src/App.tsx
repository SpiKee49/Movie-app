import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './views/Home';
import Favorites from './views/Favorites';
import TheNavigation from './components/TheNavigation';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <TheNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie">
          <Route path=":id" element={<MovieDetails />} />
        </Route>

        <Route
          path="/my-favorites"
          element={<Favorites />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
