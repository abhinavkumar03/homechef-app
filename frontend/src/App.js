import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import NotificationBanner from './Components/Header/Head';
import Navbar from './Components/Header/Nabvar';
import Footer from './Components/Footer/Footer';
import ChefConnection from './Components/ChefConnection/ChefConnection';
import Month from './Components/CookForAmonth/Month';
import { OneTime } from './Components/OneTimeCook/OneTime';
import { Chef } from './Components/Chefforparty/Chef';

function App() {
  return (
    <div>
      <NotificationBanner/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-chefkart" element={<ChefConnection />} />
        <Route path="/cook-for-month" element={<Month />} />
        <Route path="/one-time-cook" element={<OneTime />} />
        <Route path="/chef-for-party" element={<Chef />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
