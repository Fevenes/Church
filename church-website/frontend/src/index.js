import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import './i18n'; 
import './styles/theme.css'
// Import your ThemeProvider and ThemeController
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeController from './components/ThemeController';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeController /> {/* applies dark-mode class to <body> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
