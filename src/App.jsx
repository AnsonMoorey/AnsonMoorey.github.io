import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Adventures from './pages/Adventures';
import Engineering from './pages/Engineering';
import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">Adventure Engineer</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/adventures">Adventures</Link></li>
            <li><Link to="/engineering">Engineering</Link></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adventures" element={<Adventures />} />
            <Route path="/engineering" element={<Engineering />} />
          </Routes>
        </main>
        <footer className="footer">© 2025 Adventure Engineer</footer>
      </div>
    </Router>
  );
}
