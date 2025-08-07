import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import TVShows from "./pages/TVShows";
import Movies from './pages/Movies'

function App() {
  const [userName, setUserName] = useState("guest");

  return (
    <Routes>
      <Route path="/" element={<Login setUserName={setUserName} />} />
      <Route path="/landing" element={<Landing userName={userName} />} />
      <Route path="/tv-shows" element={<TVShows userName={userName} />} />
      <Route path="/movies" element={<Movies userName={userName} />} />
    </Routes>
  );
}

export default App;
