import React from 'react';
import ReactDOM from 'react-dom/client';
import './base.css';
import App from './App';

window.history.replaceState({}, '', '/cra/');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
