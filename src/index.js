import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.js';
import './index.html'
import './favicon.ico'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

module.hot.accept();
