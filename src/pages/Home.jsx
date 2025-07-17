// src/pages/Home.jsx
import React from 'react';
import './styles.css';
import mountain from '../assets/mountain.jpg'; // Add suitable images in /assets
import running from '../assets/running.jpg';
import engine from '../assets/engine.jpg';

export default function Home() {
  return (
    <div className="home">
      <section className="section">
        <h2>Welcome</h2>
        <p>
          I'm Anson Moorey — an adventurer and engineer with a passion for mountains, endurance, and innovation. This is a place to share my story, projects, and journeys.
        </p>
      </section>

      <section className="section">
        <h2>Adventure Highlights</h2>
        <div className="image-gallery">
          <img src={mountain} alt="Mountain adventure" />
          <img src={running} alt="Running competition" />
        </div>
      </section>

      <section className="section">
        <h2>Engineering Projects</h2>
        <p>
          Mechanical engineering student at University of Ottawa. Rocketry, rapid prototyping, and problem-solving are my thing.
        </p>
        <div className="image-gallery">
          <img src={engine} alt="Rocket engine prototype" />
        </div>
      </section>
    </div>
  );
}
