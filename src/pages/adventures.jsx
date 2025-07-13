import React from 'react';

export default function Adventures() {
  return (
    <section>
      <h2>Backcountry Hikes & Ultraruns</h2>
      <div className="image-grid">
        <div className="card">
          <img src="/images/hike.jpg" alt="Backcountry hike" />
          <div className="card-content">
            <h3>Alpine Traverse</h3>
            <p>3-day solo hike through high elevation passes.</p>
          </div>
        </div>
        <div className="card">
          <img src="/images/ultra.jpg" alt="Ultramarathon race" />
          <div className="card-content">
            <h3>80K Ultramarathon</h3>
            <p>Through forested trails and brutal climbs.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
