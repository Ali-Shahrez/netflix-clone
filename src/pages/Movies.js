import React from "react";
import './Landing.css'; // reuse same styling
import Row from '../components/Row';
import requests from '../requests'; 
import Banner from '../components/Banner';
import Nav from '../components/Nav';

function Movies({ userName }) {
  return (
    <div className="App">
      <Nav userName={userName} />
      <Banner />
      <Row title="Top 10 Movies in Pakistan Today" fetchURL={requests.fetchTop10Movies} isLargeRow />
      <Row title="Hindi-Language Movies" fetchURL={requests.fetchHindiMovies} />
      <Row title="Award-Winning Movies" fetchURL={requests.fetchAwardWinners} />
      <Row title="Thriller Movies" fetchURL={requests.fetchThrillers} />
      <Row title="Movies Based on Real Life" fetchURL={requests.fetchRealLife} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Sci-Fi Movies" fetchURL={requests.fetchSciFiMovies} />
    </div>
  );
}

export default Movies;
