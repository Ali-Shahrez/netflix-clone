import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' 
      fetchURL = {requests.fetchNetflixOriginals}
      isLargeRow
      />
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
