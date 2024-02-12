import React from "react";
import "./index.css";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import data from "./data.js";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <h3 className="card--header">
        Plan a trip with help from local Hosts around the world
      </h3>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

export default App;
