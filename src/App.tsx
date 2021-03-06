import React from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Favorites from "./components/Favorites";
import FourOhFour from "./components/FourOhFour";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/gifs/search" element={<Gallery />} />
          <Route path="/gifs/:id/details" element={<Details />} />
          <Route path="/gifs/favorites" element={<Favorites />} />
          <Route path="*" element={<FourOhFour />} />
          {/* wild card path ^^*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
