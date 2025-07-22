import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Contact } from './Components/Contact/Contact';
import About from './Components/About/About';
import NotificationBanner from './Components/Header/Head';
import Navbar from './Components/Header/Nabvar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <NotificationBanner/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
