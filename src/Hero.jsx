import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="hero--header">New this week</h1>
      <div className="hero--images">
        <div className="photo-text">
          <div className="hero-badge">Collection</div>
          <h2 className="image-text">Most popular around the world</h2>
          <img src="/public/most-popular.png" className="hero--photo" />
        </div>
        <div className="photo-text">
          <div className="hero-badge">Collection</div>
          <h2 className="image-text">Easy for itinerary planning</h2>
          <img src="/public/easy-planning.png" className="hero--photo" />
        </div>
        <div className="photo-text">
          <div className="hero-badge">Collection</div>
          <h2 className="image-text">Great for team building</h2>
          <img src="/public/teambuilding.png" className="hero--photo" />
        </div>
      </div>
    </section>
  );
}
