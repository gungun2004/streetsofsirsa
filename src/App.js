import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import OurJourney from './pages/OurJourney/OurJourney';
import Services from './pages/Services/Services';
import Reviews from './pages/Reviews/Reviews';
import Team from './pages/Team/Team';
import ContactUs from './pages/ContactUs/ContactUs';
import ChatIcon from './components/ChatIcon/ChatIcon';

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
      <ChatIcon />
    </div>
  );
}

export default App;