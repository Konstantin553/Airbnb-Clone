import React from "react";
import "./index.css";

export default function Navbar() {
  return (
    <nav>
      <img src="/public/airbnb-logo.png" className="nav--logo" />
      <a href="#" className="nav--text">
        Airbnb your home
      </a>
    </nav>
  );
}
