import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

window.mountGridMfe = (containerId) => {
  ReactDOM
    .createRoot(document.getElementById(containerId))
    .render(
      <App />
    )
}
