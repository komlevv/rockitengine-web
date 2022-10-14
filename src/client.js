import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './favicon.ico';

const container = document.getElementById('root');
ReactDOM.hydrateRoot(
  container,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (module.hot) module.hot.accept();
