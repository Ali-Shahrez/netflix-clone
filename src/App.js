import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title='NETFLIX ORIGINALS' fetchURL = {requests.fetchNetflixOriginals}/>
      <Row title = 'TRENDING NOW' fetchURL = {requests.fetchTrending}/>
      <Row title = 'TOP RATED' fetchURL = {requests.fetchTopRated}/>
      <Row title = 'ACTION MOVIES' fetchURL = {requests.fetchActionMovies}/>
      <Row title = 'COMEDY MOVIES' fetchURL = {requests.fetchComedyMovies}/>
      <Row title = 'HORROR MOVES' fetchURL = {requests.fetchHorrorMovies}/>
      <Row title = 'ROMANCE MOVIES' fetchURL = {requests.fetchRomaceMovies}/>
      <Row title = 'DOCUMENTARIES' fetchURL = {requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
