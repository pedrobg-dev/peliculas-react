import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import ListadoPeliculas from './ListadoPeliculas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/peliculas" component={ListadoPeliculas} />
        <Route path="/blog" component={Blog} />
      </Routes>
    </Router>
  );
}

export default App;
