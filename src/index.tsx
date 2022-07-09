import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, sagaMiddleware } from './app/store';
import App from './App';
import './assets/styles/index.scss';
import movieSaga from './app/sagas';

const container = document.getElementById('root')!;
const root = createRoot(container);
sagaMiddleware.run(movieSaga);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
