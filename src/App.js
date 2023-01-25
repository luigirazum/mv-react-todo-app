import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Add the style sheet
import './App.css';

// import pages
import Navbar from './functionBased/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotMatch />} />
    </Routes>
  </>
);

export default App;
