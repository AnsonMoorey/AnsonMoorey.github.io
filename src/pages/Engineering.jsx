import React from 'react';

export default function Engineering() {
  return (
    <section>
      <h2>Rocketry Projects</h2>
      <div className="image-grid">
        <div className="card">
          <img src="/images/rocket.jpg" alt="Rocket engine test" />
          <div className="card-content">
            <h3>Liquid Rocket Engine</h3>
            <p>Designed and tested at UORocketry with regenerative cooling and thrust vectoring.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
