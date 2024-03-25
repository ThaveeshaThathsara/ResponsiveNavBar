import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
