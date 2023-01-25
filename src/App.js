import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Add the style sheet
import './App.css';

// import pages
import Navbar from './functionBased/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import SingleAboutPage from './pages/SingleAboutPage';
import NotMatch from './pages/NotMatch';

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":id" element={<SingleAboutPage />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  </>
);

export default App;
