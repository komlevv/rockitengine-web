import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.html';
import './favicon.ico';

// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

if (module.hot) module.hot.accept();
