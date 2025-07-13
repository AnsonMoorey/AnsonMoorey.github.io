import React from 'react';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Adventure Engineer</h1>
        <p className="subtitle">Exploring the wild & building rocket engines 🚀</p>
      </header>

      <section className="section">
        <h2>Backcountry Hikes & Ultraruns</h2>
        <p>
          Join me on epic backcountry trails and ultramarathons — pushing limits in nature’s toughest terrain.
        </p>
      </section>

      <section className="section">
        <h2>Mechanical Engineering & Rocketry</h2>
        <p>
          Passionate about building cutting-edge rocket engines with <a href="https://github.com/uorocketry" target="_blank" rel="noopener noreferrer">UORocketry</a>.
        </p>
      </section>

      <footer>
        <p>© 2025 Adventure Engineer</p>
      </footer>
    </div>
  );
}
