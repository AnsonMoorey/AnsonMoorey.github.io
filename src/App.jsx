// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">Adventure Engineer</h1>
        </nav>

        <main className="main-content">
          <Home />
        </main>

        <footer className="footer">
          <div className="footer-links">
            <a href="https://linkedin.com/in/YOUR_LINK" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/YOUR_LINK" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.strava.com/athletes/YOUR_LINK" target="_blank" rel="noopener noreferrer">Strava</a>
          </div>
          <p>© 2025 Adventure Engineer</p>
        </footer>
      </div>
    </Router>
  );
}
