import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Movies from './views/Movies';
import Favorites from './views/Favorites';
import TheNavigation from './components/TheNavigation';

function App() {
  return (
    <BrowserRouter>
      <TheNavigation />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
