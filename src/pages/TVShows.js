import React from "react";
import Nav from "../components/Nav";
import "./TVShows.css";

function TVShows({ userName }) {
  return (
    <div className="tvshows">
      <Nav userName={userName} />
      <div className="tvshows_content">
        <h1>TV Shows</h1>
        <p>Browse your favorite shows here.</p>
      </div>
    </div>
  );
}

export default TVShows;
